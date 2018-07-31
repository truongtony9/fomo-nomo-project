require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const eventsCtrl = require('./controllers/eventsCtrl');
const userCtrl = require('./controllers/userCtrl');
const strategy = require('./strategy');
const path = require('path');
const socket = require('socket.io');

const app = express();

app.use(json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(err => console.log(err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 2 * 7 * 24 * 60 * 60 * 1000
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log(user);
  const db = app.get('db');
  db.getUserFromAuthid([user.id])
    .then(response => {
      if (!response[0]) {
        db.addUserFromAuthid([
          user.displayName,
          user.id,
          user.picture,
          user.emails[0].value
        ])
          .then(res => done(null, res[0]))
          .catch(err => console.log(err));
      } else return done(null, response[0]);
    })
    .catch(err => console.log(err));
  return done(null, user);
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

app.get(
  '/login',
  passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_DEV_HOST,
    failureRedirect: '/login',
    failureFlash: true
  })
);

function authenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect(process.env.REACT_APP_DEV_HOST);
  }
}

// app.get("/api/me", (req, res, next) => {
//   const { user } = req;
//   return res.status(200).json(user);
// });

app.get('/logout', authenticated, (req, res, next) => {
  req.session.destroy();
  res.redirect(process.env.REACT_APP_DEV_HOST);
});

app.get('/', authenticated, (req, res, next) => {
  res.send('Log In Successful');
});

app.get('/api/events', eventsCtrl.getEvents);
app.get('/api/events/:id', eventsCtrl.getAnEvent);
app.post('/api/events', eventsCtrl.addEvent);
app.delete('/api/events/:id', eventsCtrl.deleteEvent);
app.put('/api/events/:id', eventsCtrl.updateEvent);

app.get('/api/me', userCtrl.getCurrentUser);
// app.get("/api/me", userCtrl.getUser);
// app.post("/api/me", userCtrl.addUserFromAuthid);

const port = process.env.PORT || 3001;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

portServer = app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});

const io = socket(portServer);

io.on('connection', socket => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data) {
    io.emit('RECEIVE_MESSAGE', data);
  });
  socket.on('USER_CONNECTED', function(name) {
    // console.log(name.name);
    var chatUser = name.name;
    io.emit('THE_USER_CONNECTED', name);
    socket.on('disconnect', function() {
      console.log(chatUser);
      // let leaving = "Someone has left.";
      io.sockets.emit('disconnected', chatUser);
    });
  });
});

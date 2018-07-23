require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
const eventsCtrl = require("./controllers/eventsCtrl");
const userCtrl = require("./controllers/userCtrl");
const strategy = require("./strategy");
const path = require("path");

const app = express();

app.use(json());
app.use(cors());
app.use(morgan("tiny"));
// app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);

passport.serializeUser((user, done) => {
  // console.log(user);
  const db = app.get("db");
  db.getUserFromAuthid([user.auth_id])
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
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login",
    failureFlash: true
  })
);

function userLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect("http://localhost:3000");
  }
}

app.get("/", userLoggedIn, (req, res, next) => {
  res.send("Log In Successful");
});

app.get("/logout", userLoggedIn, (req, res, next) => {
  req.session.destroy();
  res.redirect("http://localhost:3000");
});

app.get("/me", (req, res, next) => {
  const { user } = req;
  return res.status(200).json(user);
});

app.get("/api/events", eventsCtrl.getEvents);
app.get("/api/events/:id", eventsCtrl.getAnEvent);
app.post("/api/events", eventsCtrl.addEvent);
app.delete("/api/events/:id", eventsCtrl.deleteEvent);
app.put("/api/events/:id", eventsCtrl.updateEvent);

app.get("/api/users/:id", userCtrl.getUser);

const port = process.env.PORT || 3001;

// const socketapp = require("http").createServer();
// const io = (module.exports.io = require("socket.io")(socketapp));

// const socketCtrl = require("./controllers/socketCtrl");

// io.on("connection", socketCtrl);

// app.get('*' (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});

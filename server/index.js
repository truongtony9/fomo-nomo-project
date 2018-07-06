require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
const eventsCtrl = require("./controllers/eventsCtrl");
const strategy = require("./strategy");

const app = express();

app.use(json());
app.use(cors());
app.use(morgan("tiny"));

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

// function userLoggedIn(req, res, next) {
//   if (req.user) {
//     next();
//   } else {
//     res.redirect("http://localhost:3000");
//   }
// }

// app.get("/", userLoggedIn, (req, res, next) => {
//   res.send("Success!");
// });

// app.get("/logout", userLoggedIn, (req, res, next) => {
//   req.session.destroy();
//   res.redirect("http://localhost:3000");
// });

// app.get("/me", (req, res, next) => {
//   const { user } = req;
//   return res.status(200).json(user);
// });

app.get("/api/events", eventsCtrl.getEvents);
app.get("/api/events/:id", eventsCtrl.getAnEvent);
app.post("/api/events", eventsCtrl.addEvent);
// app.delete("/api/events/:id", eventsCtrl.deleteEvent);
// app.put("/api/events/:id", eventsCtrl.updateEvent);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});

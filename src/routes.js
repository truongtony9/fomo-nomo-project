import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Messenger from "./components/Messenger/Messenger";
import About from "./components/Home/About/About";
import Contact from "./components/Home/Contact/Contact";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/events" component={Events} />
    <Route path="/messenger" component={Messenger} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

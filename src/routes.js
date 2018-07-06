import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Messages from "./components/Messages/Messages";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/events" component={Events} />
    <Route path="/messages" component={Messages} />
  </Switch>
);

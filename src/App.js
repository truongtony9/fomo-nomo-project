import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes";

import store from "./redux/store";
import Navbar from "./components/Navbar/Navbar";
import Widget from "./components/Chat/Chat";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="Appheader">
              <Navbar />
            </div>
            <div className="">{routes}</div>
            <Widget />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

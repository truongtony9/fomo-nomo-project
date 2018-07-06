import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

// import AccountCircle from "@material-ui/icons/AccountCircle";
import logoimg from "../../logoimg.png";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <div>
              <Link to="/">
                <img src={logoimg} className="logo" alt="logoimg" />
              </Link>
            </div>
            <div className="rightnavbar">
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/messages">Messages</Link>
              <Link to="/login">Login</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}

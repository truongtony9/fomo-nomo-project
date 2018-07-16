import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/usersReducer";
// import routes from "../../routes";
// import axios from "axios";

// import AccountCircle from "@material-ui/icons/AccountCircle";
import logoimg from "../../logoimg.png";
import "./Navbar.css";

class Navbar extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { user } = this.props;
    return (
      <Router>
        <div>
          <nav className="nav">
            <div>
              <Link to="/">
                <img src={logoimg} className="logo" alt="logoimg" />
              </Link>
            </div>
            <div className="rightnavauth">
              {user ? (
                <a href="http://localhost:3001/logout">Logout</a>
              ) : (
                <a href="http://localhost:3001/login">Login</a>
              )}
              {user && (
                <div className="rightnavbar">
                  <Link to="/">Home</Link>
                  <Link to="/events">Events</Link>
                  <Link to="/messages">Messages</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });
export default connect(
  mapStateToProps,
  { getUser }
)(Navbar);

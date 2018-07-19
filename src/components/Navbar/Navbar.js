import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/usersReducer";
// import routes from "../../routes";
// import axios from "axios";

import { Input, Menu, Dropdown } from "semantic-ui-react";
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
            <div className="navbar">
              <Menu secondary>
                <Menu.Item name="Home">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item name="Events">
                  <Link to="/events">Events</Link>
                </Menu.Item>
                <Menu.Item name="Messages">
                  <Link to="/messages">Messages</Link>
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item>
                    <Input icon="search" placeholder="Search..." />
                  </Menu.Item>
                  <Menu.Item name="logout">
                    {user ? (
                      <a href="http://localhost:3001/logout">
                        <Dropdown
                          text="Logout"
                          icon="user"
                          floating
                          labeled
                          button
                          className="icon"
                        />
                      </a>
                    ) : (
                      <a href="http://localhost:3001/login">
                        <Dropdown
                          text="Login"
                          icon="user"
                          floating
                          labeled
                          button
                          className="icon"
                        />
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
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

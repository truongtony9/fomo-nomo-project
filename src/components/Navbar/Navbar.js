import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../redux/ducks/usersReducer';
import routes from '../../routes';
// import axios from "axios";

import { Input, Menu, Dropdown } from 'semantic-ui-react';
import fomologo from '../../fomologo.png';
import './Navbar.css';

class Navbar extends Component {
  componentDidMount() {
    this.props.getCurrentUser().then(() => {
      console.log(this.props.user);
    });
  }

  render() {
    const { user } = this.props;

    return (
      <Router>
        <div>
          <nav className="nav">
            <div>
              <Link to="/">
                <img src={fomologo} className="logo" alt="logoimg" />
              </Link>
            </div>
            <div className="navbar">
              <Menu secondary>
                <Menu.Item name="logout">
                  {user.displayName ? (
                    <a href={process.env.REACT_APP_LOGOUT}>
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
                    <a href={process.env.REACT_APP_LOGIN}>
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
                {user && (
                  <Menu.Menu position="right">
                    <Menu.Item name="Home">
                      <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item name="Events">
                      <Link to="/events">Events</Link>
                    </Menu.Item>
                    <Menu.Item name="Messages">
                      <Link to="/messenger">Messenger</Link>
                      <Menu.Item>
                        <Input icon="search" placeholder="Search..." />
                      </Menu.Item>
                    </Menu.Item>
                  </Menu.Menu>
                )}
              </Menu>
            </div>
          </nav>
          {/* {user && routes} */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });
export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Navbar);

// {user && ()}

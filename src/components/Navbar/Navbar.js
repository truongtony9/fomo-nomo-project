import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../redux/ducks/usersReducer';
import routes from '../../routes';
// import axios from "axios";

import { Input, Menu, Dropdown } from 'semantic-ui-react';
import fomologo from '../../fomologo.png';
import './Navbar.css';

import styled, { css } from 'react-emotion';
const Nav = styled('div')`
  background-color: black;
  color: white;
  height: 8vh;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavbarLog = css`
  text-decoration: none;
  color: white;
`;

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
          <Nav>
            <div>
              <Link to="/">
                <img src={fomologo} className="logo" alt="logoimg" />
              </Link>
            </div>
            <div>
              <Menu secondary>
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
                {user && (
                  <Menu.Menu position="right">
                    <Menu.Item name="Home">
                      <Link className={NavbarLog} to="/">
                        Home
                      </Link>
                    </Menu.Item>
                    <Menu.Item name="Events">
                      <Link className={NavbarLog} to="/events">
                        Events
                      </Link>
                    </Menu.Item>
                    <Menu.Item name="Messages">
                      <Link className={NavbarLog} to="/messenger">
                        Messenger
                      </Link>
                      <Menu.Item>
                        <Input icon="search" placeholder="Search..." />
                      </Menu.Item>
                    </Menu.Item>
                  </Menu.Menu>
                )}
              </Menu>
            </div>
          </Nav>
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

import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

// import "./Subnav.css"

class Subnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <div className="rightnavbar">
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Input
                onChange={e => this.setState({ search: e.target.value })}
                style={{ color: "white" }}
                inputProps={{
                  "aria-label": "Description"
                }}
                startAdornment={
                  <InputAdornment>
                    <Search />
                  </InputAdornment>
                }
              />
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}

export default Subnav;

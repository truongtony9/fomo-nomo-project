import React, { Component } from "react";

import { connect } from "react-redux";
import { getEvents } from "../../redux/ducks/eventsReducer";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="bodycontainer">
        <header>
          <p>TEST</p>
          <p>TEST</p>
        </header>
        {/* {eventsDisplay} */}
        <div className="sidebyside">
          <div className="bodyimage" />
          <div className="bodyimage2" />
        </div>
        <div className="bodytext">
          <p>Do you have FOMO (Fear of Missing Out)?</p>
          <p>
            Here at FOMO-NOMO we want to make that fear disappear. NO MO to the
            FOMO!
          </p>
          <p>
            Let's bring people, food, events, and good vibes together. Hang,
            eat, and connect!
          </p>
          <p>#NEVERMISSOUT</p>
        </div>
        <div className="footer">
          <p>About</p>
          <p>Disclaimer</p>
          <p>Contact</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getEvents }
)(Home);

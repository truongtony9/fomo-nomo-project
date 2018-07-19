import React, { Component } from "react";

import { connect } from "react-redux";
import { getEvents } from "../../redux/ducks/eventsReducer";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="bodycontainer">
        <div className="sidebyside">
          <input type="radio" name="images" id="i1" checked />
          <input type="radio" name="images" id="i2" checked />
          <input type="radio" name="images" id="i3" checked />
          <div className="bodyimage" id="one">
            <label for="i3" className="pre" />
            <label for="i2" className="nxt" />
          </div>
          <div className="bodyimage2" id="two">
            <label for="i1" className="pre" />
            <label for="i3" className="nxt" />
          </div>
          <div className="bodyimage3" id="three">
            <label for="i2" className="pre" />
            <label for="i1" className="nxt" />
          </div>
          <div className="slide">
            <label className="dots" id="dot1" for="i1" />
            <label className="dots" id="dot2" for="i2" />
            <label className="dots" id="dot3" for="i3" />
          </div>
        </div>
        <div className="bodytext">
          <br />
          <p>Do you have FOMO (Fear of Missing Out)?</p>
          <p>
            Sign up for FOMO-NOMO, stay updated on all events that are
            happening. NO MO to the FOMO!
          </p>
          <p>Let's bring people, food, events, and good vibes together.</p>
          <p>#NEVERMISSOUT</p>
          <br />
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

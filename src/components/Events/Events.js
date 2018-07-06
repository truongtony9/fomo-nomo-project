import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents, addEvent } from "../../redux/ducks/eventsReducer";

import axios from "axios";
import "./Events.css";
import Button from "@material-ui/core/Button";
class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
    this.props.addEvent();
  }

  render() {
    const { isLoading, events } = this.props;
    // console.log(props);
    const eventsDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      events.map(events => {
        return (
          <div className="list">
            <p>
              <img className="listimage" src={events.image_url} />
            </p>
            <p>Title: {events.title}</p>
            <p>Description: {events.description}</p>
            <p>Date: {events.date}</p>
            <p>Time: {events.time}</p>
            <p>Address: {events.address}</p>
          </div>
        );
      })
    );
    return (
      <div>
        <div className="displayevents">{eventsDisplay}</div>
        <Button variant="raised" color="primary">
          Create New Event
        </Button>
        <Button variant="raised" color="primary">
          Update Event
        </Button>
        <Button variant="raised" color="primary">
          Delete Event
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => state;
// ({ events, event }) => ({ ...events });

export default connect(
  mapStateToProps,
  { getEvents, addEvent }
)(Events);

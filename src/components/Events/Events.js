import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEvents,
  addEvent,
  deleteEvent
} from "../../redux/ducks/eventsReducer";
import ModalForm from "../ModalForm/ModalForm";
// import axios from "axios";
import "./Events.css";
import Calendar from "react-calendar";
import { Button, Dropdown } from "semantic-ui-react";

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
    this.props.addEvent();
  }

  render() {
    const options = [
      { key: "edit", icon: "edit", text: "Edit Post", value: "edit" },
      { key: "delete", icon: "delete", text: "Remove Post", value: "delete" }
    ];

    const { isLoading, events } = this.props;
    // console.log(props);
    const eventsDisplay = isLoading ? (
      <p>Loading......</p>
    ) : (
      events.map(events => {
        return (
          <div className="list">
            <div className="caretdown">
              <Button.Group color="teal">
                <Button>Save</Button>
                <Dropdown options={options} floating button className="icon" />
              </Button.Group>
            </div>
            <p>
              <div className="imagecontainer">
                <img className="listimage" src={events.image_url} />
              </div>
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
        <div className="container">
          <div className="displayevents">{eventsDisplay}</div>

          <div className="createbutton">
            <ModalForm />
            <div className="calendar">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ events, event }) => ({ ...events });

export default connect(
  mapStateToProps,
  { getEvents, addEvent }
)(Events);

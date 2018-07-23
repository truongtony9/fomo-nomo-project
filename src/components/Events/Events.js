import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  getEvents,
  addEvent,
  deleteEvent,
  updateEvent
} from "../../redux/ducks/eventsReducer";
import EventsPost from "./EventsPost/EventsPost";
import ModalForm from "../ModalForm/ModalForm";
import Calendar from "react-calendar";

import "./Events.css";
import {
  Button,
  Dropdown,
  Dimmer,
  Loader,
  Segment,
  Icon,
  TextArea
} from "semantic-ui-react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      events: [],
      input: "",
      toggle: false,
      edit: false,
      title: this.props.events.title,
      description: this.props.events.description,
      date: this.props.events.date,
      time: this.props.events.time,
      address: this.props.events.address,
      image_url: this.props.events.image_url
    };
  }
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    let {
      id,
      title,
      description,
      date,
      time,
      address,
      image_url,
      isLoading,
      events
    } = this.props;
    // console.log(props);

    const eventsDisplay = isLoading ? (
      <div>
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        </Segment>
      </div>
    ) : (
      events.map(events => {
        return (
          <EventsPost
            id={events.id}
            title={events.title}
            description={events.description}
            date={events.date}
            time={events.time}
            address={events.address}
            image={events.image_url}
          />
        );
      })
    );

    return (
      <div>
        <div className="container">
          <div className="displayevents">{eventsDisplay}</div>
          <div className="createandcalendar">
            <div className="createbutton">
              <ModalForm />
              <hr />
              <div className="calendar">
                <Calendar />
              </div>
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
  { getEvents, addEvent, deleteEvent, updateEvent }
)(Events);

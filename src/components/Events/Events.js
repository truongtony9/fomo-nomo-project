import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEvents,
  addEvent,
  deleteEvent
} from "../../redux/ducks/eventsReducer";
import ModalForm from "../ModalForm/ModalForm";
// import ModifyEvents from "../ModifyEvents/ModifyEvents";
import Calendar from "react-calendar";
// import axios from "axios";
import "./Events.css";
import {
  Button,
  Dropdown,
  Dimmer,
  Loader,
  Image,
  Segment,
  Icon
} from "semantic-ui-react";

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { isLoading, events } = this.props;
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
          <div className="box">
            <div className="caretdown">
              <div>
                <Button.Group color="teal">
                  <Button>Modify</Button>
                  <Dropdown floating button className="icon">
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Icon name="edit" type="submit" />
                        <span className="text">Edit Post</span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Icon
                          name="delete"
                          type="submit"
                          onClick={() => this.props.deleteEvent({})}
                        />
                        <span className="text">Delete Post</span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Button.Group>
              </div>
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
  { getEvents, addEvent, deleteEvent }
)(Events);

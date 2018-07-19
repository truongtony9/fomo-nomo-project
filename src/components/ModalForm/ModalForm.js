import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEvents,
  addEvent,
  deleteEvent
} from "../../redux/ducks/eventsReducer";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Icon,
  Dropdown
} from "semantic-ui-react";

class ModalForm extends Component {
  componentDidMount() {
    this.props.getEvents();
    this.props.addEvent();
  }
  render() {
    return (
      <Modal trigger={<Button color="teal">Create Event</Button>} closeIcon>
        <Modal.Header>Create A New Event</Modal.Header>
        <Modal.Description>
          <Form>
            <Form.Field>
              <br />
              <label>&nbsp;Title:</label>
              <input placeholder="Title" />
              {/* {events.title} */}
            </Form.Field>
            <Form.Field>
              <label>&nbsp;Description:</label>
              <input placeholder="Description" />
              {/* {events.description} */}
            </Form.Field>
            <Form.Field>
              <label>&nbsp;Date:</label>
              <input placeholder="Date" />
              {/* {events.date} */}
            </Form.Field>
            <Form.Field>
              <label>&nbsp;Time:</label>
              <input placeholder="Time" />
              {/* {events.time} */}
            </Form.Field>
            <Form.Field>
              <label>&nbsp;Address:</label>
              <input placeholder="Address" />
              {/* {events.address} */}
            </Form.Field>
            <Form.Field>
              <label>&nbsp;Image Url:</label>
              <input placeholder="Image Url" />
              {/* {events.image_url} */}
            </Form.Field>
            <Button onClick={() => this.props.addEvent()} type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Description>
      </Modal>
    );
  }
}

const mapStateToProps = ({ events, event }) => ({ ...events });

export default connect(
  mapStateToProps,
  { getEvents, addEvent }
)(ModalForm);

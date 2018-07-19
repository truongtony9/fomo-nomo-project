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
import { open } from "fs";

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: "",
      time: "",
      address: "",
      image_url: "",
      open: false
    };
  }
  // componentDidMount() {
  //   this.props.getEvents();
  // }
  closeConfigShow = closeOnEscape => () => {
    this.setState({ closeOnEscape, open: true });
  };

  close = () => this.setState({ open: false });

  onChangeHandler = e => {
    // console.log(`${e.target.name}: `, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // onModalOpen = () => {
  //   this.setState({ open: true });
  // };
  render() {
    const {
      title,
      description,
      date,
      time,
      address,
      image_url,
      open,
      closeOnEscape
    } = this.state;
    return (
      <React.Fragment>
        <Button color="teal" onClick={this.closeConfigShow(false, true)}>
          Create Event
        </Button>

        <Modal open={open} closeOnEscape={closeOnEscape} onClose={this.close}>
          <Modal.Header>Create A New Event</Modal.Header>
          <Modal.Description>
            <Form>
              <Form.Field>
                <br />
                <label>&nbsp;Title:</label>
                <input
                  onChange={this.onChangeHandler}
                  name="title"
                  value={title}
                  placeholder="Title"
                />
                {/* {events.title} */}
              </Form.Field>
              <Form.Field>
                <label>&nbsp;Description:</label>
                <input
                  onChange={this.onChangeHandler}
                  name="description"
                  value={description}
                  placeholder="Description"
                />
                {/* {events.description} */}
              </Form.Field>
              <Form.Field>
                <label>&nbsp;Date:</label>
                <input
                  onChange={this.onChangeHandler}
                  name="date"
                  value={date}
                  placeholder="Date"
                />
                {/* {events.date} */}
              </Form.Field>
              <Form.Field>
                <label>&nbsp;Time:</label>
                <input
                  onChange={this.onChangeHandler}
                  name="time"
                  value={time}
                  placeholder="Time"
                />
                {/* {events.time} */}
              </Form.Field>
              <Form.Field>
                <label>&nbsp;Address:</label>
                <input
                  onChange={this.onChangeHandler}
                  name="address"
                  value={address}
                  placeholder="Address"
                />
                {/* {events.address} */}
              </Form.Field>
              <Form.Field>
                <label>&nbsp;Image Url:</label>
                <input
                  onChange={this.onChangeHandler}
                  name="image_url"
                  value={image_url}
                  placeholder="Image Url"
                />
                {/* {events.image_url} */}
              </Form.Field>
              <Button
                onClick={() => {
                  this.props.addEvent({
                    title: title,
                    description: description,
                    date: date,
                    time: time,
                    address: address,
                    image_url: image_url
                  });
                  this.setState({ open: false });
                }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Modal.Description>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ events, event }) => ({ ...events });

export default connect(
  mapStateToProps,
  { getEvents, addEvent }
)(ModalForm);

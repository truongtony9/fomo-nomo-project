import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  getEvents,
  getAnEvent,
  deleteEvent,
  updateEvent
} from '../../../redux/ducks/eventsReducer';
import { getCurrentUser } from '../../../redux/ducks/usersReducer';
import {
  Button,
  Dropdown,
  Dimmer,
  Loader,
  Segment,
  Icon,
  TextArea
} from 'semantic-ui-react';

class EventsPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      events: [],
      titleinput: '',
      descriptioninput: '',
      dateinput: '',
      timeinput: '',
      addressinput: '',
      image_urlinput: '',
      toggle: false,
      edit: false,
      title: '',
      description: '',
      date: '',
      time: '',
      address: '',
      image_url: ''
    };
  }
  componentDidMount() {
    // this.props.getCurrentUser().then(() => {
    //   console.log(this.props.user);
    // });

    let {
      id,
      title,
      description,
      date,
      time,
      address,
      image_url,
      isLoading,
      user_id,
      user_name,
      user
    } = this.props;
    this.setState({
      id,
      title,
      description,
      date,
      time,
      address,
      image_url,
      user_id,
      user_name
    });
  }
  // onChangeHandler = e => {
  //   // console.log(`${e.target.name}: `, e.target.value);
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  deleteHandler = id => {
    console.log(id);
    axios
      .delete(`/api/events/${id}`)
      .then(res => this.setState({ events: res.data }));
    this.props.getEvents();
  };

  updateHandler = (id, title, description, date, time, address, image_url) => {
    axios
      .put(`/api/events/${id}`, {
        title,
        description,
        date,
        time,
        address,
        image_url
      })
      .then(res => this.setState({ events: res.data }));
    this.props.getEvents();
  };

  inputHandler = e => {
    let inputName = e.target.name + 'input';
    console.log(e.target.name, e.target.value);

    this.setState({ inputName: e.target.value });
  };

  editToggle(title, description, date, time, address, image) {
    this.setState({
      edit: !this.state.edit,
      titleinput: title,
      descriptioninput: description,
      dateinput: date,
      timeinput: time,
      addressinput: address,
      imageinput: image
    });
  }
  onChangeInput = e => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    // console.log(name);
    this.setState({ [name]: value });
  };

  // onChangeNew = e => {
  //   console.log(e.target.value);
  //   this.setState({
  //     titleinput: e.target.value
  //   });
  // };
  render() {
    // let {
    //   id,
    //   title,
    //   description,
    //   date,
    //   time,
    //   address,
    //   image,
    //   isLoading,
    //   events
    // } = this.props;
    console.log(this.props.events[0].user_name);

    const { edit } = this.state;
    let editToggle;

    if (!edit) {
      editToggle = (
        <div className="">
          <div className="imagecontainer">
            <img className="listimage" src={this.props.image} />
          </div>
          <p>Title: {this.props.title}</p>
          <p>Description: {this.props.description}</p>
          <p>Date: {this.props.date}</p>
          <p>Time: {this.props.time}</p>
          <p>Address: {this.props.address}</p>
          <p>Event Creator: {this.props.events[0].user_name}</p>
        </div>
      );
    } else {
      editToggle = (
        <div className="toggletext">
          <div className="imagecontainer">
            <img className="listimage" src={this.state.image} />
          </div>
          <div className="eventinputs">
            <input
              name="titleinput"
              id="eventpost"
              autoHeight
              value={this.state.titleinput}
              // onChange={event => this.inputHandler(event)}
              onChange={this.onChangeInput}
            />
            <input
              name="descriptioninput"
              id="eventpost"
              autoHeight
              value={this.state.descriptioninput}
              // onChange={event => this.inputHandler(event)}
              onChange={this.onChangeInput}
            />
            <input
              name="dateinput"
              id="eventpost"
              autoHeight
              value={this.state.dateinput}
              // onChange={event => this.inputHandler(event)}
              onChange={this.onChangeInput}
            />
            <input
              name="timeinput"
              id="eventpost"
              autoHeight
              value={this.state.timeinput}
              // onChange={event => this.inputHandler(event)}
              onChange={this.onChangeInput}
            />
            <input
              name="addressinput"
              id="eventpost"
              autoHeight
              value={this.state.addressinput}
              // onChange={event => this.inputHandler(event)}
              onChange={this.onChangeInput}
            />
            <input
              name="imageinput"
              id="eventpost"
              autoHeight
              value={this.props.image}
              // onChange={event => this.inputHandler(event)}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="toggle-btns">
            <Button
              style={{
                backgroundColor: '#DC3545',
                color: '#fff',
                marginTop: '5px'
              }}
              onClick={() => this.editToggle()}
              animated="vertical"
            >
              <Button.Content hidden>Cancel</Button.Content>
              <Button.Content visible>
                <Icon style={{ color: '#fff' }} name="cancel" />
              </Button.Content>
            </Button>
            <Button
              style={{
                backgroundColor: '#17ea17',
                color: '#fff',
                marginTop: '5px'
              }}
              type="submit"
              onClick={() => {
                this.editToggle();
                this.updateHandler(
                  this.state.id,
                  this.state.titleinput,
                  this.state.descriptioninput,
                  this.state.dateinput,
                  this.state.timeinput,
                  this.state.addressinput,
                  this.state.imageinput
                );
              }}
              animated="vertical"
            >
              <Button.Content hidden>Confirm</Button.Content>
              <Button.Content visible>
                <Icon name="check" />
              </Button.Content>
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div className="box">
        <div className="caretdown">
          <div>
            <Button.Group color="teal">
              <Button>Modify</Button>
              <Dropdown floating button className="icon">
                <Dropdown.Menu>
                  <Dropdown.Item
                    className="dropdown"
                    type="submit"
                    onClick={() => {
                      this.editToggle(
                        this.props.title,
                        this.props.description,
                        this.props.date,
                        this.props.time,
                        this.props.address,
                        this.props.image_url
                      );
                    }}
                  >
                    <Icon name="edit" />
                    <span className="text">Edit Post</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown"
                    type="submit"
                    onClick={() => this.deleteHandler(this.props.id)}
                  >
                    <Icon name="delete" />
                    <span className="text">Delete Post</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Button.Group>
          </div>
        </div>
        {editToggle}
      </div>
    );
  }
}

const mapStateToProps = ({ events, event, users }) => ({ ...events, ...users });

export default connect(
  mapStateToProps,
  { getEvents, deleteEvent, updateEvent, getCurrentUser }
)(EventsPost);

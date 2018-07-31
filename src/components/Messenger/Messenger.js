import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import StayScrolled from 'react-stay-scrolled';
import axios from 'axios';
import { getCurrentUser } from '../../redux/ducks/usersReducer';
import { Icon, TextArea, Form, Button } from 'semantic-ui-react';

import './Messenger.css';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
      messages: []
    };

    this.socket = io('localhost:3001');

    this.socket.on('RECEIVE_MESSAGE', function(data) {
      addMessage(data);
    });

    this.socket.on('THE_USER_CONNECTED', function(data) {
      const newUser = {
        author: data.name,
        message: 'Connected to Chat'
      };
      addMessage(newUser);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.socket.on('disconnected', function(MessengerUser) {
      console.log(MessengerUser);
      const newUser = {
        author: MessengerUser,
        message: 'Left the Chat'
      };
      addMessage(newUser);
    });

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        // author: this.state.username,
        author: this.props.user[0] ? this.props.user[0].displayName : 'Guest',
        message: this.state.message
      });
      this.setState({ message: '' });
    };
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };
  componentDidMount() {
    this.props.getCurrentUser().then(() => {
      this.socket.emit('USER_CONNECTED', {
        name: this.props.user[0] ? this.props.user[0].displayName : 'Guest'
      });
    });
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
    console.log(this.props.user);
  }
  comp;
  render() {
    return (
      <div>
        <div className="title">
          <Icon name="chat" />
          Messenger Chat
          <p>Welcome to FOMO-NOMO!</p>
          <p>
            Chat with other members, we do not tolerate offensive behavior. This
            is not the site for that, lets be mature please.
          </p>
          <hr />
        </div>
        <div className="messengercontainer">
          <div className="messages">
            {this.state.messages.map(message => {
              return (
                <div>
                  {message.author}: {message.message}
                  {console.log(message.message)}
                </div>
              );
            })}
          </div>
          <div
            // style={{ float: 'left', clear: 'both' }}
            ref={e => {
              this.messagesEnd = e;
            }}
          />
        </div>
        <div className="textarea">
          <Form>
            <TextArea
              type="text"
              placeholder="Message"
              className="textbox"
              value={this.state.message}
              onChange={event => this.setState({ message: event.target.value })}
            />
            <br />
          </Form>
        </div>
        <Button
          className="sendbutton"
          // content="Primary"
          // primary
          color="black"
          onClick={this.sendMessage}
        >
          Send
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}
export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Messenger);

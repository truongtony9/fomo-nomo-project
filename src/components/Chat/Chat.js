import React, { Component } from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

class Chat extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to FOMO-NOMO!");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    // addResponseMessage(response);
  };
  render() {
    return (
      <div>
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          // profileAvatar={logo}
          title="Chat"
          subtitle="#NeverMissOut"
        />
      </div>
    );
  }
}

export default Chat;

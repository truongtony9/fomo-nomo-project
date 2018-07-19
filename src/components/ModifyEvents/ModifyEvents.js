import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents, deleteEvent } from "../../redux/ducks/eventsReducer";
import { Button, Dropdown, Icon } from "semantic-ui-react";
// import axios from "axios";

class ModifyEvents extends Component {
  render() {
    return (
      <div>
        <Button.Group color="teal">
          <Button>Modify</Button>
          <Dropdown floating button className="icon">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon
                  //   onClick={() => this.props.deleteEvent({})}
                  name="edit"
                  type="submit"
                />
                <span className="text">Edit Post</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon name="delete" type="submit" />
                <span className="text">Delete Post</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Button.Group>
      </div>
    );
  }
}

const mapStateToProps = ({ events, event }) => ({ ...events });

export default connect(
  mapStateToProps,
  { getEvents, deleteEvent }
)(ModifyEvents);

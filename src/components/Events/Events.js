import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  getEvents,
  addEvent,
  deleteEvent,
  updateEvent
} from '../../redux/ducks/eventsReducer';
import { getCurrentUser } from '../../redux/ducks/usersReducer';
import EventsPost from './EventsPost/EventsPost';
import ModalForm from '../ModalForm/ModalForm';
import Calendar from 'react-calendar';

import './Events.css';
import {
  Button,
  Dropdown,
  Dimmer,
  Loader,
  Segment,
  Icon,
  TextArea
} from 'semantic-ui-react';

import styled, { css } from 'react-emotion';
const PageLayout = styled('div')`
  display: grid;
  grid-template-columns: 70% 30%;
`;
const DisplayEvents = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
`;
const CalendarAndCreateB = styled('div')`
  display: flex;
  align-items: center;
  margin: 8px auto;
  border: 2px solid black;
  background-color: black;
  width: 375px;
  height: 375px;
`;
const CreateButton = styled('div')`
  margin: 5px auto;
`;
const CalendarBox = styled('div')`
  box-sizing: border-box;
  color: white;
`;

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      events: [],
      input: '',
      toggle: false,
      edit: false,
      title: this.props.events.title,
      description: this.props.events.description,
      date: this.props.events.date,
      time: this.props.events.time,
      address: this.props.events.address,
      image_url: this.props.events.image_url,
      userid: this.props.events.userid
    };
  }
  componentDidMount() {
    this.props.getEvents();
    this.props.getCurrentUser();
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
      events,
      userid,
      users,
      user_name
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
            eventcreator={events.user_name}
          />
        );
      })
    );

    return (
      <div>
        <PageLayout>
          <DisplayEvents>{eventsDisplay}</DisplayEvents>
          <CalendarAndCreateB>
            <CreateButton>
              <ModalForm />
              <hr />
              <CalendarBox>
                <Calendar />
              </CalendarBox>
            </CreateButton>
          </CalendarAndCreateB>
        </PageLayout>
      </div>
    );
  }
}

const mapStateToProps = ({ events, event, users }) => ({ ...events, ...users });

export default connect(
  mapStateToProps,
  { getEvents, addEvent, deleteEvent, updateEvent, getCurrentUser }
)(Events);

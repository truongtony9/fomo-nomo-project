import axios from "axios";

const GET_EVENTS = "GET_EVENTS";
const ADD_EVENT = "ADD_EVENT";
const DELETE_EVENT = "DELETE_EVENT";

export function getEvents() {
  return {
    type: GET_EVENTS,
    payload: axios.get("/api/events")
  };
}
export function addEvent() {
  return {
    type: ADD_EVENT,
    payload: axios.post("/api/event", addEvent)
  };
}

export function deleteEvent() {
  return {
    type: DELETE_EVENT,
    payload: axios.delete("/api/event/:id")
  };
}
const initialState = {
  events: [],
  isLoading: false,
  error: ""
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_EVENTS_PENDING":
      return { ...state, isLoading: true };
    case "GET_EVENTS_FULFILLED":
      return { ...state, isLoading: false, events: action.payload.data };
    case "GET_EVENTS_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "ADD_EVENT_PENDING":
      return { ...state, isLoading: true };
    case "ADD_EVENT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        events: [...state.events, action.payload.data]
      };
    case "ADD_EVENT_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "DELETE_EVENTS_PENDING":
      return { ...state, isLoading: true };
    case "DELETE_EVENTS_FULFILLED":
      return { ...state, isLoading: false, events: action.payload.data };
    case "DELETE_EVENTS_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    default:
      return state;
  }
}

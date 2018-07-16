import axios from "axios";

const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/me")
  };
}

const initialState = {
  user: [],
  isLoading: false,
  error: ""
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_PENDING":
      return { ...state, isLoading: true };
    case "GET_USER_FULFILLED":
      return { ...state, isLoading: false, user: action.payload.data };
    case "GET_USER_REJECTED":
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
}

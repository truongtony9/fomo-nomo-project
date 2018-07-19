import axios from "axios";

const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/me")
  };
}

const initialState = {
  user: {},
  isAuth: false
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_FULFILLED":
      return { ...state, user: action.payload.data, isAuth: true };
    case "GET_USER_REJECTED":
      return { ...state, isAuth: false };
    default:
      return state;
  }
}

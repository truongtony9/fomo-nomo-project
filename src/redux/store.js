import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import eventsReducer from "./ducks/eventsReducer";
import usersReducer from "./ducks/usersReducer";

const combinedReducers = combineReducers({
  user: usersReducer,
  events: eventsReducer
});

const middleware = applyMiddleware(promiseMiddleware());

const store = createStore(combinedReducers, middleware);

export default store;

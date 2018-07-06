import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import eventsReducer from "./ducks/eventsReducer";

const middleware = applyMiddleware(promiseMiddleware());

const store = createStore(eventsReducer, middleware);

export default store;

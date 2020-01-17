import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
// Logger with default options
import logger from 'redux-logger'
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
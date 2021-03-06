import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
// Logger with default options
import logger from "redux-logger";
const middlewareList = [];
middlewareList.push(logger, thunk);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewareList)));
export default store;

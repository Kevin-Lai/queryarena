import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer.js';
import logger from "redux-logger";

const configureStore = (preloadedState = {}) => {
    // The order matters in applyMiddleware(), the thunk must be before the logger
    // return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))

    return createStore(RootReducer, preloadedState, applyMiddleware(thunk))
}

export default configureStore;
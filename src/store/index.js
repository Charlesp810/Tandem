import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import gameReducer from './game';

const reducer = combineReducers({ gameReducer });

const middleware = composeWithDevTools(applyMiddleware(createLogger()));

const store = createStore(reducer, middleware);

export default store;

import { createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
import counter from './reducers/counter';
import counter2 from './reducers/counter2';

import thunk from 'redux-thunk';

import logger from 'redux-logger';

let reducers = combineReducers({
  counter,
  counter2,
});
let store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
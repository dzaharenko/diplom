import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  moviesReducer,
  searchReducer
});

export default reducers;

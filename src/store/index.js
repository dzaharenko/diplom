import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from '../reducers';
import data from "../constants/moviesData";

const store = createStore(
  reducers,
  {},
  composeWithDevTools()
);

export default store;

import {handleActions} from 'redux-actions';

import {searchMovies, sortMovies} from "../actions";

import {moviesState} from '../constants/defaultState';
import sortArray from "../helpers/sortArray";

export default {
  movies: handleActions({
    [sortMovies]: (state, {payload}) => {
      const movies = {...state};
      return {...state, current: sortArray(movies.current, payload)};
    },
  }, moviesState),
}

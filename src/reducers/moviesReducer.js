import {handleActions} from 'redux-actions';

import {searchMovies, sortMovies} from "../actions";

import {moviesState} from '../constants/defaultState';
import sortArray from "../helpers/sortArray";

export default {
  movies: handleActions({
    [searchMovies]: () => {

    },
    [sortMovies]: (state, {payload}) => {
      const movies = {...state};
      return sortArray(movies, payload);
    },
  }, moviesState),
}

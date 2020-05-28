import {createActions} from 'redux-actions';

export const {
  searchMovies,
  sortMovies
} = createActions(
  'SEARCH_MOVIES',
  'SORT_MOVIES'
);

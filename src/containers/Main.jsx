import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/components/Main.css';

import SortMovie from '../components/SortMovie';
import Movies from '../components/Movies';

import {changeSort} from '../actions/searchAction';
import {movieList} from '../actions/moviesAction';
import NotFound from '../components/NotFound';

const Main = ({movies, total, changeSort, sort, movieList}) => {

  const sortMovies = (by) => {
    let newBy = sort.sortBy === by ? sort.sortBy : by;
    let sortDirection = sort.sortOrder === 'desc' ? -1 : 1;
    let newDir = sort.sortBy === by ? sortDirection * (-1) : sortDirection;

    const sorted = [].slice.call(movies).sort((a, b) => {
      if (a[by] === b[by]) {
        return 0;
      }
      return a[by] > b[by] ? sortDirection : sortDirection * (-1);
    });
    console.log(sorted);
    movieList(sorted);
    changeSort(newBy, newDir === 1 ? 'asc' : 'desc');
  };

  return (
    <main>
      <Switch>
        <Route path="/" exact><SortMovie total={total} onChangeSort={sortMovies}/></Route>
        <Route path="/film/:id"><SortMovie total={total} onChangeSort={sortMovies}/></Route>
        <Route path="*" component={NotFound}/>
      </Switch>
        <Movies/>
    </main>
  );
};

Main.displayName = 'Main';

Main.propTypes = {
  movies: PropTypes.array,
  changeSort: PropTypes.func.isRequired,
  sort: PropTypes.object.isRequired,
  movieList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: state.moviesReducer.movies,
  total: state.moviesReducer.total,
  sort: state.searchReducer.sort
});
const mapDispatchToProps = (dispatch) => {
  return {
    changeSort: (sortBy, sortOrder) => {
      dispatch(changeSort(sortBy, sortOrder))
    },
    movieList: (movies) => {
      dispatch(movieList(movies))
    },
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Main);

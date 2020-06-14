import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux'
import {moviesListFetch} from '../actions/moviesAction'

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = ({moviesListFetch, isLoaded, searchInfo}) => {

  useEffect(() => {
    moviesListFetch(searchInfo)
  }, []);

  return (
    <Fragment>
      <Header/>
      {isLoaded
        ? <Main/>
        : <span>Loading...</span>
      }
      <Footer/>
    </Fragment>
  );
};

App.displayName = 'App';

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  searchInfo: PropTypes.object.isRequired,
  moviesListFetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoaded: state.moviesReducer.isLoaded,
  searchInfo: state.searchReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    moviesListFetch: (searchInfo) => {
      dispatch(moviesListFetch(searchInfo))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

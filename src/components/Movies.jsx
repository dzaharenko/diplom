import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/components/Cart.css';

import Catalog from './Catalog';
import Error from './Error';

const Movies = ({movies}) => {

  if (!movies.length) {
    return (
      <Error />
    );
  }

  return (
    <section className="content container_w940">
      <Switch>
        <Route path="/" exact><Catalog data={movies}/></Route>
        <Route path="/film/:id"><Catalog data={movies}/></Route>
      </Switch>
    </section>
  );
};

Movies.displayName = 'Movies';

Movies.propTypes = {
  movies: PropTypes.array,
};

const mapStateToProps = state => ({
  movies: state.moviesReducer.movies,
});

export default connect(mapStateToProps)(Movies);

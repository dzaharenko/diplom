import React, {Component} from 'react';
import {withRouter} from 'react-router';

import AboutMovies from './AboutMovies';
import Cart from './Cart';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    }
  }

  componentDidUpdate() {
    const {movie} = this.state;
    const {params = {}} = this.props.match || {};
    const paramsId = +params.id;
    if (paramsId && (JSON.stringify(movie) === '{}' || paramsId !== movie.id)) {
      const movie = this.props.data.find(movie => paramsId === movie.id);
      this.setState({movie});
    } else if (!paramsId && JSON.stringify(movie) !== '{}') {
      this.setState({movie: {}});
    }
  }

  render() {
    return (
      <>
        {this.props.data.map(movie => (
          <Cart
            key={movie.id}
            movie={movie}
            {...this.props}
          />
        ))}
        <AboutMovies
          movie={this.state.movie}
        />
      </>
    );
  }
}

Catalog.displayName = 'Catalog';

export default withRouter(Catalog);

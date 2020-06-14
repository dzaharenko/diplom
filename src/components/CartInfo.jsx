import React from 'react';

import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

import '../styles/components/CartInfo.css';

const CartInfo = ({movie}) => {
  return (
    <div className="cart__text">
      <div className="cart__title">{movie.title}</div>
      <p className="cart__release_date">{movie.release_date.slice(0, 4)}</p>
      <div className="cart__genre">{movie.genres[0]}</div>
    </div>
  )
};

CartInfo.displayName = 'CartInfo';

CartInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default withRouter(CartInfo);

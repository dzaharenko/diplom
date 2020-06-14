import React from 'react';

import PropTypes from 'prop-types';

import '../styles/components/Cart.css';

import CartImage from './CartImage';
import CartInfo from './CartInfo';

const Cart = ({movie, history}) => {

  const handleClick = (event) => {
    event.preventDefault();
    history.push(`/film/${movie.id}`);
  };

  return (
    <div className="cart" onClick={handleClick}>
      <CartImage movie={movie}/>
      <CartInfo movie={movie}/>
    </div>
  );
};

Cart.displayName = 'Cart';

Cart.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Cart;

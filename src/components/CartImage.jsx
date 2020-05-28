import React from 'react';

import '../styles/components/CartImage.css';

const CartImage = ({movie}) => {
    return (
      <div className="cart__image-block">
        <img className="cart__image" src={movie.poster_path} alt={movie.title}/>
      </div>
    )
};

export default CartImage;

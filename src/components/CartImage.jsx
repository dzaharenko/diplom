import React from 'react';

import PropTypes from 'prop-types';

import '../styles/components/CartImage.css';

const CartImage = ({movie}) => {
  const [hImage, setHImage] = React.useState(200);
  fetch(movie.poster_path).then(res => setHImage(res.status));

  return (
    <div className="cart__image-block">
      {hImage == 200 ? <img className="cart__image" src={movie.poster_path} alt={movie.title}/>
        : <span className="cart__image span"/>
      }
    </div>
  )
};

CartImage.displayName = 'CartImage';

CartImage.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default CartImage;

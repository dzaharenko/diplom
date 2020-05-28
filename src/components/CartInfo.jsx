import React, {Component} from 'react';

import '../styles/components/CartInfo.css';
import {withRouter} from "react-router";

const CartInfo = ({movie}) => {
    return (
      <div className="cart__text">
        <div className="cart__title">{movie.title}</div>
        <p className="cart__release_date">{movie.release_date.slice(0,4)}</p>
        {/*<p className="cart__release_date">{release_date.split('-')[0]}</p>*/}
        <div className="cart__genre">{movie.genres[0]}</div>
      </div>
    )
};

export default withRouter(CartInfo);



/*
handleClick(event) {
  event.preventDefault();
  this.props.history.push(`/film/${this.props.id}`);
}*/

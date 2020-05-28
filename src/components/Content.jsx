import React, {Component} from 'react';

import '../styles/components/Cart.css';

import {withRouter} from "react-router";
import CartImage from "./CartImage";
import CartInfo from "./CartInfo";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const {movie = this.state.data} = this.props;
    return (
      <div className="content container_w940">
            <div className="cart">
              <CartImage poster_path={movie.poster_path} alt={movie.alt}/>
              <CartInfo movie={movie}/>
            </div>
      </div>
    );
  }
}

Content.displayName ='Content';

export default withRouter(Content);

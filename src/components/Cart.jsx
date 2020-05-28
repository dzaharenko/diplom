import React from 'react';

import PropTypes from 'prop-types';

import '../styles/components/Cart.css';

import {withRouter} from "react-router";
import CartImage from "./CartImage";
import CartInfo from "./CartInfo";

const Cart = ({movie, history}) => {

  const handleClick = (event) => {
    event.preventDefault();
    history.push(`/film/${movie.id}`);
  };

    return (
      <div className="cart" onClick={handleClick}>
        <CartImage movie={movie}/>
        <CartInfo movie={movie} />
      </div>
    );
};

Cart.displayName = 'Cart';

Cart.propTypes = {
  data: PropTypes.array,
};

export default Cart;

/*class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  /!*componentDidMount() {
    const {data = [], match = {}} = this.props;
    if (data.length && match.params && match.params.id) {
      const movie = data.find(item => item.id === match.params.id) || {};

      this.setState({movie});
    }
  }*!/

  render() {
    const {movie = this.state.data} = this.props;
    return (
            <div className="cart">
              <CartImage poster_path={movie.poster_path} alt={movie.alt}/>
              <CartInfo id={movie.id} title={movie.title} release_date={movie.release_date} genres={movie.genres}/>
            </div>
    );
  }
}

Cart.displayName = 'Cart';

Cart.propTypes = {
  data: PropTypes.array,
};

export default Cart;*/

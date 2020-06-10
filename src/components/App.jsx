import React, {Component} from 'react';

import PropTypes from 'prop-types';

import '../styles/components/App.css';
/*import appStyles from '../styles/jss/app';*/

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Cart from "./Cart";
import data from "../constants/moviesData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0,
      offset: 0,
      limit: 10,
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://reactjs-cdp.herokuapp.com/movies")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: console.log(error),
          });
        }
      )
  }

  render() {
    /*const classes = appStyles();*/
    return (
      <>
        <Header />
        <Main data = {this.state.data} />
        <Footer />
      </>
    );
  }
}

Cart.propTypes = {
  limit: PropTypes.number,
  data: PropTypes.array,
};

export default App;

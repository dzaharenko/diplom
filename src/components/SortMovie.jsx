import React, {Component, useState, useEffect} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import '../styles/components/SortMovie.css';
import Cart from "./Cart";

import {sortMovies} from "../actions";

const SortMovie = ({movies}) => {
  return (
    <div className="panel">
      <div className="container main__panel">
        <h3><span>{movies.limit}</span> movies found</h3>
        <div>Sort by: <span>sort</span></div>
        <div>rating</div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  limit: PropTypes.number,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(SortMovie);

/*const SortMovie = ({limit, ...props}) => {
  const [sortDirection, setSortDirection] = useState('release date ↓');

  useEffect(() => {
    props.sortMovies(sortDirection);
  }, [sortDirection]);

  const sortClick = (event) => {
    event.preventDefault();
    setSortDirection(prevState => (prevState === 'release date ↑' ? 'release date ↓' : 'release date ↑'));
  };

    return (
      <div className="panel">
        <div className="container main__panel">
          <h3><span>{limit}</span> movies found</h3>
          <div>Sort by: <span onClick={sortClick}>{sortDirection}</span></div>
          <div>rating</div>
        </div>
      </div>
    );
};

Cart.propTypes = {
  limit: PropTypes.number,
};

/!*const mapStateToProps = state => ({
  movies: state.movies,
});*!/

const mapDispatchToProps = {
  sortMovies,
};

export default connect(null, mapDispatchToProps)(SortMovie);*/


/*const SortMovie = ({movies, ...props}) => {
  const [sortDirection, setSortDirection] = useState('release date ↓');

  useEffect(() => {
    props.sortMovies(sortDirection);
  }, [sortDirection]);

  const sortClick = (event) => {
    event.preventDefault();
    setSortDirection(prevState => (prevState === 'release date ↑' ? 'release date ↓' : 'release date ↑'));
  };

    return (
      <div className="panel">
        <div className="container main__panel">
          <h3><span>{movies.limit}</span> movies found</h3>
          <div>Sort by: <span onClick={sortClick}>{sortDirection}</span></div>
          <div>rating</div>
        </div>
      </div>
    );
};

Cart.propTypes = {
  limit: PropTypes.number,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  sortMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortMovie);*/

/*class SortMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {sortDirection: 'release date ↓'};

    this.sortClick = this.sortClick.bind(this);
  }

  sortClick(event) {
    event.preventDefault();
    this.setState(prevState => ({sortDirection: prevState.sortDirection === 'release date ↑' ? 'release date ↓' : 'release date ↑'}), () => {
      this.props.onSort(this.state.sortDirection);
    });
  }

  render() {
    const {limit} = this.props;
    return (
      <div className="panel">
        <div className="container main__panel">
          <h3><span>{limit}</span> movies found</h3>
          <div>Sort by: <span onClick={this.sortClick}>{this.state.sortDirection}</span></div>
          <div>rating</div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  limit: PropTypes.number,
};

export default SortMovie;*/






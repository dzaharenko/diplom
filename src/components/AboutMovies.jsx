import React from 'react';

import '../styles/components/AboutMovies.css';

import PropTypes from 'prop-types';
import Modal from './Modal';
import {withRouter} from 'react-router';
import CoverImage from './CoverImage';

const AboutMovies = ({history, movie = {}}) => {

  const closeClick = (event) => {
    event.preventDefault();
    history.push(`/`);
  };

  const show = JSON.stringify(movie) !== '{}';

  if (!show) {
    movie = {genres: []}
  }
  return (
    <Modal active={show} onClose={closeClick}>
      <CoverImage movie={movie}>
        <div className="modal">
          <h1>{movie.title}</h1>
          <p>{movie.genres[0]}</p>
          <p>{movie.overview}</p>
          {movie.revenue ? <p>Popularity: {movie.revenue}</p> : ''}
          {movie.budget ? <p>Budget: {movie.budget}</p> : ''}
        </div>
      </CoverImage>
    </Modal>
  )
};

AboutMovies.displayName = 'AboutMovies';

AboutMovies.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default withRouter(AboutMovies);

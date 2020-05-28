import React, {Component} from 'react';

import '../styles/components/AboutMovies.css';

import PropTypes from 'prop-types';
import Modal from "./Modal";
import {withRouter} from "react-router";
import styled from "styled-components";

class AboutMovies extends Component {
  constructor(props) {
    super(props);

    this.closeClick = this.closeClick.bind(this);
  }

  closeClick(event) {
    event.preventDefault();
    this.props.history.push(`/`);
  }

  render() {
    let {movie = {}} = this.props;
    const show = JSON.stringify(movie) !== '{}';
    const CoverImage = styled.div `
      background-image: url(${movie.poster_path});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 560px;
      height: 360px;
    `;
    if (!show) {
      movie = {genres: []}
    }
    return (
      <Modal active={show} onClose={this.closeClick}>
        <CoverImage>
        <div className="modal">
          <h1>{movie.title}</h1>
          <p>{movie.genres[0]}</p>
          <p>{movie.overview}</p>
          <p>Popularity: {movie.revenue}</p>
          <p>Budget: {movie.budget}</p>
        </div>
        </CoverImage>
      </Modal>
    )
  }
}

AboutMovies.displayName = 'AboutMovies';

AboutMovies.propTypes = {
  data: PropTypes.array,
};

export default withRouter(AboutMovies);

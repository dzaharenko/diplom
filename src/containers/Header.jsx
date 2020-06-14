import React from 'react';
import {connect} from 'react-redux';
import {changeSearch, changeSearchBy} from '../actions/searchAction';
import {moviesListFetch} from '../actions/moviesAction';

import PropTypes from "prop-types";

import '../styles/components/Header.css';

import InputSearch from '../components/InputSearch';
import InputFunction from '../components/InputFunction';
import Logo from '../components/Logo';

const Header = ({searchInfo, changeSearch, changeSearchBy, moviesListFetch}) => {

  const moviesFind = () => {
    moviesListFetch(searchInfo);
  };

  return (
    <header className="header">
      <div className="header-shadow">
        <div className="container header__container">
          <Logo/>
          <h2>Find your movie</h2>
          <InputSearch
            onChangeInput={changeSearch}
            searchVal={searchInfo.search}
            moviesFind={moviesListFetch}
          />
          <InputFunction
            onChangeSearchBy={changeSearchBy}
            onClickSearch={moviesFind}
          />
        </div>
      </div>
    </header>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  searchInfo: PropTypes.object.isRequired,
  moviesListFetch: PropTypes.func.isRequired,
  changeSearch: PropTypes.func.isRequired,
  changeSearchBy: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchInfo: state.searchReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearch: (input) => {
      dispatch(changeSearch(input))
    },
    changeSearchBy: (searchBy) => {
      dispatch(changeSearchBy(searchBy))
    },
    moviesListFetch: (searchInfo) => {
      dispatch(moviesListFetch(searchInfo))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

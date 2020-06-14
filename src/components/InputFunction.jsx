import React from 'react';

import PropTypes from 'prop-types';

import '../styles/components/InputFunction.css';

const InputFunction = ({onChangeSearchBy, onClickSearch}) => {
  return (
    <div className="input-function">
      <h3 className="input-function__text">Search by</h3>
      <ul className="input-function__checkbox">
        <li><input name="searcher" type="radio" id="checkboxOne" value="Title"
                   onChange={e => onChangeSearchBy('title')}/>
          <label htmlFor="checkboxOne">Title</label></li>
        <li><input name="searcher" type="radio" id="checkboxTwo" value="Genre"
                   onChange={e => onChangeSearchBy('genres')}/>
          <label htmlFor="checkboxTwo">Genre</label></li>
      </ul>
      <button className="input-function__button" onClick={onClickSearch}>Search</button>
    </div>
  );
};

InputFunction.displayName = 'InputFunction';

InputFunction.propTypes = {
  onChangeSearchBy: PropTypes.func.isRequired,
  onClickSearch: PropTypes.func.isRequired,
};

export default InputFunction;

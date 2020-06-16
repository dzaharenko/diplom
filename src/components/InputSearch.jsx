import React from 'react';

import PropTypes from 'prop-types';

import '../styles/components/InputSearch.css';

const InputSearch = ({onChangeInput, searchVal, moviesFind}) => {

  const handleChange = (e) => {
    onChangeInput(e.target.value);
    if (e.target.value === '') moviesFind({search: ''})
  };

  return (
    <div className="input-container">
      <i className="input-container__icon">
        <img src="/src/assets/enter_i.svg" width="20" height="20" alt=""/>
      </i>
      <input onChange={(e) => handleChange(e)} value={searchVal} type="text" id="fname" name="fname" placeholder="Enter movie"/>
    </div>
  );
};

InputSearch.displayName = 'InputSearch';

InputSearch.propTypes = {
  searchVal: PropTypes.string.isRequired,
  moviesFind: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default InputSearch;

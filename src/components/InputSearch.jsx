import React, {Component} from 'react';

import '../styles/components/InputSearch.css';

class InputSearch extends Component {
  render() {
    return (
      <div className="input-container">
        <i className="input-container__icon">
          <img src="/src/assets/enter_i.svg" width="20" height="20" alt=""/>
        </i>
        <input type="text" id="fname" name="fname" placeholder="Enter movie title"/>
      </div>
    );
  }
}

export default InputSearch;

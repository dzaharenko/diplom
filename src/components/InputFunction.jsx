import React, {Component} from 'react';

import '../styles/components/InputFunction.css';

class InputFunction extends Component {
  render() {
    return (
      <div className="input-function">
        <h3 className="input-function__text">Search by</h3>
        <ul className="input-function__checkbox">
          <li><input type="checkbox" id="checkboxOne" value="Title"/>
            <label htmlFor="checkboxOne">Title</label></li>
          <li><input type="checkbox" id="checkboxTwo" value="Genre"/>
            <label htmlFor="checkboxTwo">Genre</label></li>
        </ul>
        <button className="input-function__button">Search</button>
      </div>
    );
  }
}

export default InputFunction;

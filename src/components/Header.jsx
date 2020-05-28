import React, {Component} from 'react';

import '../styles/components/Header.css';

import InputSearch from "./InputSearch";
import InputFunction from "./InputFunction";
import Logo from "./Logo";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-shadow">
          <div className="container header__container">
            <Logo/>
            <h2>Find your movie</h2>
            <InputSearch/>
            <InputFunction/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

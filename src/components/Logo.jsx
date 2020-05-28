import React from 'react';

import '../styles/components/Logo.css';

import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

const Logo = ({history}) => {
  const handleClick = () => {
    history.push('/');
  };
  return <Link to="/" onClick={handleClick} className="logo">netflixroulette</Link>
};

export default withRouter(Logo);

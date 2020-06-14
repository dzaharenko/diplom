import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import '../styles/components/Logo.css';

const Logo = ({history}) => {

  const handleClick = () => {
    history.push('/');
  };

  return <Link to="/" onClick={handleClick} className="logo">netflixroulette</Link>
};

Logo.displayName = 'Logo';

export default withRouter(Logo);

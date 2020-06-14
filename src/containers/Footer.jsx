import React from 'react';

import '../styles/components/Footer.css';

import Logo from '../components/Logo';

const Footer = () => {
  return (
    <footer>
      <div className="container_w941">
        <Logo/>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;

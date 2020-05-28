import React from 'react';

import '../styles/components/Footer.css';
import Logo from "./Logo";

const Footer = () => {
    return (
      <footer>
        <div className="container_w940">
          <Logo/>
        </div>
      </footer>
    );
};

export default Footer;

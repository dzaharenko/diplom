import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/components/NotFound.css';

const NotFound = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h3 className="text-center">404 error</h3>
                <Link to="/" className="link_404">Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default NotFound;

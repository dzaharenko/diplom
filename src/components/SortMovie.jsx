import React, {useState} from 'react';
import PropTypes from 'prop-types';

import '../styles/components/SortMovie.css';

const SortMovie = ({total, onChangeSort}) => {
  const [active, setActive] = useState(0);

  const handleClick = (str) => {
    console.log(str, str == 'release_date' ? 1 : 2);
    setActive(str == 'release_date' ? 1 : 2);
    onChangeSort(str)
  };

  return (
    <div className="panel">
      <div className="container main__panel">
        <h3><span className="total">{total}</span> movies found</h3>
        <span className="sort">Sort by: </span>
        <div className="release"><span className={active == 1 ? 'active' : ''} onClick={() => handleClick('release_date')}>Release date</span></div>
        <div className="vote"><span className={active == 2 ? 'active' : ''} onClick={() => handleClick('vote_average')}>Rating</span></div>
      </div>
    </div>
  );
};

SortMovie.displayName = 'SortMovie';

SortMovie.propTypes = {
  onChangeSort: PropTypes.func.isRequired,
};

export default SortMovie;

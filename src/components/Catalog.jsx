import React, {useEffect, useState} from 'react';
import {useParams, withRouter} from 'react-router';

import AboutMovies from './AboutMovies';
import Cart from './Cart';

const Catalog = (props) => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const paramsId = +params.id;
    if (paramsId && (JSON.stringify(movie) === '{}' || paramsId !== movie.id)) {
      const newMovie = props.data.find(movie => paramsId === movie.id);
      setMovie(newMovie);
    } else if (!paramsId && JSON.stringify(movie) !== '{}') {
      setMovie({});
    }
  }, [params]);

  return (
    <>
      {props.data.map(movie => (
        <Cart
          key={movie.id}
          movie={movie}
          {...props}
        />
      ))}
      <AboutMovies
        movie={movie}
      />
    </>
  );
};

Catalog.displayName = 'Catalog';

export default withRouter(Catalog);

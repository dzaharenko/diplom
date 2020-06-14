import React from 'react';

import '../styles/components/CoverImage.css';

const CoverImage = ({movie, children}) => {

  const CoverImg = {
    backgroundImage: `url(${movie.poster_path})`,
  };

  return (
    <div className="cover_image" style={CoverImg}>{children}</div>
  )
};

CoverImage.displayName = 'CoverImage';

export default CoverImage;

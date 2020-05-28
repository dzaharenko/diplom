import styled from "styled-components";

const CoverImage = styled.div `
      background-image: url(${movie.poster_path});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 560px;
      height: 360px;
    `;

export default CoverImage;

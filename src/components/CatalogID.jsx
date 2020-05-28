import React, {Component} from "react";

import {withRouter} from "react-router";
import AboutMovies from "./AboutMovies";

class CatalogID extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <>
        {this.props.data.map(movie => (
          <AboutMovies
            key={movie.id}
            movie={movie}
            {...this.props}
          />
        ))}
      </>
    );
  }
}

export default withRouter(CatalogID);

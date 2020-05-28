import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {compose} from 'redux';

import PropTypes from 'prop-types';

import '../styles/components/Main.css';

import SortMovie from "./SortMovie";
import Movies from "./Movies";

const Main = ({data, ...props}) => {
  return (
    <main>
      <SortMovie/>
      <Movies data={data} {...props}/>
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(Main);

/*const infoMovies = movies.filter(movie => moviesIds.includes(movie.id));*/

/*class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {data: []};
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(sortDirection) {
    this.setState(prevState => ({data: sortArray(prevState.data, sortDirection)}));
  }

  render() {
    const {data} = this.props;
    return (
      <main>
        <SortMovie onSort={this.handleSort} limit={this.props.limit}/>
        <Movies data={data} {...this.props}/>
        {/!*<Cart data={this.props.data}/>*!/}
      </main>
    );
  }
}

Cart.propTypes = {
  data: PropTypes.array,
};

export default Main;*/

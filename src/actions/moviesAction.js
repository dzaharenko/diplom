import createQuery from '../helpers/createQuery';

export const moviesListFetch = (searchInfo) => {
  return dispatch => {
    let q = createQuery(searchInfo);
    return fetch(`https://reactjs-cdp.herokuapp.com/movies${q}`)
      .then(res => res.json())
      .then(result => {
          dispatch(movieList(result.data));
          let count = result.limit < result.total ? result.limit : result.total;
          dispatch(setTotal(count))
        },
        err => console.log(error)
      )
  }
};

export const movieList = data => ({
  type: 'GET_MOVIES',
  data: data,
});

export const setTotal = data => ({
  type: 'SET_TOTAL',
  total: data,
});

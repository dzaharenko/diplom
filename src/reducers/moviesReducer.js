const initialState = {
  movies: [],
  isLoaded: false
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.data,
        isLoaded: true
      };
    case 'SET_TOTAL':
      return {
        ...state,
        total: action.total,
      };
    default:
      return state;
  }
};

export default movieReducer;

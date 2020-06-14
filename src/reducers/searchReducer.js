const initialState = {
  sort: {
    sortBy: '',
    sortOrder: 'asc'
  },
  search: ''
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        search: action.input,
      };
    case 'CHANGE_SEARCHBY':
      return {
        ...state,
        searchBy: action.searchBy,
      };
    case 'CHANGE_SORT':
      return {
        ...state,
        sort: {...state.sort, 'sortBy': action.sortBy, 'sortOrder': action.sortOrder}
      };
    default:
      return state;
  }
};

export default searchReducer;

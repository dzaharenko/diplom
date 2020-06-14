export const changeSearch = input => ({
  type: 'CHANGE_INPUT',
  input
});

export const changeSort = (sortBy, sortOrder) => ({
  type: 'CHANGE_SORT',
  sortBy,
  sortOrder
});

export const changeSearchBy = (searchBy) => ({
  type: 'CHANGE_SEARCHBY',
  searchBy
});





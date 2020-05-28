const sortArray = (array, sortDirection) => {
  const newArray = [...array];
  if (sortDirection === 'release date ↓') {
    return newArray.sort((a, b) => {
      if (a.data.release_date > b.data.release_date) return -1;
      else return 1;
    });
  }

  return newArray.sort((a, b) => {
    if (a.data.release_date > b.data.release_date) return 1;
    else return -1;
  });
};

export default sortArray;

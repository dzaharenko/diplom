const sortArray = (array, sortDirection) => {
  const newArray = [...array];
  if (sortDirection === 'release date ↓') {
    return newArray.sort((a, b) => {
      if (a.release_date > b.release_date) return -1;
      else return 1;
    });
  }

  return newArray.sort((a, b) => {
    if (a.release_date > b.release_date) return 1;
    else return -1;
  });
};

export default sortArray;

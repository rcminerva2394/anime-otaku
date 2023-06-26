const paginate = (currentPage, totalPages) => {
  let paginateArr = ['First', 'Prev', currentPage, 'Next', 'Last'];

  if (currentPage === 1) {
    return paginateArr.slice(-3);
  } else if (currentPage === totalPages) {
    return paginateArr.slice(0, 3);
  } else {
    return paginateArr;
  }
};

export default paginate;

import React from 'react';
import paginate from '../utils/paginate';

const Pagination = ({ pageInfo, onPage }) => {
  const { currentPage, lastPage } = pageInfo;

  const pageArr = paginate(currentPage, lastPage);

  const buttonHandlers = {
    First: () => onPage(1),
    Prev: () => onPage(currentPage - 1),
    Next: () => onPage(currentPage + 1),
    Last: () => onPage(lastPage),
  };

  return (
    <div class='mt-20 flex gap-4 text-lg'>
      {pageArr.map((page) => {
        if (page === currentPage) {
          return <button class='font-medium'>{page}</button>;
        } else {
          return (
            <button class='btn-page' onClick={buttonHandlers[page]}>
              {page}
            </button>
          );
        }
      })}
    </div>
  );
};

export default Pagination;

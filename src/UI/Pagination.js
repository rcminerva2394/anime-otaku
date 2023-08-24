import React from 'react';
import paginate from '../utils/paginate';
import { useAnimeContext } from '../contexts/animeContext';

const Pagination = ({ pageInfo, onPage }) => {
  const { updatePageHandler, page } = useAnimeContext();
  // const { currentPage, lastPage } = pageInfo;
  const lastPage = pageInfo['last_visible_page'];

  const pageArr = paginate(Number(page), lastPage);

  const buttonHandlers = {
    First: () => {
      // onPage(1);
      updatePageHandler(1);
    },
    Prev: () => {
      // onPage(Number(page) - 1);
      updatePageHandler(Number(page) - 1);
    },
    Next: () => {
      // onPage(currentPage + 1);
      updatePageHandler(Number(page) + 1);
    },
    Last: () => {
      // onPage(lastPage);
      updatePageHandler(lastPage);
    },
  };
  return (
    <>
      {console.log(pageArr, page)}
      <div className='mt-20 flex gap-4 text-lg'>
        {pageArr.map((currentPage) => {
          if (Number(page) === currentPage) {
            return <button className='font-medium'>{currentPage}</button>;
          } else {
            return (
              <button
                className='btn-page'
                onClick={buttonHandlers[currentPage]}
              >
                {currentPage}
              </button>
            );
          }
        })}
      </div>
    </>
  );
};

export default Pagination;

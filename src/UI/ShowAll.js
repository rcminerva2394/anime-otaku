import React, { useState, useEffect } from 'react';
import AnimeList from './AnimeList';
import Pagination from './Pagination';
import useDataFetcher from '../customHooks/useDataFetcher';

const ShowAll = ({ prevData, url, title }) => {
  const { current_page: currentPage, last_visible_page: lastPage } =
    prevData.pagination;
  const [currentData, setCurrentData] = useState(prevData.data);
  const [pageInfo, setPageInfo] = useState({
    currentPage: currentPage,
    lastPage: lastPage,
  });

  // To fetch data when the pageInfo is updated or when user choose specific page
  const finalUrl = `${url}?page=${pageInfo.currentPage}&sfw`;
  const { data, loading, error } = useDataFetcher(finalUrl);

  const updatePageHandler = (page) => {
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      currentPage: page,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (data) {
      setCurrentData(data.data);
    }
  }, [data?.data]);

  if (data) {
    return (
      <>
        <section class='my-24 grid justify-items-center'>
          <div class='w-4/5'>
            <p class='text-xl font-bold mb-12 uppercase'>{title}</p>
            <AnimeList animeList={currentData} layout='col5' secTitle={title} />
          </div>
          <Pagination pageInfo={pageInfo} onPage={updatePageHandler} />
        </section>
      </>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>Still loading</p>;
  }
};

export default ShowAll;

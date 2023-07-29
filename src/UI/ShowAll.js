import React, { useState, useEffect } from 'react';
import AnimeList from './AnimeList';
import Pagination from './Pagination';
import useDataFetcher from '../customHooks/useDataFetcher';

const ShowAll = ({ prevData, url, title, location }) => {
  const [pageInfo, setPageInfo] = useState({
    currentPage: prevData.pagination?.current_page || 1,
    lastPage: prevData.pagination?.last_visible_page,
  });
  const [currentData, setCurrentData] = useState(prevData.data);

  // To fetch data when the pageInfo is updated or when user choose specific page
  const finalUrl = `${url}&page=${pageInfo.currentPage}&sfw`;
  const { data, loading, error } = useDataFetcher(finalUrl);

  const updatePageHandler = (newPage) => {
    const newPath = location.pathname.replace(/\/[^/]*$/, `/${newPage}`);

    // Update the URL with the new page number
    window.history.pushState(null, null, newPath);
    // currentPage = newPage;

    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      currentPage: newPage,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (data) {
      setCurrentData(data.data);
    }
  }, [data?.data]);

  // Trying local storage

  /*
  useEffect(() => {
    const getAnimeData = localStorage.getItem('animeData');
    const loadedAnimeData = JSON.parse(getAnimeData);

    if (loadedAnimeData) {
      setCurrentData(loadedAnimeData);
    }
  }, []);

  useEffect(() => {
    const saveAnimeData = JSON.stringify(currentData);
    localStorage.setItem('animeData', saveAnimeData);
  }, [currentData]);

  */
  if (data) {
    return (
      <>
        {console.log(prevData)}
        <section class='my-24 grid justify-items-center'>
          <div class='xl:w-4/5'>
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

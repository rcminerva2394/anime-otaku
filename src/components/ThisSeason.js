import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AnimeList from '../UI/AnimeList';

const ThisSeason = () => {
  const location = useLocation();
  const data = location.state?.data;
  const { current_page: currentPage, last_visible_page: lastPage } =
    data.pagination;
  const [pageDetail, setPageDetail] = useState({
    currentPage: currentPage,
    lastPage: lastPage,
  });

  return (
    <section class='my-24 grid justify-items-center'>
      <div class='w-4/5'>
        <p class='text-xl font-bold mb-12 uppercase'>Popular This Season</p>
        <AnimeList animeList={data.data} layout='col5' />
      </div>
    </section>
  );
};

export default ThisSeason;

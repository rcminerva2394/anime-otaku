import React from 'react';
import useDataFetcher from '../../customHooks/useDataFetcher';
import AnimeList from '../../UI/AnimeList';
import { Link } from 'react-router-dom';

const ThisSeasonPrev = () => {
  const url = 'https://api.jikan.moe/v4/seasons/now';
  const { data, loading, error } = useDataFetcher(url);

  if (data) {
    const prevData = data.data.slice(0, 8);
    return (
      <section class='my-20 mx-8'>
        <div class='flex justify-between items-center'>
          <h2 class='uppercase font-bold mb-4 text-lg'>Popular This Season</h2>
          <Link to={'/popular-this-season'} state={{ data: data }}>
            <p class='text-sm text-slate-600 hover:text-black'>View All</p>
          </Link>
        </div>
        <AnimeList animeList={prevData} layout='col4' />
      </section>
    );
  }

  if (loading) {
    return <p>Still loading</p>;
  }

  if (error) {
    return <p>Sorry!</p>;
  }
};

export default ThisSeasonPrev;

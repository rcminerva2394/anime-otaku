import React from 'react';
import useDataFetcher from '../hooks/useDataFetcher';
import AnimeList from '../UI/AnimeList';
import apiUrls from '../constants/apiUrls';
import { Link } from 'react-router-dom';

const PopularThisSeasonPreviewPage = () => {
  const url = apiUrls.season;
  const { data, loading, error } = useDataFetcher(url);

  if (data) {
    const prevData = data.data.slice(0, 8);
    return (
      <section className='my-20'>
        <div className='flex justify-between mb-6 items-center'>
          <h2 className='uppercase font-bold text-lg'>Popular This Season</h2>
          <Link
            to={'/anime-otaku/popular-this-season/1'}
            state={{ data: data }}
          >
            <p className='text-sm text-slate-600 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-200'>
              View All
            </p>
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

export default PopularThisSeasonPreviewPage;

import React from 'react';
import useDataFetcher from '../../../hooks/useDataFetcher';
import TopAnimeItemPrev from './TopAnimeItemPrev';
import { Link } from 'react-router-dom';
import apiUrls from '../../../constants/apiUrls';

const TopAnimePrev = () => {
  const url = apiUrls.top;
  const { loading, data, error } = useDataFetcher(url);

  if (data) {
    const prevData = data.data.slice(0, 10);
    return (
      <section className='my-20 bg-stone-100 p-3 2xl:mx-8 dark:bg-neutral-800'>
        <div className='flex justify-between mb-6 items-center'>
          <h2 className='uppercase font-bold text-lg'>Top 100 Anime</h2>
          <Link to={'/anime-otaku/top-100-anime/1'} state={{ data: data }}>
            <p
              className='text-sm text-slate-600 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-200
'
            >
              View All
            </p>
          </Link>
        </div>
        <ul className='grid gap-6 lg:grid-cols-2 2xl:grid-cols-1'>
          {prevData.map((anime) => (
            <TopAnimeItemPrev anime={anime} key={anime.mal_id} />
          ))}
        </ul>
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

export default TopAnimePrev;

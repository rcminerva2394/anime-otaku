import React from 'react';
import useDataFetcher from '../../../customHooks/useDataFetcher';
import TopAnimeItemPrev from './TopAnimeItemPrev';
import { Link } from 'react-router-dom';
import apiUrls from '../../../constants/apiUrls';

const TopAnimePrev = () => {
  const url = apiUrls.top;
  const { loading, data, error } = useDataFetcher(url);

  if (data) {
    const prevData = data.data.slice(0, 10);
    return (
      <section class='my-20 bg-stone-100 p-3 2xl:mx-8 dark:bg-neutral-800'>
        <div class='flex justify-between mb-6 items-center'>
          <h2 class='uppercase font-bold text-lg'>Top 100 Anime</h2>
          <Link to={'/top-100-anime'} state={{ data: data }}>
            <p
              class='text-sm text-slate-600 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-200
'
            >
              View All
            </p>
          </Link>
        </div>
        <ul class='grid gap-6 lg:grid-cols-2 2xl:grid-cols-1'>
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

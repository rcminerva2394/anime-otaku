import React from 'react';
import useDataFetcher from '../../../customHooks/useDataFetcher';
import TopAnimeItemPrev from './TopAnimeItemPrev';
import { Link } from 'react-router-dom';

const TopAnimePrev = () => {
  const url = 'https://api.jikan.moe/v4/top/anime';
  const { loading, data, error } = useDataFetcher(url);

  if (data) {
    const prevData = data.data.slice(0, 10);
    return (
      <section class='my-20 mx-8 bg-stone-100 p-3'>
        <div class='flex justify-between mb-2 items-center '>
          <h2 class='uppercase font-bold mb-4 text-lg'>Top 100 Anime</h2>
          <Link to={'/top-100-anime'} state={{ data: data }}>
            <p class='text-sm text-slate-600 hover:text-black'>View All</p>
          </Link>
        </div>
        <ul class='flex gap-6 flex-col'>
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

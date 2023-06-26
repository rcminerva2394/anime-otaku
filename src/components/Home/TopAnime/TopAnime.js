import React from 'react';
import useDataFetcher from '../../../customHooks/useDataFetcher';
import TopAnimeItem from './TopAnimeItem';

const TopAnimePrev = () => {
  const url = 'https://api.jikan.moe/v4/top/anime?limit=10';
  const { loading, data, error } = useDataFetcher(url);

  if (data) {
    return (
      <section class='my-20 mx-8 bg-stone-100 p-3'>
        <div class='flex justify-between mb-2 items-center '>
          <h2 class='uppercase font-bold mb-4 text-lg'>Top 100 Anime</h2>
          <p class='text-sm text-slate-600 hover:text-black'>View All</p>
        </div>
        <ul class='flex gap-6 flex-col'>
          {data.data.map((anime) => (
            <TopAnimeItem anime={anime} key={anime.mal_id} />
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

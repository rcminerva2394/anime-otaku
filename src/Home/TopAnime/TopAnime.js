import React from 'react';
import useDataFetcher from '../../customHooks/useDataFetcher';
import TopAnimeItem from './TopAnimeItem';

const TopAnime = () => {
  const url = 'https://api.jikan.moe/v4/top/anime?limit=10';
  const { loading, data, error } = useDataFetcher(url);

  if (data) {
    return (
      <section class='my-20 mx-8 bg-light-gray p-3'>
        <h2 class='uppercase font-bold mb-4 text-lg'>Top 100 Anime</h2>
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
    return <p>Sorry! {error}</p>;
  }
};

export default TopAnime;

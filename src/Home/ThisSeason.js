import React from 'react';
import useDataFetcher from '../customHooks/useDataFetcher';
import AnimeList from '../UI/AnimeList';

const ThisSeason = () => {
  const url = 'https://api.jikan.moe/v4/seasons/now?limit=10&page=1';
  const { data, loading, error } = useDataFetcher(url);

  if (data) {
    return (
      <section class='my-20 mx-8'>
        <h2 class='uppercase font-bold mb-4 text-lg'>Popular This Season</h2>
        <AnimeList animeList={data} />
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

export default ThisSeason;

import React from 'react';
import useDataFetcher from '../customHooks/useDataFetcher';
import AnimeList from '../UI/AnimeList';

const Upcoming = () => {
  const url = 'https://api.jikan.moe/v4/seasons/upcoming?limit=10';
  const { data, loading, error } = useDataFetcher(url);

  if (data) {
    return (
      <section class='my-20 mx-8'>
        <h2 class='uppercase font-bold mb-1.5 text-lg'>Upcoming</h2>
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

export default Upcoming;

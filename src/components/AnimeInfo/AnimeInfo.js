import React from 'react';
import { useParams } from 'react-router-dom';
import useDataFetcher from '../../customHooks/useDataFetcher';
import AnimeDesc from './AnimeDesc';
import CharactersPrev from './Characters/CharactersPrev';

const AnimeInfo = () => {
  const { id } = useParams();
  const url = `https://api.jikan.moe/v4/anime/${id}`;
  const { data, loading, error } = useDataFetcher(url);

  if (data) {
    return (
      <main class='grid justify-items-center py-24 gap-y-8'>
        <AnimeDesc info={data.data} />
        <CharactersPrev id={id} />
      </main>
    );
  }

  if (loading) {
    return <p>Still loading</p>;
  }

  if (error) {
    return <p>Sorry!</p>;
  }
};

export default AnimeInfo;

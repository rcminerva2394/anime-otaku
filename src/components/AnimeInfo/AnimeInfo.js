import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';
import AnimeDesc from './AnimeDesc';
import CharactersPrev from './Characters/CharactersPrev';
import { useAnimeContext } from '../../contexts/animeContext';

const AnimeInfo = () => {
  const { id } = useParams();
  const url = `https://api.jikan.moe/v4/anime/${id}`;
  const { data, loading, error } = useDataFetcher(url);

  const { setIsFiltering } = useAnimeContext();

  // To hide the filter component, whenever home is mounted especially when they go back or click back on window
  useEffect(() => {
    setIsFiltering(false);
  }, []);

  if (data) {
    return (
      <main className='grid justify-items-center py-24 gap-y-8'>
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

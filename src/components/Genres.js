import React from 'react';
import { useLocation } from 'react-router-dom';
import ShowAll from '../UI/ShowAll';
import {
  AnimeContextProvider,
  useAnimeContext,
} from '../contexts/animeContext';

const GenresInner = () => {
  const { genreData, genreLoading, genreError } = useAnimeContext();
  const location = useLocation();
  const title = location.state?.title;

  if (genreData) {
    return <ShowAll prevData={genreData} title={title} />;
  }

  if (genreLoading) {
    return <p>Still loading</p>;
  }

  if (genreError) {
    return <p>{genreError.message}</p>;
  }
};

const Genres = () => {
  return (
    <AnimeContextProvider>
      <GenresInner />
    </AnimeContextProvider>
  );
};

export default Genres;

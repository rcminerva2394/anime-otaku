import React from 'react';
import ShowAll from '../UI/ShowAll';
import {
  AnimeContextProvider,
  useAnimeContext,
} from '../contexts/animeContext';

const AllTop100AnimeInner = () => {
  const { topData, topLoading, topError } = useAnimeContext();

  if (topData) {
    return <ShowAll prevData={topData} title='Top 100 Anime' />;
  }

  if (topLoading) {
    return <p>Still loading</p>;
  }

  if (topError) {
    return <p>{topError.message}</p>;
  }
};

const AllTop100Anime = () => {
  return (
    <AnimeContextProvider>
      <AllTop100AnimeInner />
    </AnimeContextProvider>
  );
};

export default AllTop100Anime;

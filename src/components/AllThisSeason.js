import React from 'react';
import ShowAll from '../UI/ShowAll';
import {
  AnimeContextProvider,
  useAnimeContext,
} from '../contexts/animeContext';

const AllThisSeasonInner = () => {
  const { seasonData, seasonLoading, seasonError } = useAnimeContext();

  if (seasonData) {
    return <ShowAll prevData={seasonData} title='Popular This Season' />;
  }

  if (seasonLoading) {
    return <p>Still loading</p>;
  }

  if (seasonError) {
    return <p>{seasonError.message}</p>;
  }
};

const AllThisSeason = () => {
  return (
    <AnimeContextProvider>
      <AllThisSeasonInner />
    </AnimeContextProvider>
  );
};

export default AllThisSeason;

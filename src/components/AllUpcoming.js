import React from 'react';
import ShowAll from '../UI/ShowAll';
import {
  AnimeContextProvider,
  useAnimeContext,
} from '../contexts/animeContext';

const AllUpcomingInner = () => {
  const { upcomingData, upcomingLoading, upcomingError } = useAnimeContext();

  if (upcomingData) {
    return <ShowAll prevData={upcomingData} title='Upcoming' />;
  }

  if (upcomingLoading) {
    return <p>Still loading</p>;
  }

  if (upcomingError) {
    return <p>{upcomingError.message}</p>;
  }
};

const AllUpcoming = () => {
  return (
    <AnimeContextProvider>
      <AllUpcomingInner />
    </AnimeContextProvider>
  );
};

export default AllUpcoming;

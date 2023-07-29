import React, { useEffect } from 'react';
import ThisSeasonPrev from './ThisSeasonPrev';
import UpcomingPrev from './UpcomingPrev';
import TopAnimePrev from './TopAnime/TopAnimePrev';
import Schedules from './Schedules/Schedules';
import { useAnimeContext } from '../../contexts/animeContext';

const Home = () => {
  const { setIsFiltering } = useAnimeContext();

  // To hide the filter component, whenever home is mounted especially when they go back or click back on window
  useEffect(() => {
    setIsFiltering(false);
  }, []);

  return (
    <>
      <div class='2xl:grid grid-cols-3'>
        <div class='2xl:col-start-1 col-end-3'>
          <ThisSeasonPrev />
          <UpcomingPrev />
          <Schedules />
        </div>
        <TopAnimePrev />
      </div>
    </>
  );
};

export default Home;

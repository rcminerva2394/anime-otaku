import React, { useContext, useEffect } from 'react';
import ThisSeasonPrev from './ThisSeasonPrev';
import UpcomingPrev from './UpcomingPrev';
import TopAnimePrev from './TopAnime/TopAnimePrev';
import Schedules from './Schedules/Schedules';
import IsFilterContext from '../../contexts/IsFilterContext';

const Home = () => {
  const { setIsFiltering } = useContext(IsFilterContext);

  // To hide the filter component, whenever home is mounted especially when they go back or click back on window
  useEffect(() => {
    setIsFiltering(false);
  }, []);

  return (
    <>
      <div class='grid grid-cols-3'>
        <div class='col-start-1 col-end-3'>
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

import React from 'react';
import ThisSeasonPrev from './ThisSeasonPrev';
import UpcomingPrev from './UpcomingPrev';
import TopAnimePrev from './TopAnime/TopAnime';
import Schedules from './Schedules/Schedules';

const Home = () => {
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

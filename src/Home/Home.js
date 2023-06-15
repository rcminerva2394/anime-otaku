import React from 'react';
import ThisSeasonAnime from './ThisSeason';
import Upcoming from './Upcoming';
import TopAnime from './TopAnime/TopAnime';

const Home = () => {
  return (
    <>
      <div class='grid grid-cols-3'>
        <div class='col-start-1 col-end-3'>
          <ThisSeasonAnime />
          <Upcoming />
        </div>

        <TopAnime />
      </div>
    </>
  );
};

export default Home;

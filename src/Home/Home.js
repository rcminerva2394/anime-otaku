import React from 'react';
import ThisSeasonAnime from './ThisSeason';
import Upcoming from './Upcoming';
import TopAnime from './TopAnime/TopAnime';

const Home = () => {
  return (
    <>
      <ThisSeasonAnime />
      <Upcoming />
      <TopAnime />
    </>
  );
};

export default Home;

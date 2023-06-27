import React from 'react';
import { useLocation } from 'react-router-dom';
import ShowAll from '../UI/ShowAll';

const AllTop100Anime = () => {
  const location = useLocation();
  const prevData = location.state?.data;
  const url = 'https://api.jikan.moe/v4/top/anime';

  return <ShowAll prevData={prevData} url={url} title='Top 100 Anime' />;
};

export default AllTop100Anime;

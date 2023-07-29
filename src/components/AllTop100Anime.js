import React from 'react';
import { useLocation } from 'react-router-dom';
import ShowAll from '../UI/ShowAll';
import apiUrls from '../constants/apiUrls';

const AllTop100Anime = () => {
  const location = useLocation();
  const prevData = location.state?.data;
  const url = apiUrls.top;

  return (
    <ShowAll
      prevData={prevData}
      url={url}
      title='Top 100 Anime'
      location={location}
    />
  );
};

export default AllTop100Anime;

import React from 'react';
import { useLocation } from 'react-router-dom';
import ShowAll from '../UI/ShowAll';

const AllUpcoming = () => {
  const location = useLocation();
  const prevData = location.state?.data;
  const url = 'https://api.jikan.moe/v4/seasons/upcoming';

  return <ShowAll prevData={prevData} url={url} title='Upcoming' />;
};

export default AllUpcoming;

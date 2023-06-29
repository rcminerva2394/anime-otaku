import React from 'react';
import { useLocation } from 'react-router-dom';
import ShowAll from '../UI/ShowAll';
import apiUrls from '../constants/apiUrls';

const AllUpcoming = () => {
  const location = useLocation();
  const prevData = location.state?.data;
  const url = apiUrls.upcoming;

  return <ShowAll prevData={prevData} url={url} title='Upcoming' />;
};

export default AllUpcoming;

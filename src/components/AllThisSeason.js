import React from 'react';
import { useLocation } from 'react-router-dom';
import ShowAll from '../UI/ShowAll';
import apiUrls from '../constants/apiUrls';

const AllThisSeason = () => {
  const location = useLocation();
  const prevData = location.state?.data;
  const url = apiUrls.season;

  return <ShowAll prevData={prevData} url={url} title='Popular This Season' />;
};

export default AllThisSeason;

import React from 'react';
import { useLocation } from 'react-router-dom';
import ShowAll from '../UI/ShowAll';

const AllThisSeason = () => {
  const location = useLocation();
  const prevData = location.state?.data;
  const url = 'https://api.jikan.moe/v4/seasons/now';

  return <ShowAll prevData={prevData} url={url} title='Popular This Season' />;
};

export default AllThisSeason;

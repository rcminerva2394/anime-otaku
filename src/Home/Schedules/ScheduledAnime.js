import React from 'react';

const ScheduledAnime = ({ anime }) => {
  const { title } = anime;
  return (
    <>
      <li class='bg-white py-3 px-6 shadow-lg rounded-'>{title}</li>
    </>
  );
};

export default ScheduledAnime;

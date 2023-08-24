import React from 'react';

const ScheduledAnime = ({ anime }) => {
  const { title } = anime;
  return (
    <>
      <li
        className='bg-white py-3 px-6 shadow-lg rounded dark:bg-neutral-900
'
      >
        {title}
      </li>
    </>
  );
};

export default ScheduledAnime;

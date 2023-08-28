import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MultiLineDropdown = ({ title, list, link, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const items = list.map((item) => (
    <Link
      to={`${link}${item.mal_id}/${item.name.toLowerCase()}/1`}
      state={{ id: item.mal_id, title: item.name }}
      {...rest}
    >
      <li
        key={item['mal_id']}
        className='text-slate-300 hover:text-white focus:text-white'
      >
        {item.name}
      </li>
    </Link>
  ));

  return (
    <div
      onMouseEnter={hoverHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hover:text-black focus:text-black dark:text-neutral-400 dark:hover:text-neutral-200'
      role='button'
    >
      <p>{title}</p>
      {isHovered ? (
        <ul className='absolute bg-gradient-to-r from-slate-600 to-slate-900 z-10 py-4 px-6 lg:w-full xl:w-8/12 lg:h-96 overflow-scroll grid text-sm lg:text-base w-auto h-72 lg:grid-cols-3 gap-2 -translate-x-1/2 lg:-translate-x-3/4 border'>
          {items}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default MultiLineDropdown;

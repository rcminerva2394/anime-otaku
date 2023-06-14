import React from 'react';
import { MoonIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav class='flex flex-row'>
        <ul class='flex flex-row justify-evenly gap-x-10 text-slate-500'>
          <li>
            <Link to='/' class='hover:text-black focus:text-black'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/genres' class='hover:text-black focus:text-black'>
              Genres
            </Link>
          </li>
          <li>
            <Link to='/all-anime' class='hover:text-black focus:text-black'>
              All Anime
            </Link>
          </li>
        </ul>
        <MoonIcon class='w-6 h-6 text-neutral-600 ml-10 hover:text-neutral-700' />
      </nav>
    </>
  );
};

export default Navigation;

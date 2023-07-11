import React, { useState, useContext, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import IsFilterContext from '../../contexts/IsFilterContext';
import { genres } from '../../constants/queryParams';

const Navigation = () => {
  const { setIsFiltering } = useContext(IsFilterContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isFilteringHandler = () => {
    setIsFiltering(false);
  };

  // For Genres
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  // For toggling dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <nav class='flex flex-row'>
        <ul class='flex flex-row justify-evenly gap-x-10 text-slate-500'>
          <li>
            <Link
              to='/'
              class='hover:text-black focus:text-black dark:text-neutral-400  dark:hover:text-neutral-200'
              onClick={isFilteringHandler}
            >
              Home
            </Link>
          </li>
          <li
            onMouseEnter={hoverHandler}
            onMouseLeave={mouseLeaveHandler}
            class='hover:text-black focus:text-black dark:text-neutral-400  dark:hover:text-neutral-200'
            role='button'
          >
            <p>Genres</p>
            {isHovered ? (
              <ul class='absolute bg-gradient-to-r from-slate-600 to-slate-900 z-10 py-4 px-6 w-4/12 h-96 overflow-scroll grid grid-cols-3 gap-2 -translate-x-3/4 border'>
                {genres.map((genre) => (
                  <Link
                    to='/genres'
                    onClick={isFilteringHandler}
                    state={{ id: genre.mal_id, title: genre.name }}
                  >
                    <li
                      key={genre['mal_id']}
                      class='text-slate-300 hover:text-white focus:text-white'
                    >
                      {genre.name}
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              ''
            )}
          </li>

          <li>
            <Link
              to='/all-anime'
              class='hover:text-black focus:text-black dark:text-neutral-400  dark:hover:text-neutral-200'
              onClick={isFilteringHandler}
            >
              All Anime
            </Link>
          </li>
        </ul>
        {isDarkMode ? (
          <SunIcon
            class='w-6 h-6  ml-10 text-neutral-600 hover:text-neutral-700 dark:text-neutral-400  dark:hover:text-neutral-200'
            onClick={toggleDarkMode}
          />
        ) : (
          <MoonIcon
            class='w-6 h-6 text-neutral-600 ml-10 hover:text-neutral-700'
            onClick={toggleDarkMode}
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;

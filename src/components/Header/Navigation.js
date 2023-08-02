import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useAnimeContext } from '../../contexts/animeContext';
import { genres } from '../../constants/queryParams';

const Navigation = ({ isShowMenu }) => {
  const { setIsFiltering } = useAnimeContext();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { showMenu, setShowMenu } = isShowMenu;

  const isFilteringHandler = () => {
    setIsFiltering(false);
    setShowMenu((prevState) => !prevState);
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
    setShowMenu((prevState) => !prevState);
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
      <nav class='lg:self-start mobile-nav lg:desktop-nav '>
        <ul class='flex flex-col items-center lg:flex-row justify-evenly gap-x-10 lg:text-slate-500'>
          <li>
            <Link
              to='/anime-otaku'
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
              <ul class='absolute bg-gradient-to-r from-slate-600 to-slate-900 z-10 py-4 px-6 lg:w-full xl:w-8/12 lg:h-96 overflow-scroll grid text-sm lg:text-base w-auto h-72  lg:grid-cols-3 gap-2 -translate-x-1/2 lg:-translate-x-3/4 border'>
                {genres.map((genre) => (
                  <Link
                    to={`/anime-otaku/genres/${
                      genre.mal_id
                    }/${genre.name.toLowerCase()}/1`}
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
              to='/anime-otaku/all-anime'
              class='hover:text-black focus:text-black dark:text-neutral-400  dark:hover:text-neutral-200'
              onClick={isFilteringHandler}
            >
              All Anime
            </Link>
          </li>
        </ul>
        {isDarkMode ? (
          <SunIcon
            class='w-6 h-6 lg:ml-10 text-neutral-600 hover:text-neutral-700 dark:text-neutral-400  dark:hover:text-neutral-200 justify-self-center'
            onClick={toggleDarkMode}
          />
        ) : (
          <MoonIcon
            class='w-6 h-6 text-neutral-600 lg:ml-10 hover:text-neutral-700 justify-self-center'
            onClick={toggleDarkMode}
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;

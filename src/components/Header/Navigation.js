import React from 'react';
import { Link } from 'react-router-dom';
import { useAnimeContext } from '../../contexts/animeContext';
import { genres } from '../../constants/queryParams';
import MultiLineDropdown from '../../UI/MultiLineDropdown';

const Navigation = ({ isShowMenu }) => {
  const { setIsFiltering } = useAnimeContext();
  const { setShowMenuBar } = isShowMenu;

  const isFilteringHandler = () => {
    setIsFiltering(false);
    setShowMenuBar((prevState) => !prevState);
  };

  return (
    <>
      <nav className='flex'>
        <ul className='flex flex-col items-center lg:flex-row justify-evenly gap-x-10 lg:text-slate-500'>
          <li>
            <Link
              to='/anime-otaku'
              className='hover:text-black focus:text-black dark:text-neutral-400  dark:hover:text-neutral-200'
              onClick={isFilteringHandler}
            >
              Home
            </Link>
          </li>
          <li>
            <MultiLineDropdown
              title='Genres'
              list={genres}
              link={'/anime-otaku/genres/'}
              onClick={isFilteringHandler}
            />
          </li>
          <li>
            <Link
              to='/anime-otaku/all-anime'
              className='hover:text-black focus:text-black dark:text-neutral-400  dark:hover:text-neutral-200'
              onClick={isFilteringHandler}
            >
              All Anime
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

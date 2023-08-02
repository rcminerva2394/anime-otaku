import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import apiUrls from '../../constants/apiUrls';
import { useAnimeContext } from '../../contexts/animeContext';

const SearchTab = () => {
  const navigate = useNavigate();
  const { setIsFiltering, setUrl } = useAnimeContext();
  const [inputAnime, setInputName] = useState('');

  const searchAnimeHandler = () => {
    setIsFiltering(true);
    setUrl(`${apiUrls.search}&q=${inputAnime}`);
    navigate('/anime-otaku/search-results/1');
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      setIsFiltering(true);
      setUrl(`${apiUrls.search}&q=${inputAnime}`);
      navigate('/anime-otaku/search-results/1');
    }
  };

  return (
    <div
      class='flex flex-row items-center bg-light-pink py-2 px-4 lg:py-3 lg:px-5 rounded-full dark:bg-neutral-700 w-60
'
    >
      <input
        type='text'
        placeholder='Search...'
        class='bg-inherit outline-0 mr-5 placeholder-gray font-medium dark:placeholder-neutral-400
'
        onChange={(e) => setInputName(e.target.value)}
        onKeyDown={keyPressHandler}
      ></input>
      <MagnifyingGlassIcon
        class='w-6 h-6 text-gray hover:text-black dark:text-neutral-400 dark:hover:text-neutral-200
'
        tabIndex={0}
        onClick={searchAnimeHandler}
      />
    </div>
  );
};

export default SearchTab;

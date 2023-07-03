import React, { useState, useContext } from 'react';
import FilterContext from '../../contexts/IsFilterContext';
import SearchFilterContext from '../../contexts/SearchFilterContext';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import apiUrls from '../../constants/apiUrls';

const SearchTab = () => {
  const navigate = useNavigate();
  const { setIsFiltering } = useContext(FilterContext);
  const { setUrl } = useContext(SearchFilterContext);
  const [inputAnime, setInputName] = useState('');

  const searchAnimeHandler = () => {
    setIsFiltering(true);
    setUrl(`${apiUrls.search}&q=${inputAnime}`);
    navigate('/search-results');
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      setIsFiltering(true);
      setUrl(`${apiUrls.search}&q=${inputAnime}`);
      navigate('/search-results');
    }
  };

  return (
    <div class='flex flex-row items-center bg-light-pink py-3 px-5 rounded-full'>
      <input
        type='text'
        placeholder='Search...'
        class='bg-inherit outline-0 mr-5 placeholder-gray font-medium'
        onChange={(e) => setInputName(e.target.value)}
        onKeyDown={keyPressHandler}
      ></input>
      <MagnifyingGlassIcon
        class='w-6 h-6 text-gray hover:text-black'
        tabIndex={0}
        onClick={searchAnimeHandler}
      />
    </div>
  );
};

export default SearchTab;

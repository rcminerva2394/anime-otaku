import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Input from '../../UI/Input';

const SearchBar = ({ onSearchAnime, onKeyPress }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='flex flex-row justify-between items-center bg-light-pink py-2 px-4 lg:py-3 lg:px-5 rounded-full dark:bg-neutral-700 w-60'>
      <Input
        placeholder='Search...'
        className='font-medium outline-0'
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => onKeyPress(e, searchTerm)}
        value={searchTerm}
      />
      <MagnifyingGlassIcon
        className='w-6 h-6 text-gray hover:text-black dark:text-neutral-400 dark:hover:text-neutral-200'
        tabIndex={0}
        onClick={() => onSearchAnime(searchTerm)}
      />
    </div>
  );
};

export default SearchBar;

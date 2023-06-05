import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchTab = () => {
  return (
    <div class='flex flex-row items-center bg-light-pink py-3 px-5 rounded-full'>
      <input
        type='text'
        placeholder='Search...'
        class='bg-inherit outline-0 mr-5'
      ></input>
      <MagnifyingGlassIcon class='w-6 h-6 text-gray' />
    </div>
  );
};

export default SearchTab;

import React, { useState } from 'react';
import useDataFetcher from '../customHooks/useDataFetcher';
import apiUrls from '../constants/apiUrls';
import ShowAll from '../UI/ShowAll';

const AllAnime = () => {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const baseUrl = apiUrls.search;
  const [url, setUrl] = useState(baseUrl);
  const [currentTitle, setCurrentTitle] = useState('All Anime');

  const btnAllHandler = () => {
    setUrl(baseUrl);
    setCurrentTitle('All Anime');
  };
  const btnLettersHandler = (val) => {
    setUrl(`${baseUrl}letter=${val}`);
    setCurrentTitle(`${val} Anime`);
  };

  const { data, loading, error } = useDataFetcher(url);

  if (data)
    return (
      <div class='flex flex-col justyify-center'>
        <div class='bg-gradient-to-r from-stone-50 to-stone-200 py-4 px-6 grid grid-cols-12 gap-2 self-center rounded-lg mt-20'>
          <input
            type='button'
            value='All'
            onClick={btnAllHandler}
            class='cursor-pointer bg-dark-gray hover:bg-dark-gray-1 w-10 text-2xl'
          />
          {alphabet.map((letter) => (
            <input
              type='button'
              value={letter.toUpperCase()}
              onClick={() => btnLettersHandler(letter.toUpperCase())}
              class='cursor-pointer bg-dark-gray hover:bg-dark-gray-1 w-10 text-2xl'
            />
          ))}
        </div>
        <ShowAll prevData={data} url={url} title={currentTitle} />
      </div>
    );

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>Sorry! Still loading</p>;
  }
};

export default AllAnime;

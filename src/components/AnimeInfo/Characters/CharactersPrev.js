import React from 'react';
import useDataFetcher from '../../../hooks/useDataFetcher';
import Characters from '../../../UI/Characters';

import { Link } from 'react-router-dom';

const CharactersPrev = ({ id }) => {
  const url = `https://api.jikan.moe/v4/anime/${id}/characters`;
  const { data, loading, error } = useDataFetcher(url);

  let mainChars;

  if (data) {
    mainChars = data.data.filter((character) => character.role === 'Main');
    return (
      <section className='my-24 xl:w-4/5'>
        <div className='flex justify-between items-center mb-3'>
          {data.data.length !== 0 ? (
            <p className='text-lg font-medium uppercase'> Characters</p>
          ) : (
            ''
          )}
          {data.data.length >= 5 ? (
            <Link
              to={`/anime-otaku/all-characters/${id}`}
              state={{ data: data.data }}
            >
              <p className='text-sm text-slate-600 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-200'>
                View All
              </p>
            </Link>
          ) : (
            ''
          )}
        </div>
        <Characters data={mainChars} />
      </section>
    );
  }

  if (loading) {
    return <p>Still loading</p>;
  }

  if (error) {
    return <p>Sorry!</p>;
  }
};

export default CharactersPrev;

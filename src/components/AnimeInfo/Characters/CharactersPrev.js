import React from 'react';
import useDataFetcher from '../../../customHooks/useDataFetcher';
import Characters from '../../../UI/Characters';

import { Link } from 'react-router-dom';

const CharactersPrev = ({ id }) => {
  const url = `https://api.jikan.moe/v4/anime/${id}/characters`;
  const { data, loading, error } = useDataFetcher(url);

  let mainChars;

  if (data) {
    mainChars = data.data.filter((character) => character.role === 'Main');
    return (
      <section class='my-24 w-4/5'>
        <div class='flex justify-between items-center mb-3'>
          <p class='text-lg font-medium uppercase'> Characters</p>
          <Link to={`/all-characters/${id}`} state={{ data: data.data }}>
            <p class='text-sm text-slate-600 hover:text-black'>View All</p>
          </Link>
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

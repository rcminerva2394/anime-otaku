import React from 'react';
import useDataFetcher from '../../../customHooks/useDataFetcher';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

const CharactersPrev = ({ id }) => {
  const url = `https://api.jikan.moe/v4/anime/${id}/characters`;
  const { data, loading, error } = useDataFetcher(url);

  if (data) {
    return (
      <section class='p-y-28 w-4/5'>
        <div class='flex justify-between items-center mb-3'>
          <p class='text-lg font-medium'> Characters</p>
          <Link to={`/all-characters/${id}`}>
            <p class='text-sm'>View All</p>
          </Link>
        </div>

        <ul class='grid gap-6 grid-cols-2'>
          {data.data.map((character) => {
            if (character.role === 'Main') {
              return (
                <CharacterItem
                  key={character.character['mal_id']}
                  characterItem={character}
                />
              );
            } else {
              return '';
            }
          })}
        </ul>
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

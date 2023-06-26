import React from 'react';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

const Characters = ({ data }) => {
  return (
    <ul class='grid gap-6 grid-cols-2'>
      {data.map((character) => (
        <Link to={`/character-info/${character.character['mal_id']}`}>
          <CharacterItem key={character.character['mal_id']} data={character} />
        </Link>
      ))}
    </ul>
  );
};

export default Characters;

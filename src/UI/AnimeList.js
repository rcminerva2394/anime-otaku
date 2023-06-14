import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = ({ animeList }) => {
  return (
    <ul class='grid grid-cols-5 gap-2'>
      {animeList.data.map((anime) => (
        <AnimeCard anime={anime} />
      ))}
    </ul>
  );
};

export default AnimeList;

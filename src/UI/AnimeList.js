import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = (props) => {
  const { animeList, layout } = props;
  const gridVariants = {
    col4: 'grid grid-cols-4 gap-2 gap-y-5',
    col5: 'grid grid-cols-5 gap-6 gap-y-10',
  };
  return (
    <ul class={`${gridVariants[layout]}`}>
      {animeList.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} />
      ))}
    </ul>
  );
};

export default AnimeList;

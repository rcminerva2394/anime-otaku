import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = (props) => {
  const { animeList, layout, secTitle } = props;
  const gridVariants = {
    col4: 'grid grid-cols-4 gap-2 gap-y-5',
    col5: 'grid grid-cols-5 gap-6 gap-y-10',
  };
  return (
    <ul class={`${gridVariants[layout]}`}>
      {console.log(secTitle)}
      {animeList.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} secTitle={secTitle} />
      ))}
    </ul>
  );
};

export default AnimeList;

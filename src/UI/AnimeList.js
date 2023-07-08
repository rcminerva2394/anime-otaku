import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = (props) => {
  const { animeList, layout, secTitle } = props;
  const gridVariants = {
    col4: 'lg:grid-cols-4 gap-x-2 gap-y-5',
    col5: 'lg:grid-cols-5 gap-x-6 gap-y-10',
  };
  return (
    <ul
      class={`grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 ${gridVariants[layout]}`}
    >
      {console.log(secTitle)}
      {animeList.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} secTitle={secTitle} />
      ))}
    </ul>
  );
};

export default AnimeList;

import React from 'react';
import ScheduledAnime from './ScheduledAnime';
import useDataFetcher from '../../../customHooks/useDataFetcher';
import { Link } from 'react-router-dom';

const ScheduledAnimes = ({ day }) => {
  const url = `https://api.jikan.moe/v4/schedules/${day}`;
  const { data, loading, error } = useDataFetcher(url, 1000);

  if (data) {
    return (
      <ul class='grid grid-cols-2 gap-3 mt-12'>
        {data.data.map((anime) => (
          <Link to={`/anime-info/${anime['mal_id']}`}>
            <ScheduledAnime anime={anime} key={anime.mal_id} />
          </Link>
        ))}
      </ul>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>Sorry! Still loading</p>;
  }
};

export default ScheduledAnimes;

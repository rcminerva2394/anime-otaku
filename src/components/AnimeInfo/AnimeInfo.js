import React from 'react';
import { useParams } from 'react-router-dom';
import useDataFetcher from '../../customHooks/useDataFetcher';
import AnimeDesc from './AnimeDesc';
import Characters from './Characters';

const AnimeInfo = () => {
  const { id } = useParams();
  const url = `https://api.jikan.moe/v4/anime/${id}`;
  const { data, loading, error } = useDataFetcher(url);

  if (data) {
    return <AnimeDesc info={data.data} />;
  }

  if (loading) {
    return <p>Still loading</p>;
  }

  if (error) {
    return <p>Sorry!</p>;
  }
};

export default AnimeInfo;

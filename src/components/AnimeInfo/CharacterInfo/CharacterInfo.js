import React from 'react';
import { useParams } from 'react-router-dom';
import useDataFetcher from '../../../customHooks/useDataFetcher';

const CharacterInfo = () => {
  const { id } = useParams;
  const url = `https://api.jikan.moe/v4/characters/${id}/full`;
  const { data, error, loading } = useDataFetcher(url);
  return <></>;
};

export default CharacterInfo;

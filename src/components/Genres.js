import React from 'react';
import { useLocation } from 'react-router-dom';
import apiUrls from '../constants/apiUrls';
import useDataFetcher from '../customHooks/useDataFetcher';
import ShowAll from '../UI/ShowAll';

const Genres = () => {
  const location = useLocation();
  const genreID = location.state?.id;
  const title = location.state?.title;
  const genreUrl = `${apiUrls.search}genres=${genreID}`;
  const { data, loading, error } = useDataFetcher(genreUrl);

  if (data) {
    return <ShowAll prevData={data} url={genreUrl} title={title} />;
  }

  if (loading) {
    return <p>Still loading</p>;
  }

  if (error) {
    return <p>Sorry!</p>;
  }
};

export default Genres;

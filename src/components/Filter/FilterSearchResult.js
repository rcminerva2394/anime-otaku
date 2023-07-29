import React, { useEffect } from 'react';
import useDataFetcher from '../../customHooks/useDataFetcher';
import ShowAll from '../../UI/ShowAll';
import { useAnimeContext } from '../../contexts/animeContext';

const FilterSearchResult = ({ url }) => {
  const { data, isLoading, error } = useDataFetcher(url);
  const { setIsFiltering } = useAnimeContext();

  // To hide the filter component, whenever home is mounted especially when they go back or click back on window
  useEffect(() => {
    setIsFiltering(true);
  }, []);

  if (data) {
    console.log(setIsFiltering);
    return <ShowAll prevData={data} url={url} title='Search Results' />;
  }

  if (isLoading) {
    return <p>Still loading</p>;
  }

  if (error) {
    return <p>Sorry!</p>;
  }
};

export default FilterSearchResult;

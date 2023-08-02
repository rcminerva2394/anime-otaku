import React, { useEffect } from 'react';
import useDataFetcher from '../../customHooks/useDataFetcher';
import ShowAll from '../../UI/ShowAll';
import {
  useAnimeContext,
  AnimeContextProvider,
} from '../../contexts/animeContext';

const FilterSearchResultInner = () => {
  const { setIsFiltering, url } = useAnimeContext();
  const { data, isLoading, error } = useDataFetcher(url);

  // console.log(searchData);

  // // To hide the filter component, whenever home is mounted especially when they go back or click back on window
  useEffect(() => {
    setIsFiltering(true);
  }, []);

  // if (searchData) {
  //   return <ShowAll prevData={searchData} title='Search Results' />;
  // }

  // if (searchLoading) {
  //   return <p>Still loading</p>;
  // }

  // if (searchError) {
  //   return <p>{searchError.message}</p>;
  // }

  // console.log(data);
  // if (data) {
  //   return <ShowAll prevData={data} title='Search Results' />;
  // }

  // if (isLoading) {
  //   return <p>Still loading</p>;
  // }

  // if (error) {
  //   return <p>Sorry!</p>;
  // }
};

const FilterSearchResult = () => {
  return (
    <AnimeContextProvider>
      <FilterSearchResultInner />
    </AnimeContextProvider>
  );
};

export default FilterSearchResult;

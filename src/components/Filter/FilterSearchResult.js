import React, { useEffect } from 'react';
import useDataFetcher from '../../hooks/useDataFetcher';
import ShowAll from '../../UI/ShowAll';
import { useAnimeContext } from '../../contexts/animeContext';

// const FilterSearchInner = () => {

// };

const FilterSearchResult = () => {
  const { setIsFiltering, url, searchData, searchLoading, searchError } =
    useAnimeContext();
  // const { data, isLoading, error } = useDataFetcher(url);

  console.log(url);
  // console.log(searchData);

  // // To hide the filter component, whenever home is mounted especially when they go back or click back on window
  useEffect(() => {
    setIsFiltering(true);
  }, []);

  if (searchData) {
    return <ShowAll prevData={searchData} title='Search Results' />;
  }

  if (searchLoading) {
    return <p>Still loading</p>;
  }

  if (searchError) {
    return <p>{searchError.message}</p>;
  }

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

export default FilterSearchResult;

import React from 'react';
import useDataFetcher from '../../customHooks/useDataFetcher';
import ShowAll from '../../UI/ShowAll';

const FilterSearchResult = ({ url }) => {
  const { data, isLoading, error } = useDataFetcher(url);

  if (data) {
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

import React from 'react';
import { useState, useContext } from 'react';

const AnimeContext = React.createContext(null);

export const AnimeContextProvider = ({ children }) => {
  const [isFiltering, setIsFiltering] = useState(false);
  const [url, setUrl] = useState('');

  const providerValue = {
    isFiltering,
    setIsFiltering,
    url,
    setUrl,
  };

  return (
    <AnimeContext.Provider value={providerValue}>
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnimeContext = () => {
  return useContext(AnimeContext);
};

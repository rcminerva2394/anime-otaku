import React from 'react';
import { useState, useContext } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import apiUrls from '../constants/apiUrls';
import useDataFetcher from '../customHooks/useDataFetcher';

const AnimeContext = React.createContext(null);

export const AnimeContextProvider = ({ children }) => {
  const [isFiltering, setIsFiltering] = useState(false);
  const [url, setUrl] = useState(apiUrls.search);
  console.log(url);

  const navigate = useNavigate();
  const location = useLocation();
  const { genreId, page } = useParams();

  // Popular This Season
  const seasonUrl = apiUrls.season;
  const seasonFinalUrl = `${seasonUrl}&page=${page}&sfw`;
  const {
    data: seasonData,
    loading: seasonLoading,
    error: seasonError,
  } = useDataFetcher(seasonFinalUrl);

  // Upcoming Animes
  const upcomingUrl = apiUrls.upcoming;
  const upcomingFinalUrl = `${upcomingUrl}&page=${page}&sfw`;
  const {
    data: upcomingData,
    loading: upComingLoading,
    error: upComingError,
  } = useDataFetcher(upcomingFinalUrl);

  // Top Anime
  const topUrl = apiUrls.top;
  const topFinalUrl = `${topUrl}&page=${page}&sfw`;
  const {
    data: topData,
    loading: topLoading,
    error: topError,
  } = useDataFetcher(topFinalUrl);

  // Genres
  const genreFinalUrl = `${apiUrls.search}genres=${genreId}&page=${page}&sfw`;
  const {
    data: genreData,
    loading: genreLoading,
    error: genreError,
  } = useDataFetcher(genreFinalUrl);

  // Search results

  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useDataFetcher(url);

  console.log(searchData);

  // Update Page Listener
  const updatePageHandler = (newPage) => {
    const newPath = location.pathname.replace(/\/[^/]*$/, `/${newPage}`);

    // Update the URL with the new page number
    navigate(newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const providerValue = {
    isFiltering,
    setIsFiltering,
    url,
    setUrl,
    seasonData,
    seasonLoading,
    seasonError,
    upcomingData,
    upComingLoading,
    upComingError,
    topData,
    topLoading,
    topError,
    genreData,
    genreLoading,
    genreError,
    searchData,
    searchLoading,
    searchError,
    updatePageHandler,
    page,
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

import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import apiUrls from '../constants/apiUrls';
import useDataFetcher from '../customHooks/useDataFetcher';
import SearchTab from '../components/Header/SearchTab';

const AnimeContext = React.createContext(null);

export const AnimeContextProvider = ({ children }) => {
  const [isFiltering, setIsFiltering] = useState(false);
  const [url, setUrl] = useState(apiUrls.search);

  const navigate = useNavigate();
  const location = useLocation();
  const { genreId, page = 1 } = useParams();

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

  console.log(url);

  // Search results
  const searchFinalUrl = `${url}&page=${page}&sfw`;
  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useDataFetcher(searchFinalUrl);

  console.log(searchFinalUrl);

  // Update Page Listener
  const updatePageHandler = (newPage) => {
    const newPath = location.pathname.replace(/\/[^/]*$/, `/${newPage}`);

    console.log(url);
    console.log(newPage);
    console.log(newPath);
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

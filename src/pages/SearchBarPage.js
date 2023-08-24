import React from 'react';
import { useNavigate } from 'react-router-dom';
import apiUrls from '../constants/apiUrls';
import { useAnimeContext } from '../contexts/animeContext';
import SearchBar from '../components/Header/SearchBar';

const SearchBarPage = () => {
  const navigate = useNavigate();
  const { setIsFiltering, setUrl } = useAnimeContext();

  const handleSearchAnime = (searchTerm) => {
    setIsFiltering(true);
    setUrl(`${apiUrls.search}&q=${searchTerm}`);
    navigate('/anime-otaku/search-results/1');
  };

  const handleKeypress = (e, searchTerm) => {
    if (e.key === 'Enter') {
      setIsFiltering(true);
      setUrl(`${apiUrls.search}&q=${searchTerm}`);
      navigate('/anime-otaku/search-results/1');
    }
  };

  return (
    <SearchBar onSearchAnime={handleSearchAnime} onKeyPress={handleKeypress} />
  );
};

export default SearchBarPage;

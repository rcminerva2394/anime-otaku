import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAnimeContext } from './contexts/animeContext';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Home from './components/Home/Home';
import FilterSearchResult from './components/Filter/FilterSearchResult';
import Genres from './components/Genres';
import AllAnime from './components/AllAnime';
import AnimeInfo from './components/AnimeInfo/AnimeInfo';
import AllCharacters from './components/AnimeInfo/Characters/AllCharacters';
import CharacterInfo from './components/AnimeInfo/CharacterInfo/CharacterInfo';
import AllThisSeason from './components/AllThisSeason';
import AllUpcoming from './components/AllUpcoming';
import AllTop100Anime from './components/AllTop100Anime';
import Footer from './components/Footer';

function App() {
  // For the filter url and search url
  const { isFiltering, url } = useAnimeContext();

  return (
    <>
      <Header />
      {isFiltering ? <Filter /> : ''}
      <Routes>
        <Route path='/anime-otaku' element={<Home />} />
        <Route
          path='/anime-otaku/search-results/:page'
          element={<FilterSearchResult />}
        />
        <Route
          path='/anime-otaku/genres/:genreId/:genreName/:page'
          element={<Genres />}
        />
        <Route path='/anime-otaku/all-anime' element={<AllAnime />} />
        <Route path='/anime-otaku/anime-info/:id' element={<AnimeInfo />} />
        <Route
          path='/anime-otaku/all-characters/:id'
          element={<AllCharacters />}
        />
        <Route
          path='/anime-otaku/character-info/:id'
          element={<CharacterInfo />}
        />
        <Route
          path='/anime-otaku/popular-this-season/:page'
          element={<AllThisSeason />}
        />
        <Route path='/anime-otaku/upcoming/:page' element={<AllUpcoming />} />
        <Route
          path='/anime-otaku/top-100-anime/:page'
          element={<AllTop100Anime />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

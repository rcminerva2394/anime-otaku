import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import IsFilterContext from './contexts/IsFilterContext';
import SearchTab from './components/Header/SearchTab';
import Navigation from './components/Header/Navigation';
import Filter from './components/Filter/Filter';
import FilterSearchResult from './components/Filter/FilterSearchResult';
import SearchFilterContext from './contexts/SearchFilterContext';
import Home from './components/Home/Home';
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
  const [isFiltering, setIsFiltering] = useState(false);
  // For the filter url and search url
  const [url, setUrl] = useState('');

  return (
    <IsFilterContext.Provider value={{ isFiltering, setIsFiltering }}>
      <SearchFilterContext.Provider value={{ url, setUrl }}>
        <header class='flex flex-col justify-start 2xl:flex-row justify-between 2xl:items-center'>
          <div class='flex flex-col 2xl:flex-row gap-x-6'>
            <p class='font-lily text-5xl'>AnimeOtaku</p>
            <SearchTab />
          </div>
          <Navigation />
        </header>
        {isFiltering ? <Filter /> : ''}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/search-results'
            element={<FilterSearchResult url={url} />}
          />
          <Route path='/genres' element={<Genres />} />
          <Route path='/all-anime' element={<AllAnime />} />
          <Route path='/anime-info/:id' element={<AnimeInfo />} />
          <Route path='/all-characters/:id' element={<AllCharacters />} />
          <Route path='/character-info/:id' element={<CharacterInfo />} />
          <Route path='/popular-this-season' element={<AllThisSeason />} />
          <Route path='/upcoming' element={<AllUpcoming />} />
          <Route path='/top-100-anime' element={<AllTop100Anime />} />
        </Routes>
        <Footer />
      </SearchFilterContext.Provider>
    </IsFilterContext.Provider>
  );
}

export default App;

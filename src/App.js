import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchTab from './components/Header/SearchTab';
import Navigation from './components/Header/Navigation';
import Filter from './components/Filter/Filter';
import FilterSearchResult from './components/Filter/FilterSearchResult';
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
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useAnimeContext } from './contexts/animeContext';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  // For the filter url and search url
  const { isFiltering, url } = useAnimeContext();
  const toggleNavBar = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const navEl = document.querySelector('nav');
    if (showMenu) {
      navEl.classList.add('nav-open');
    } else {
      navEl.classList.remove('nav-open');
    }
  }, [showMenu]);

  return (
    <>
      <header class='flex flex-col lg:flex-row lg:justify-between gap-y-4 2xl:items-center'>
        <div class='lg:self-start flex items-center justify-between'>
          <div class='flex flex-col lg:flex-row 2xl:flex-row gap-x-6 gap-y-2'>
            <p class='font-lily text-4xl xl:text-5xl'>AnimeOtaku</p>
            <SearchTab />
          </div>
          {!showMenu ? (
            <Bars4Icon class='w-6 h-6 lg:hidden' onClick={toggleNavBar} />
          ) : (
            <XMarkIcon class='w-6 h-6 lg:hidden' onClick={toggleNavBar} />
          )}
        </div>
        <Navigation isShowMenu={{ showMenu, setShowMenu }} />
      </header>
      {isFiltering ? <Filter /> : ''}
      <Routes>
        <Route path='/anime-otaku' element={<Home />} />
        <Route
          path='/anime-otaku/search-results'
          element={<FilterSearchResult url={url} />}
        />
        <Route path='/anime-otaku/genres' element={<Genres />} />
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
          path='/anime-otaku/popular-this-season'
          element={<AllThisSeason />}
        />
        <Route path='/anime-otaku/upcoming' element={<AllUpcoming />} />
        <Route path='/anime-otaku/top-100-anime' element={<AllTop100Anime />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

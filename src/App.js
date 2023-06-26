import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchTab from './components/Header/SearchTab';
import Navigation from './components/Header/Navigation';
import Home from './components/Home/Home';
import Genres from './components/Header/Navigation/Genres';
import AllAnime from './components/Header/Navigation/AllAnime';
import AnimeInfo from './components/AnimeInfo/AnimeInfo';
import AllCharacters from './components/AnimeInfo/Characters/AllCharacters';
import CharacterInfo from './components/AnimeInfo/CharacterInfo/CharacterInfo';
import ThisSeason from './components/ThisSeason';
import Upcoming from './components/Upcoming';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header class='flex justify-between items-center'>
        <div class='flex flex-row gap-x-6'>
          <p class='font-lily text-5xl'>AnimeOtaku</p>
          <SearchTab />
        </div>
        <Navigation />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/genres' element={<Genres />} />
        <Route path='/all-anime' element={<AllAnime />} />
        <Route path='/anime-info/:id' element={<AnimeInfo />} />
        <Route path='/all-characters/:id' element={<AllCharacters />} />
        <Route path='/character-info/:id' element={<CharacterInfo />} />
        <Route path='/popular-this-season' element={<ThisSeason />} />
        <Route path='/upcoming' element={<Upcoming />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

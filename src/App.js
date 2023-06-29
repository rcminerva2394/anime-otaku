import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchTab from './components/Header/SearchTab';
import Navigation from './components/Header/Navigation';
import Filter from './components/Filter/Filter';
import Home from './components/Home/Home';
import Genres from './components/Header/Navigation/Genres';
import AllAnime from './components/Header/Navigation/AllAnime';
import AnimeInfo from './components/AnimeInfo/AnimeInfo';
import AllCharacters from './components/AnimeInfo/Characters/AllCharacters';
import CharacterInfo from './components/AnimeInfo/CharacterInfo/CharacterInfo';
import AllThisSeason from './components/AllThisSeason';
import AllUpcoming from './components/AllUpcoming';
import AllTop100Anime from './components/AllTop100Anime';
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
      <Filter />
      <Routes>
        <Route path='/' element={<Home />} />
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
    </>
  );
}

export default App;

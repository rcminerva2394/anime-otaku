import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchTab from './Header/SearchTab/SearchTab';
import Navigation from './Header/Navigation/Navigation';
import Home from './Header/Navigation/Home';
import Genres from './Header/Navigation/Genres';
import AllAnime from './Header/Navigation/AllAnime';

function App() {
  return (
    <>
      <header class='flex justify-between items-center'>
        <div class='flex flex-row gap-x-6'>
          <p class='font-lily text-4xl'>AnimeOtaku</p>
          <SearchTab />
        </div>
        <Navigation />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/genres' element={<Genres />} />
        <Route path='/all-anime' element={<AllAnime />} />
      </Routes>
    </>
  );
}

export default App;

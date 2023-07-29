import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AnimeContextProvider } from './contexts/animeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnimeContextProvider>
  </React.StrictMode>
);

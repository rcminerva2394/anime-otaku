import React, { useState, useEffect, useRef } from 'react';
import {
  Bars4Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import SearchBarPage from '../../pages/SearchBarPage';
import Navigation from './Navigation';

const Header = () => {
  // To display hamburger menu icon
  const [showMenuBar, setShowMenuBar] = useState(false);
  const toggleMenuBar = () => {
    setShowMenuBar((prevState) => !prevState);
  };

  // Toggle menubar
  const menuBarRef = useRef(null);
  useEffect(() => {
    if (!menuBarRef.current) {
      return;
    }

    if (showMenuBar) {
      menuBarRef.current.classList.add('nav-open');
    } else {
      menuBarRef.current.classList.remove('nav-open');
    }
  }, [showMenuBar]);

  // For toggling dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setShowMenuBar((prevState) => !prevState);
  };

  const htmlRef = useRef(document.documentElement);
  useEffect(() => {
    if (isDarkMode) {
      htmlRef.current.classList.add('dark');
    } else {
      htmlRef.current.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className='flex flex-col lg:flex-row lg:justify-between gap-y-4 2xl:items-center'>
      <div className='lg:self-start flex items-center justify-between'>
        <div className='flex flex-col lg:flex-row 2xl:flex-row gap-x-6 gap-y-2'>
          <p className='font-lily text-4xl xl:text-5xl'>AnimeOtaku</p>
          <SearchBarPage />
        </div>
        {!showMenuBar ? (
          <Bars4Icon className='w-6 h-6 lg:hidden' onClick={toggleMenuBar} />
        ) : (
          <XMarkIcon className='w-6 h-6 lg:hidden' onClick={toggleMenuBar} />
        )}
      </div>
      <div className='lg:self-start mobile-nav lg:desktop-nav' ref={menuBarRef}>
        <Navigation isShowMenu={{ showMenuBar, setShowMenuBar }} />
        {isDarkMode ? (
          <SunIcon
            className='w-6 h-6 lg:ml-10 text-neutral-600 hover:text-neutral-700 dark:text-neutral-400  dark:hover:text-neutral-200 justify-self-center'
            onClick={toggleDarkMode}
          />
        ) : (
          <MoonIcon
            className='w-6 h-6 text-neutral-600 lg:ml-10 hover:text-neutral-700 justify-self-center'
            onClick={toggleDarkMode}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

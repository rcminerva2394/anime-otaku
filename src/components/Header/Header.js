import React, { useState, useEffect, useRef } from 'react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import SearchBarPage from '../../pages/SearchBarPage';
import Navigation from './Navigation';
import ToggleDarkMode from './ToggleDarkMode';

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
        <ToggleDarkMode onToggleMenuBar={toggleMenuBar} />
      </div>
    </header>
  );
};

export default Header;

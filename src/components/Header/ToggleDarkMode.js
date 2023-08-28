import React, { useState, useEffect, useRef } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ToggleDarkMode = ({ onToggleMenuBar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    onToggleMenuBar();
  };

  const htmlRef = useRef(document.documentElement);
  useEffect(() => {
    if (isDarkMode) {
      htmlRef.current.classList.add('dark');
    } else {
      htmlRef.current.classList.remove('dark');
    }
  }, [isDarkMode]);

  if (isDarkMode) {
    return (
      <SunIcon
        className='w-6 h-6 lg:ml-10 text-neutral-600 hover:text-neutral-700 dark:text-neutral-400  dark:hover:text-neutral-200 justify-self-center'
        onClick={toggleDarkMode}
      />
    );
  } else {
    return (
      <MoonIcon
        className='w-6 h-6 text-neutral-600 lg:ml-10 hover:text-neutral-700 justify-self-center'
        onClick={toggleDarkMode}
      />
    );
  }
};

export default ToggleDarkMode;

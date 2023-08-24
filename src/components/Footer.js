import React from 'react';
import { ReactComponent as GithubIcon } from '../assets/logos/logo-github.svg';
import { ReactComponent as LinkedinIcon } from '../assets/logos/logo-linkedin.svg';

const Footer = () => {
  return (
    <footer className='self-end flex justify-between flex-wrap items-center mt-48 gap-4'>
      <div className='mr-4'>
        <p className='font-lily text-4xl xl:text-5xl'>AnimeOtaku</p>
        <p className='text-xs wrap lg:text-base'>
          API Source: JIKAN API (Unofficial MyAnimeList API)
        </p>
      </div>
      <div className='flex gap-x-3'>
        <a
          href='https://github.com/rcminerva2394/anime-otaku'
          target='_blank'
          rel='
        noreferrer'
        >
          <GithubIcon className='bg-zinc-700 hover:bg-zinc-900 dark:bg-transparent' />
        </a>
        <a
          href='#'
          target='_blank'
          rel='
        noreferrer'
        >
          <LinkedinIcon className='bg-zinc-700 hover:bg-zinc-900 dark:bg-transparent' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

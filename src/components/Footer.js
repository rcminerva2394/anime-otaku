import React from 'react';
import { ReactComponent as GithubIcon } from '../assets/logos/logo-github.svg';
import { ReactComponent as LinkedinIcon } from '../assets/logos/logo-linkedin.svg';

const Footer = () => {
  return (
    <footer class='flex justify-between items-center pt-24'>
      <div>
        <p class='font-lily text-5xl'>AnimeOtaku</p>
        <p>API Source: JIKAN API (Unofficial MyAnimeList API)</p>
      </div>
      <div class='flex gap-x-3'>
        <a
          href='https://github.com/rcminerva2394/anime-otaku'
          target='_blank'
          rel='
        noreferrer'
        >
          <GithubIcon class='bg-zinc-700 hover:bg-zinc-900' />
        </a>
        <a
          href='#'
          target='_blank'
          rel='
        noreferrer'
        >
          <LinkedinIcon class='bg-zinc-700 hover:bg-zinc-900' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

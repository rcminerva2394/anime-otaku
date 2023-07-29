import React from 'react';
import { Link } from 'react-router-dom';
import TOP_ANIME_COLORS from '../constants/topColors';

const AnimeCard = ({ anime, secTitle }) => {
  const {
    title_english: englishTitle,
    title,
    images,
    mal_id: id,
    rank,
  } = anime;

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  return (
    <Link to={`/anime-otaku/anime-info/${id}`}>
      <li class='relative'>
        {secTitle === 'Top 100 Anime' ? (
          <div
            class={`w-12 h-12 ${
              rank > 10 && rank < 101
                ? TOP_ANIME_COLORS[randomNumber]
                : rank < 11
                ? TOP_ANIME_COLORS[rank]
                : 'hidden'
            } flex justify-center items-center absolute`}
          >
            <p class='text-white text-3xl font-bebas'>{rank}</p>
          </div>
        ) : (
          ''
        )}
        <figure w-225 h-350>
          <img
            src={images.webp.large_image_url}
            alt={title ? title : englishTitle}
            class='bg-cover w-full h-5/6'
          />
          <div class='absolute inset-x-0 bottom-0 h-6 custom-gradient'></div>
          <figcaption class='font-normal mt-2'>
            {title ? title : englishTitle}
          </figcaption>
        </figure>
      </li>
    </Link>
  );
};

export default AnimeCard;

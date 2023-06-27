import React from 'react';
import TOP_ANIME_COLORS from '../../../constants/topColors';
import { Link } from 'react-router-dom';

const TopAnimeItemPrev = ({ anime }) => {
  const {
    title_english: englishTitle,
    title,
    images,
    rank,
    aired,
    type,
    episodes,
    genres,
    mal_id: id,
  } = anime;

  return (
    <li class='relative'>
      <div
        class={`w-12 h-12 ${TOP_ANIME_COLORS[rank]} flex justify-center items-center absolute`}
      >
        <p class='text-white text-3xl font-bebas'>{rank}</p>
      </div>

      <Link to={`/anime-info/${id}`}>
        <div class='flex gap-5 items-center'>
          <img
            src={images.webp.large_image_url}
            alt={englishTitle ? englishTitle : title}
            class='bg-cover w-40'
          />
          <div>
            <p class='font-medium text-lg'>
              {' '}
              {englishTitle ? englishTitle : title}
            </p>
            <p> From {aired.string}</p>
            <p class='font-light'>
              {type} | {episodes} episodes
            </p>
            <ul class='flex gap-2 flex-wrap mt-3'>
              {genres.map((genre) => (
                <li
                  key={genre['mal_id']}
                  class={`${TOP_ANIME_COLORS[rank]} rounded-full text-center text-white px-2 py-1 inline font-medium text-sm`}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default TopAnimeItemPrev;

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
    <li className='relative'>
      <div
        className={`w-12 h-12 ${TOP_ANIME_COLORS[rank]} flex justify-center items-center absolute`}
      >
        <p className='text-white text-3xl font-bebas'>{rank}</p>
      </div>

      <Link to={`/anime-otaku/anime-info/${id}`}>
        <div className='flex flex-wrap gap-5 items-center sm:flex-nowrap'>
          <img
            src={images.webp.large_image_url}
            alt={englishTitle ? englishTitle : title}
            className='bg-cover w-40'
          />
          <div>
            <p className='font-medium text-lg'>
              {' '}
              {englishTitle ? englishTitle : title}
            </p>
            <p> From {aired.string}</p>
            <p className='font-light'>
              {type} | {episodes} episodes
            </p>
            <ul className='flex gap-2 flex-wrap mt-3 mb-6'>
              {genres.map((genre) => (
                <li
                  key={genre['mal_id']}
                  className={`${TOP_ANIME_COLORS[rank]} rounded-full text-center text-white px-2 py-1 inline font-medium text-sm`}
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

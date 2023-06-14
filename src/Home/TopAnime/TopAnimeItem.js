import React from 'react';

const TopAnimeItem = ({ anime }) => {
  const {
    title_english: englishTitle,
    title,
    images,
    rank,
    aired,
    type,
    episodes,
  } = anime;
  return (
    <li>
      <p>{rank}</p>
      <img
        src={images.webp.large_image_url}
        alt={englishTitle ? englishTitle : title}
        class='bg-cover w-full h-5/6'
      />
      <div>
        <p> {englishTitle ? englishTitle : title}</p>
        <p> From {aired.string}</p>
        <p>
          {type} | {episodes} episodes
        </p>
      </div>
    </li>
  );
};

export default TopAnimeItem;

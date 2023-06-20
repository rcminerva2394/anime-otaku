import React from 'react';

const AnimeDesc = ({ info }) => {
  const {
    title_english: englishTitle,
    title,
    title_japanese: japaneseTitle,
    images,
    rank,
    popularity,
    sypnosis,
    type,
    studios,
    aired,
    status,
    genres,
  } = info;

  return (
    <>
      <div>
        <img
          src={images.webp.large_image_url}
          alt={englishTitle ? englishTitle : title}
          class='bg-cover w-full h-5/6'
        />
        <div>
          <div>
            <p>{englishTitle}</p>
            <p>{title}</p>
            <p>{japaneseTitle}</p>
          </div>
          <div>
            <p>Rank:{rank}</p>
            <p>Popularity:{popularity}</p>
          </div>
          <p>{sypnosis}</p>
          <div>
            <p>Type: {type}</p>
            <p>Studios: {studios[0].name}</p>
            <p>Date Aired: {aired.string}</p>
            <p>Status: {status}</p>
            <p>Genres: {genres.map((genre) => `${genre.name}, `)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeDesc;

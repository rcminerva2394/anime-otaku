import React from 'react';

const AnimeDesc = ({ info }) => {
  const {
    title_english: englishTitle,
    title,
    title_japanese: japaneseTitle,
    images,
    rank,
    popularity,
    synopsis,
    type,
    studios,
    aired,
    status,
    genres,
    score,
    year,
    duration,
    source,
    broadcast,
    episodes,
  } = info;

  return (
    <section class='bg-zinc-100 p-6 w-4/5'>
      <div class='grid grid-cols-3 items-center gap-x-8'>
        <img
          src={images.webp.large_image_url}
          alt={englishTitle ? englishTitle : title}
          class='bg-cover w-full'
        />
        <div class='col-span-2'>
          <div class='flex justify-between items-center mb-10'>
            <div>
              <p class='text-2xl font-bold'>{englishTitle}</p>
              <p class='text-lg'>{title}</p>
              <p>{japaneseTitle}</p>
            </div>
            <div>
              <p>Rank: {rank}</p>
              <p>Popularity: {popularity}</p>
            </div>
          </div>

          <p class='mb-10'>{synopsis}</p>
          <div class='flex justify-between'>
            <div>
              <p>Type: {type}</p>
              <p>
                Studios: {studios.length !== 0 ? studios[0].name : 'Undefined'}
              </p>
              <p>Date Aired: {aired.string}</p>
              <p>Status: {status}</p>
              <div>
                Genres:{' '}
                {genres.map((genre) => (
                  <p class='ml-4'>{genre.name}</p>
                ))}
              </div>
            </div>
            <div>
              <p>Score: {score}</p>
              <p>Premiered: {year} </p>
              <p>Duration: {duration}</p>
              <p>Source: {source}</p>
              <p>Airtime: {broadcast.string}</p>
              <p>Episodes: {episodes}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeDesc;

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
    <section class='bg-zinc-100 p-2 xl:w-4/5 md:p-8 dark:bg-neutral-800'>
      <div class='grid md:grid-cols-3 items-center gap-x-8'>
        <img
          src={images.webp.large_image_url}
          alt={englishTitle ? englishTitle : title}
          class='bg-cover w-full'
        />
        <div class='md:col-span-2'>
          <div class='flex justify-between items-center mb-10 flex-wrap'>
            <div class='mt-4'>
              <p class='text-2xl font-bold'>{englishTitle}</p>
              <p class='text-lg'>{title}</p>
              <p>{japaneseTitle}</p>
            </div>
            <div class='mt-4'>
              <p>
                <span class='font-medium'>Rank:</span> {rank}
              </p>
              <p>
                <span class='font-medium'>Popularity:</span> {popularity}
              </p>
            </div>
          </div>

          <p class='mb-10'>{synopsis}</p>
          <div class='flex justify-between flex-wrap'>
            <div>
              <p>
                <span class='font-medium'>Type: </span>
                {type}
              </p>
              <p>
                <span class='font-medium'>Studios:</span>
                {studios.length !== 0 ? studios[0].name : 'Undefined'}
              </p>
              <p>
                <span class='font-medium'>Date Aired:</span> {aired.string}
              </p>
              <p>
                <span class='font-medium'>Status:</span> {status}
              </p>
              <div>
                <span class='font-medium'>Genres:</span>
                {genres.map((genre) => (
                  <p class='ml-4'>{genre.name}</p>
                ))}
              </div>
            </div>
            <div>
              <p>
                <span class='font-medium'>Score:</span> {score}
              </p>
              <p>
                <span class='font-medium'>Premiered:</span> {year}{' '}
              </p>
              <p>
                <span class='font-medium'>Duration:</span> {duration}
              </p>
              <p>
                <span class='font-medium'>Source:</span> {source}
              </p>
              <p>
                <span class='font-medium'>Airtime:</span> {broadcast.string}
              </p>
              <p>
                <span class='font-medium'>Episodes:</span> {episodes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeDesc;

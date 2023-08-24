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
    <section className='bg-zinc-100 p-2 xl:w-4/5 md:p-8 dark:bg-neutral-800'>
      <div className='grid md:grid-cols-3 items-center gap-x-8'>
        <img
          src={images.webp.large_image_url}
          alt={englishTitle ? englishTitle : title}
          className='bg-cover w-full'
        />
        <div className='md:col-span-2'>
          <div className='flex justify-between items-center mb-10 flex-wrap'>
            <div className='mt-4'>
              <p className='text-2xl font-bold'>{englishTitle}</p>
              <p className='text-lg'>{title}</p>
              <p>{japaneseTitle}</p>
            </div>
            <div className='mt-4'>
              <p>
                <span className='font-medium'>Rank:</span> {rank}
              </p>
              <p>
                <span className='font-medium'>Popularity:</span> {popularity}
              </p>
            </div>
          </div>

          <p className='mb-10'>{synopsis}</p>
          <div className='flex justify-between flex-wrap'>
            <div>
              <p>
                <span className='font-medium'>Type: </span>
                {type}
              </p>
              <p>
                <span className='font-medium'>Studios:</span>
                {studios.length !== 0 ? studios[0].name : 'Undefined'}
              </p>
              <p>
                <span className='font-medium'>Date Aired:</span> {aired.string}
              </p>
              <p>
                <span className='font-medium'>Status:</span> {status}
              </p>
              <div>
                <span className='font-medium'>Genres:</span>
                {genres.map((genre) => (
                  <p className='ml-4'>{genre.name}</p>
                ))}
              </div>
            </div>
            <div>
              <p>
                <span className='font-medium'>Score:</span> {score}
              </p>
              <p>
                <span className='font-medium'>Premiered:</span> {year}{' '}
              </p>
              <p>
                <span className='font-medium'>Duration:</span> {duration}
              </p>
              <p>
                <span className='font-medium'>Source:</span> {source}
              </p>
              <p>
                <span className='font-medium'>Airtime:</span> {broadcast.string}
              </p>
              <p>
                <span className='font-medium'>Episodes:</span> {episodes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeDesc;

import React from 'react';

const AnimeCard = ({ anime }) => {
  const { title_english: englishTitle, title, images } = anime;
  return (
    <figure w-225 h-350>
      <img
        src={images.webp.large_image_url}
        alt={englishTitle ? englishTitle : title}
        class='bg-cover w-full h-5/6'
      />
      <figcaption class='font-medium mt-2'>
        {englishTitle ? englishTitle : title}
      </figcaption>
    </figure>
  );
};

export default AnimeCard;

import React, { useState } from 'react';
import {
  genres,
  statuses,
  ratings,
  formats,
  order_by,
} from '../../constants/queryParams';

const Filter = () => {
  const [inputName, setInputName] = useState('');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState('');
  const [format, setFormat] = useState('');
  const [order, setOrder] = useState('');
  return (
    <section class='mt-8 flex gap-2'>
      <input
        type='text'
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder='Search'
        class='py-2 px-4 h-10'
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option key={0} value='' class='hidden' disabled>
          Genre
        </option>
        {genres.map((genre) => (
          <option key={genre.mal_id} value={genre.mal_id} class='text-black'>
            {genre.name}
          </option>
        ))}
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option key={0} value='' class='hidden' disabled>
          Status
        </option>
        {statuses.map((status) => (
          <option key={status.label} value={status.value} class='text-black'>
            {status.label}
          </option>
        ))}
      </select>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option key={0} value='' class='hidden' disabled>
          Rating
        </option>
        {ratings.map((rating) => (
          <option key={rating.label} value={rating.value} class='text-black'>
            {rating.label}
          </option>
        ))}
      </select>
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option key={0} value='' class='hidden' disabled>
          Format
        </option>
        {formats.map((format) => (
          <option key={format.label} value={format.value} class='text-black'>
            {format.label}
          </option>
        ))}
      </select>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option key={0} value='' class='hidden' disabled>
          Order by
        </option>
        {order_by.map((order_byItem) => (
          <option
            key={order_byItem.label}
            value={order_byItem.value}
            class='text-black'
          >
            {order_byItem.label}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Filter;

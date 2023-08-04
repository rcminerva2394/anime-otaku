import React, { useState, useEffect } from 'react';
import {
  genres,
  statuses,
  ratings,
  types,
  order_by,
} from '../../constants/queryParams';
import { useAnimeContext } from '../../contexts/animeContext';
import apiUrls from '../../constants/apiUrls';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const { setUrl, url } = useAnimeContext();
  const navigate = useNavigate();

  const queryParamObj = {
    url: apiUrls.search,
    q: '',
    genres: '',
    status: '',
    rating: '',
    type: '',
    order_by: '',
    paramArr: ['q', 'genres', 'status', 'rating', 'type', 'order_by'],
    getUrl: function () {
      let finalurl = this.url;
      this.paramArr.forEach((param) => {
        if (this[param] !== '') {
          finalurl += `&${param}=${this[param]}`;
        }
      });
      return finalurl;
    },
  };

  const [queryParams, setQueryParams] = useState(queryParamObj);

  useEffect(() => {
    setUrl(queryParams.getUrl());
    console.log(url);
    navigate('/anime-otaku/search-results/1');
  }, [queryParams]);

  return (
    <section class='flex justify-center flex-wrap mt-24 gap-4'>
      <div class='grid grid-cols-3 items-center lg:flex lg:flex-col lg:gap-2 lg:items-start'>
        <label for='search'>Search</label>
        <input
          id='search'
          type='text'
          value={queryParams.q}
          onChange={(e) =>
            setQueryParams((prevState) => {
              return {
                ...prevState,
                q: e.target.value,
              };
            })
          }
          placeholder='Search'
          class='py-2 px-4 h-9 col-span-2 dark:placeholder-neutral-400 dark:bg-neutral-700

'
        />
      </div>

      <div class='grid grid-cols-3 items-center lg:flex lg:flex-col lg:gap-2 lg:items-start'>
        <label for='genres'>Genre</label>
        <select
          id='genres'
          value={queryParams.genres}
          onChange={(e) =>
            setQueryParams((prevState) => {
              return {
                ...prevState,
                genres: e.target.value,
              };
            })
          }
        >
          <option key={0} value=''>
            All
          </option>
          {genres.map((genre) => (
            <option key={genre.mal_id} value={genre.mal_id} class='text-black'>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <div class='grid grid-cols-3 items-center lg:flex lg:flex-col lg:gap-2 lg:items-start'>
        <label for='status'>Status</label>
        <select
          id='status'
          value={queryParams.status}
          onChange={(e) =>
            setQueryParams((prevState) => {
              return {
                ...prevState,
                status: e.target.value,
              };
            })
          }
        >
          <option key={0} value=''>
            All
          </option>
          {statuses.map((status) => (
            <option key={status.label} value={status.value} class='text-black'>
              {status.label}
            </option>
          ))}
        </select>
      </div>

      <div class='grid grid-cols-3 items-center lg:flex lg:flex-col lg:gap-2 lg:items-start'>
        <label for='rating'>Rating</label>
        <select
          id='rating'
          value={queryParams.rating}
          onChange={(e) =>
            setQueryParams((prevState) => {
              return {
                ...prevState,
                rating: e.target.value,
              };
            })
          }
        >
          <option key={0} value='g'>
            Default
          </option>
          {ratings.map((rating) => (
            <option key={rating.label} value={rating.value} class='text-black'>
              {rating.label}
            </option>
          ))}
        </select>
      </div>

      <div class='grid grid-cols-3 items-center lg:flex lg:flex-col lg:gap-2 lg:items-start'>
        <label for='type'>Type</label>
        <select
          id='type'
          value={queryParams.type}
          onChange={(e) =>
            setQueryParams((prevState) => {
              return {
                ...prevState,
                type: e.target.value,
              };
            })
          }
        >
          <option key={0} value=''>
            Default
          </option>
          {types.map((type) => (
            <option key={type.label} value={type.value} class='text-black'>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <div class='grid grid-cols-3 items-center lg:flex lg:flex-col lg:gap-2 lg:items-start'>
        <label for='order_by'>Order by</label>
        <select
          for='order_by'
          value={queryParams.order_by}
          onChange={(e) =>
            setQueryParams((prevState) => {
              return {
                ...prevState,
                order_by: e.target.value,
              };
            })
          }
        >
          <option key={0} value=''>
            Default
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
      </div>
    </section>
  );
};

export default Filter;

import React, { useState, useContext, useEffect } from 'react';
import {
  genres,
  statuses,
  ratings,
  types,
  order_by,
} from '../../constants/queryParams';
import SearchFilterContext from '../../contexts/SearchFilterContext';
import apiUrls from '../../constants/apiUrls';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const { setUrl } = useContext(SearchFilterContext);

  const queryParamObj = {
    url: apiUrls.search,
    q: '',
    genres: '',
    status: '',
    rating: '',
    type: '',
    order_by: '',
    paramArr: ['q', 'genres', 'status', 'rating', 'type', 'order'],
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
  const navigate = useNavigate();

  useEffect(() => {
    setUrl(queryParams.getUrl());
    console.log(queryParams.getUrl());
    navigate('/search-results');
  }, [queryParams, navigate, setUrl]);

  return (
    <section class='mt-24 flex gap-4 justify-center'>
      <div class='flex flex-col gap-3'>
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
          class='py-2 px-4 h-10'
        />
      </div>

      <div class='flex flex-col gap-3'>
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

      <div class='flex flex-col gap-3'>
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

      <div class='flex flex-col gap-3'>
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

      <div class='flex flex-col gap-3'>
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
      <div class='flex flex-col gap-3'>
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

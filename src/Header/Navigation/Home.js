import React from 'react';
import { useEffect, useState } from 'react';
import ThisSeasonAnime from '../../ThisSeason/ThisSeason';

const Home = () => {
  const [thisSeason, setThisSeason] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.jikan.moe/v4/seasons/now?limit=10&page=1';

      try {
        const response = await fetch(url);
        const data = await response.json();
        setThisSeason(data.data);
      } catch (err) {
        setError(err.message);
        setThisSeason([]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section class='my-20 mx-8'>
        <h1 class='uppercase font-bold'>Popular This Season</h1>
        <ul class='grid grid-cols-5 gap-2'>
          {thisSeason.map((anime) => (
            <ThisSeasonAnime anime={anime} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;

import React from 'react';
// import IsFilterContext from '../../../contexts/IsFilterContext';
import useDataFetcher from '../../../customHooks/useDataFetcher';
import TopAnimeItemPrev from './TopAnimeItemPrev';
import { Link } from 'react-router-dom';
import apiUrls from '../../../constants/apiUrls';

const TopAnimePrev = () => {
  const url = apiUrls.top;
  const { loading, data, error } = useDataFetcher(url);
  // const { setIsFiltering } = useContext(IsFilterContext);

  // const isFilteringHandler = () => {
  //   setIsFiltering(true);
  // };

  if (data) {
    const prevData = data.data.slice(0, 10);
    return (
      <section class='my-20 mx-8 bg-stone-100 p-3'>
        <div class='flex justify-between mb-6 items-center'>
          <h2 class='uppercase font-bold text-lg'>Top 100 Anime</h2>
          <Link
            to={'/top-100-anime'}
            state={{ data: data }}
            // onClick={isFilteringHandler}
          >
            <p class='text-sm text-slate-600 hover:text-black'>View All</p>
          </Link>
        </div>
        <ul class='flex gap-6 flex-col'>
          {prevData.map((anime) => (
            <TopAnimeItemPrev anime={anime} key={anime.mal_id} />
          ))}
        </ul>
      </section>
    );
  }

  if (loading) {
    return <p>Still loading</p>;
  }

  if (error) {
    return <p>Sorry!</p>;
  }
};

export default TopAnimePrev;

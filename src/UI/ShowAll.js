import AnimeList from './AnimeList';
import Pagination from './Pagination';

const ShowAll = ({ prevData, title }) => {
  return (
    <>
      <section class='my-24 grid justify-items-center'>
        <div class='xl:w-4/5'>
          <p class='text-xl font-bold mb-12 uppercase'>{title}</p>
          <AnimeList animeList={prevData.data} layout='col5' secTitle={title} />
        </div>
        <Pagination pageInfo={prevData.pagination} />
      </section>
    </>
  );
};

export default ShowAll;

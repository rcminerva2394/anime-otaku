import React from 'react';
import { useLocation } from 'react-router-dom';
import Characters from '../../../UI/Characters';

const AllCharacters = () => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <section class='my-24 grid justify-items-center'>
      <div class='w-4/5'>
        <p class='text-xl font-bold mb-12 uppercase'> Characters</p>
        <Characters data={data} />
      </div>
    </section>
  );
};

export default AllCharacters;

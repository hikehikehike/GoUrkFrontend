import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Categories } from './Categories';
import { CityHeader } from './City.styled';
import { Footer } from './Footer/Footer';

export const City = () => {
  const { city } = useParams();

  return (
    <>
      <div>
        <CityHeader>
          Journey to
          {' '}
          {city}
        </CityHeader>
        <Categories city={city} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

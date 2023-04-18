import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Categories } from './Categories';
import { CityHeader } from './City.styled';
import { Footer } from './Footer/Footer';
import { Container } from '../Container.styled';

export const City = () => {
  const { city } = useParams();

  return (
    <>
      <Container>
        <CityHeader>
          Journey to
          {' '}
          {city}
        </CityHeader>
        <Categories city={city} />
        <Outlet />
      </Container>
      <Footer />

    </>
  );
};

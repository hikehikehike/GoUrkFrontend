import React from 'react';
import { Outlet } from 'react-router';
import { Container } from './Container.styled';
import { NavBar } from './components/componentNavBar/NavBar';

export const SharedLayout = () => (
  <Container>
    <NavBar />
    <div className="main">
      <Outlet />
    </div>
  </Container>
);

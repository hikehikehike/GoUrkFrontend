import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
// import { Container } from './Container.styled';
import { NavBar } from './components/HeaderNavigationComponents/NavBar';

const CommonBackground = styled.div`
background-color: ${props => props.theme.colors.white}
`;

export const SharedLayout = () => (
  <CommonBackground>
    <NavBar />
    <div className="main">
      <Outlet />
    </div>
  </CommonBackground>
);

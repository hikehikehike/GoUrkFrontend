import React from 'react';
import { MainWrapper, ContentWrapper } from './Main.styled';
import { AsideColums } from './AsideColums';
import { MainMap } from './MainMap';
import { NavBar } from '../componentNavBar/NavBar';

export const Main = () => (
  <MainWrapper>
    <AsideColums />
    <ContentWrapper>
      <NavBar />
      <MainMap />
    </ContentWrapper>
  </MainWrapper>
);

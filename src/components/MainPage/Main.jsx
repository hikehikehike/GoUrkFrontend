import React from 'react';
import { MainWrapper, ContentWrapper } from './Main.styled';
import { AsideColums } from './AsideColums';
import { MainMap } from './MainMap';

export const Main = () => (
  <MainWrapper>
    <AsideColums />
    <ContentWrapper>
      <MainMap />
    </ContentWrapper>
  </MainWrapper>
);

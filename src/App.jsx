/* eslint-disable arrow-body-style */
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import { ThemeProvider } from '@emotion/react';
import { theme } from './utils/theme';
import { Container } from './Container.styled';
import { NavBar } from './components/componentNavBar/NavBar';
import { MainMap } from './components/MainMap';
import { City } from './components/City';
import { AccountSet } from './components/AccountSet';
import { Driveway } from './components/CityPages/Driveway';
import { Hotels } from './components/CityPages/Hotels';
import { Restaurants } from './components/CityPages/Restaurants';
import { Entertainment } from './components/CityPages/Entertainment';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar />
        <div className="main">
          <Routes>
            <Route path="/">
              <Route index element={<MainMap />} />
              <Route path=":city" element={<City />} />
              <Route path=":city">
                <Route path="home" element={<Navigate to="/" replace />} />
                <Route path="driveway" element={<Driveway />} />
                <Route path="hotels" element={<Hotels />} />
                <Route path="restaurants" element={<Restaurants />} />
                <Route path="entertainment" element={<Entertainment />} />
              </Route>
            </Route>
            <Route path="/account" element={<AccountSet />} />
            <Route path="*" element={<h2>Sorry</h2>} />
          </Routes>
        </div>
      </Container>
    </ThemeProvider>
  );
};

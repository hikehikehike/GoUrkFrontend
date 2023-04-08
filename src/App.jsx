/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { Container } from './Container.styled';
import { NavBar } from './components/componentNavBar/NavBar';
import { Main } from './components/MainPage/Main';
import { City } from './components/City';
import { AccountSet } from './components/AccountSet';
import { HotelsSection } from './components/componentCitySections/HotelsSection';
import { RestaurantsSection } from './components/componentCitySections/RestaurantsSection';
import { EntertainmentSection } from './components/componentCitySections/EntertainmentSection';
import { DrivewaySection } from './components/componentCitySections/DrivewaySection';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* <NavBar /> */}
        <div className="main">
          <Routes>
            <Route path="/">
              <Route path="/" element={<Main />} />
              <Route path="/:city">
                <Route index element={<City />} />
                <Route path="home" element={<City />} />
                <Route path="driveway" element={<DrivewaySection />} />
                <Route path="hotels" element={<HotelsSection />} />
                <Route path="restaurants" element={<RestaurantsSection />} />
                <Route path="entertainment" element={<EntertainmentSection />} />
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

/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { Main } from './components/MainPage/Main';
import { City } from './components/City';
import { AccountSet } from './components/AccountSet';
import { HotelsSection } from './components/componentCitySections/HotelPage/HotelsSection';
import { RestaurantsSection } from './components/componentCitySections/RestaurantsSection';
import { EntertainmentSection } from './components/componentCitySections/EntertainmentSection';
import { DrivewaySection } from './components/componentCitySections/DrivewayPage/DrivewaySection';
import { SharedLayout } from './Layout';
import { HomeSection } from './components/componentCitySections/HomePage/HomeSection';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="/:city" element={<City />}>
            <Route index element={<HomeSection />} />
            <Route path="home" element={<HomeSection />} />
            <Route path="driveway" element={<DrivewaySection />} />
            <Route path="hotels" element={<HotelsSection />} />
            <Route path="restaurants" element={<RestaurantsSection />} />
            <Route path="entertainment" element={<EntertainmentSection />} />
          </Route>
          <Route path="/account" element={<AccountSet />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

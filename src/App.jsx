/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { ThemeProvider } from 'styled-components';
// import express from 'express';
// import jwt from 'jsonwebtoken';
// import registerRouter from 'express-register-routes';
import { theme } from './utils/theme';
import { Main } from './components/MainPage/Main';
import { City } from './components/CityPage/City';
import { HotelsSection } from './components/componentCitySections/HotelPage/HotelsSection';
import { RestaurantsSection } from './components/componentCitySections/RestaurantsPage/RestaurantsSection';
import { EntertainmentSection } from './components/componentCitySections/EntertainmentSection';
import { DrivewaySection } from './components/componentCitySections/DrivewayPage/DrivewaySection';
import { SharedLayout } from './Layout';
import { HomeSection } from './components/componentCitySections/HomePage/HomeSection';
import { Account } from './components/HeaderPages/AccountPage/Account';
import { EditProfileForm } from './components/Forms/EditProfileForm';
import { Loader } from './components/Loader/Loader';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path="/:city" element={<City />}>
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<HomeSection />} />
              <Route path="route" element={<DrivewaySection />} />
              <Route path="hotels" element={<HotelsSection />} />
              <Route path="restaurants" element={<RestaurantsSection />} />
              <Route path="entertainment" element={<EntertainmentSection />} />
            </Route>
            <Route path="/account" element={<Account />}>
              <Route index element={<Navigate to="editprofile" replace />} />
              <Route path="editprofile" element={<EditProfileForm />} />
              <Route path="reviews" element={<>hello</>} />
              <Route path="logout" element={<>hello</>} />
            </Route>
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

// App.use(express.json());
// App.use('/api/register', registerRouter);

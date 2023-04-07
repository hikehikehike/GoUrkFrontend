/* eslint-disable padding-line-between-statements */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { NavCategoryBox } from './componentNavCity/NavCategory.styled';
import { NavCategory } from './componentNavCity/NavCategory';
import { HomeNav } from './CityPagesNav/HomeNav';
import { DrivewayNav } from './CityPagesNav/DrivewayNav';
import { HotelsNav } from './CityPagesNav/HotelsNav';
import { RestaurantsNav } from './CityPagesNav/RestaurantsNav';
import { EntertainmentNav } from './CityPagesNav/EntertainmentNav';

export const Categories = ({ city }) => {
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;
  return (
    <nav className="nav__category">
      <NavCategoryBox className="navbar__category-box">
        <NavCategory
          to={`/${selectedCity}/home`}
          element={<HomeNav />}
        >
          Home
        </NavCategory>
        <NavCategory
          to={`/${selectedCity}/driveway`}
          element={<DrivewayNav />}
        >
          Driveaway
        </NavCategory>
        <NavCategory
          to={`/${selectedCity}/hotels`}
          element={<HotelsNav />}
        >
          Hotels
        </NavCategory>
        <NavCategory
          to={`/${selectedCity}/restaurants`}
          element={<RestaurantsNav />}
        >
          Restaurants
        </NavCategory>
        <NavCategory
          to={`/${selectedCity}/entertainment`}
          element={<EntertainmentNav />}
        >
          Entertainment
        </NavCategory>
      </NavCategoryBox>
    </nav>
  );
};

Categories.propTypes = {
  city: PropTypes.string,
};

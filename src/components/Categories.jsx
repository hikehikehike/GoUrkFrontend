import React from 'react';
// import { useParams } from 'react-router-dom';
// import classNames from 'classnames';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import PropTypes from 'prop-types';
import { NavCategoryBox } from './componentNavCity/NavCategory.styled';
import { NavCategory } from './componentNavCity/NavCategory';
// import { City } from './City';
import { Driveway } from './CityPages/Driveway';
import { Hotels } from './CityPages/Hotels';
import { Restaurants } from './CityPages/Restaurants';
import { Entertainment } from './CityPages/Entertainment';

export const Categories = ({ city }) => (
  <nav className="nav__category">
    <NavCategoryBox className="navbar__category-box">
      <NavCategory
        to={`../${city}/home`}
      >
        Home
      </NavCategory>
      <NavCategory
        to={`../${city}/driveway`}
        element={<Driveway />}
      >
        Driveaway
      </NavCategory>
      <NavCategory
        to={`../${city}/hotels`}
        element={<Hotels />}
      >
        Hotels
      </NavCategory>
      <NavCategory
        to={`../${city}/restaurants`}
        element={<Restaurants />}
      >
        Restaurants
      </NavCategory>
      <NavCategory
        to={`../${city}/entertainments`}
        element={<Entertainment />}
      >
        Entertainment
      </NavCategory>
    </NavCategoryBox>
  </nav>
);

Categories.propTypes = {
  // eslint-disable-next-line react/require-default-props
  city: PropTypes.string,
};

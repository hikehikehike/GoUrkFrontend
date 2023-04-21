/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { string } from 'yup';
import styled from 'styled-components';
import { RestaurantItem } from './RestaurantItem';

export const RestaurantListStyled = styled.div`
margin-top: 26px;
`;

export const RestaurantList = ({ restaurants }) => (
  <RestaurantListStyled>
    {/* {restaurants.map(restaurant => (
      <RestaurantItem
        key={restaurant.id}
        name={restaurant.name}
        rating={restaurant.rating}
        price={restaurant.price}
        image={restaurant.image}
      />
    ))} */}
    <RestaurantItem
      key="1"
      name="Ukrainski Stravy"
      rating="5.0"
      price="$$ - $$$"
      image="https://static-new.lhw.com/HotelImages/Final/LW3601/lw3601_28070673_720x450.jpg"
    />
  </RestaurantListStyled>
);

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(string),
};

RestaurantList.defaultProps = {
  restaurants: [],
};

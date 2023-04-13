/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { string } from 'yup';
import styled from 'styled-components';
import { HotelItem } from './HotelItem';

export const HotelListStyled = styled.div`
margin-top: 26px;
`;

export const HotelList = ({ hotels }) => (
  <HotelListStyled>
    {/* {hotels.map(hotel => (
      <HotelItem
        key={hotel.id}
        name={hotel.name}
        location={hotel.location}
        rating={hotel.rating}
        image={hotel.image}
        price={hotel.price}
      />
    ))} */}
    <HotelItem
      key="1"
      name="'Khreschatyk City Hotel'"
      location="'Great location '"
      rating=""
      image="https://static-new.lhw.com/HotelImages/Final/LW3601/lw3601_28070673_720x450.jpg"
      price=""
    />
  </HotelListStyled>
);

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(string).isRequired,
};

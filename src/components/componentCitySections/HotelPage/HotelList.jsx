/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HotelItem } from './HotelItem';

export const HotelListStyled = styled.div`
margin-top: 26px;
`;

export const HotelList = ({ hotels }) => (
  <HotelListStyled>
    {hotels.map((hotel) => {
      const { name,
        image,
        description,
        rating,
        price,
        location,
        view_deal: deal } = hotel;

      return (
        <HotelItem
          key={name}
          name={name}
          description={description}
          location={location}
          rating={rating}
          image={image}
          price={price}
          deal={deal}
        />
      );
    })}
  </HotelListStyled>
);

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape),
};

HotelList.defaultProps = {
  hotels: [
    {
      name: 'Khreschatyk City Hotel',
      location: 'Great location',
      rating: '9.2',
      image: 'https://static-new.lhw.com/HotelImages/Final/LW3601/lw3601_28070673_720x450.jpg',
      price: '3,678',
      description: 'Located on the main Kiev street, between the European Square and the Independence Square in Kiev,Khreschatyk Hotel offers rooms with free WiFi and satellite TV.Guests are offered free access to the gym... ',
      deal: 'https://www.booking.com/',
    },
  ],
};

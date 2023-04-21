/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { BtnStyled } from '../../../utils/buttonStyled';
import { HotelBox, HotelDescription, HotelDetailsBox, HotelImage, HotelName, HotelPriceBox, LocationSvg, StarsSvg, TextSvgBox, WifiSvg } from './HotelItem.styled';
import { MoreLink } from '../RestaurantsPage/RestaurantItem.styled';

export const HotelItem = ({
  name = 'Khreschatyk City Hotel',
  location = 'Great location ',
  rating = '5.0',
  image = 'https://static-new.lhw.com/HotelImages/Final/LW3601/lw3601_28070673_720x450.jpg',
  price = '3,678',
  onClick,
}) => (
  <HotelBox>
    <HotelImage src={image} alt={name} />
    <HotelDetailsBox>
      <HotelName>{name}</HotelName>
      <TextSvgBox>
        {rating}
        {' '}
        <StarsSvg />
        {' '}
        stars
      </TextSvgBox>
      <HotelDescription>
        Located on the main Kiev street, between the
        European Square and the Independence Square in Kiev,
        Khreschatyk Hotel offers rooms with free WiFi and satellite
        TV.Guests are offered free access to the gym...
        <MoreLink to="https://www.tripadvisor.com/Restaurants-g294474-Kyiv.html">MORE</MoreLink>
      </HotelDescription>
      <TextSvgBox>
        <LocationSvg />
        {location}
      </TextSvgBox>
      <TextSvgBox>
        <WifiSvg />
        Free wifi
      </TextSvgBox>
    </HotelDetailsBox>
    <HotelPriceBox>
      <h2>Booking.com</h2>
      <p>
        USD
        {price}
        {' '}
        per night
      </p>
      <BtnStyled onClick={onClick}>View Deal</BtnStyled>
    </HotelPriceBox>
  </HotelBox>
);

HotelItem.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

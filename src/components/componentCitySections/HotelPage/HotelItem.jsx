/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Currency,
  HotelBox, HotelDescription, HotelDetailsBox,
  HotelImage, HotelName, HotelPriceBox,
  ImageWrapper,
  LocationLink,
  LocationSvg, Price, PriceWrapper, StarsSvg, TextSvgBox, ViewDealLink, WifiSvg,
} from './HotelItem.styled';
import { MoreLink } from '../RestaurantsPage/RestaurantItem.styled';

export const HotelItem = ({
  name,
  location,
  rating,
  image,
  price,
  deal,
  description,
}) => (
  <HotelBox>
    <ImageWrapper>
      <HotelImage src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt={name} />
    </ImageWrapper>
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
        {description}
        ...
        <MoreLink to={deal}>MORE</MoreLink>
      </HotelDescription>
      <TextSvgBox>
        <LocationSvg />
        <LocationLink to={location} target="_blank">View location</LocationLink>
      </TextSvgBox>
      <TextSvgBox>
        <WifiSvg />
        Free wifi
      </TextSvgBox>
    </HotelDetailsBox>
    <HotelPriceBox>
      <h2>Booking.com</h2>
      <PriceWrapper>
        <Currency>UAH</Currency>
        <Price>{price}</Price>
      </PriceWrapper>
      <ViewDealLink to={deal} target="_blank">View Deal</ViewDealLink>
    </HotelPriceBox>
  </HotelBox>
);

HotelItem.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  deal: PropTypes.string,
};

HotelItem.defaultProps = {
  name: 'Khreschatyk City Hotel',
  location: 'Great location',
  rating: '9.2',
  image: 'https://static-new.lhw.com/HotelImages/Final/LW3601/lw3601_28070673_720x450.jpg',
  price: '3,678',
  description: 'Located on the main Kiev street, between the European Square and the Independence Square in Kiev,Khreschatyk Hotel offers rooms with free WiFi and satellite TV.Guests are offered free access to the gym... ',
  deal: 'https://www.booking.com/',
};

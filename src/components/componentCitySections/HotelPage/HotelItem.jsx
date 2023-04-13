/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Stars } from '../../Icons/Stars.svg';
import { ReactComponent as Wifi } from '../../Icons/Wifi.svg';
import { ReactComponent as Location } from '../../Icons/Location.svg';
import { BtnStyled } from '../../../utils/buttonStyled';

const HotelBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  background-color: #F5FAFF;
`;

const HotelImage = styled.div`
  width: 331px;
  height: 331px;
  margin-right: 20px;
`;

const HotelDetailsBox = styled.div`
  width: 70%;
  text-align: left;
`;

const HotelPriceBox = styled.div`
  display: flex;
  align-items: center;
flex-direction: column;
justify-content: space-evenly;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  margin: 64px 72px 64px 0px;
`;

const TextSvgBox = styled.div`
font-size: 16px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 24px;
`;

export const HotelName = styled.h2`
font-size: 32px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 12px;
margin-top: 26px;
text-align: left;
`;

export const HotelDescription = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
margin-bottom: 24px;
margin-left: 24px;
`;

export const WifiSvg = styled(Wifi)`
margin-right: 16px;
`;
export const LocationSvg = styled(Location)`
margin-right: 16px;
`;

export const StarsSvg = styled(Stars)`
margin-left: 8px;
`;

export const HotelItem = ({
  name = 'Khreschatyk City Hotel',
  location = 'Great location ',
  rating = 5.0,
  image = 'https://static-new.lhw.com/HotelImages/Final/LW3601/lw3601_28070673_720x450.jpg',
  price = '3,678',
  onClick,
}) => (
  <HotelBox>
    <div>
      <HotelImage src={image} alt={name} />
    </div>
    <HotelDetailsBox>
      <HotelName>{name}</HotelName>
      <TextSvgBox>
        {rating}
        {' '}
        <StarsSvg />
        {' '}
        stars
      </TextSvgBox>
      <HotelDescription>Description</HotelDescription>
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
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

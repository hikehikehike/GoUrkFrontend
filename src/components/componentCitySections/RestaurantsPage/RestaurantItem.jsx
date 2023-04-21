/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { BtnStyled } from '../../../utils/buttonStyled';
import { CuisinesItem, CuisinesList, CuisinesTitle, MoreLink, RestaurantBox, RestaurantCuisinesBox, RestaurantDescription, RestaurantDetailsBox, RestaurantImage, RestaurantName, ShortDescItem, ShortDescList, SpanPoint, StarsSvg } from './RestaurantItem.styled';

export const RestaurantItem = ({
  name = 'Ukrainski Stravy',
  rating = '5.0',
  price = '$$ - $$$',
  image = 'https://static-new.lhw.com/HotelImages/Final/LW3601/lw3601_28070673_720x450.jpg',
  onClick,
}) => (
  <RestaurantBox>
    <div>
      <RestaurantImage src={image} alt={name} />
    </div>
    <RestaurantDetailsBox>
      <RestaurantName>{name}</RestaurantName>
      <ShortDescList>
        <ShortDescItem>
          {rating}
          {' '}
          <StarsSvg />
        </ShortDescItem>
        <ShortDescItem><SpanPoint /></ShortDescItem>
        <ShortDescItem>Open Now</ShortDescItem>
        <ShortDescItem><SpanPoint /></ShortDescItem>
        <ShortDescItem>{price}</ShortDescItem>
      </ShortDescList>
      <RestaurantDescription>
        The restaurant is known for its cozy atmosphere and welcoming
        staff, who provide excellent service to their guests.
        The menu features a variety of classic Ukrainian dishes,
        such as borscht, varenyky, and kasha, as well as other
        regional specialties. The restaurant also offers a selection
        of local wines....
        <MoreLink to="https://www.tripadvisor.com/Restaurants-g294474-Kyiv.html">MORE</MoreLink>
      </RestaurantDescription>
      <RestaurantCuisinesBox>
        <div>
          <CuisinesTitle>Cuisines</CuisinesTitle>
          <CuisinesList>
            <CuisinesItem>Ukrainian</CuisinesItem>
            <CuisinesItem>Eastern European</CuisinesItem>
            <CuisinesItem>European</CuisinesItem>
          </CuisinesList>
        </div>
        <BtnStyled onClick={onClick}>Open in Maps</BtnStyled>
      </RestaurantCuisinesBox>
    </RestaurantDetailsBox>
  </RestaurantBox>
);

RestaurantItem.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

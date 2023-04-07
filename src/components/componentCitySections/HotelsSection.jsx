/* eslint-disable react/prop-types */
import React from 'react';
import { Categories } from '../Categories';

export const HotelsSection = ({ city }) => (
  <div>
    Hotels
    <Categories city={city} />
  </div>
);

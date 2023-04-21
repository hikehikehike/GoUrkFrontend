import React from 'react';
import { RestaurantsFilter } from './RestaurantsFilter';
import { RestaurantList } from './RestaurantsList';

export const RestaurantsSection = () => (
  <div>
    <div>
      <RestaurantsFilter />
    </div>
    <div>
      <div><RestaurantList /></div>
    </div>
  </div>
);

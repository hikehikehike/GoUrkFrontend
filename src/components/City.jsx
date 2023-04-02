/* eslint-disable max-len */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Categories } from './Categories';
// import { NavCategoryBox } from './componentNavCity/NavCategory.styled';
// import { NavCategory } from './componentNavCity/NavCategory';
// import { Driveway } from './CityPages/Driveway';
// import { Hotels } from './CityPages/Hotels';
// import { Restaurants } from './CityPages/Restaurants';
// import { Entertainment } from './CityPages/Entertainment';

export const City = () => {
  const { city } = useParams();

  return (
    <div>
      <img src="https://media.istockphoto.com/id/1190993364/pl/zdj%C4%99cie/pomara%C5%84czowy-zach%C3%B3d-s%C5%82o%C5%84ca-i-chmura-nad-pejza%C5%BCem-kijowskim-ukraina-europa.jpg?s=1024x1024&w=is&k=20&c=72FOE9AhHhMtNwhmQye0co6awuYfjd0WnU7NXZQ8Mqo=" alt="" />
      <h1>{city}</h1>
      <p>Description from backend</p>
      <Categories city={city} />
      {/* <nav className="nav__category">
        <NavCategoryBox className="navbar__category-box"> */}
      {/* <NavCategory to="../" element={<City />}>
        Home
 </NavCategory> }
          {/* <NavCategory to={`../${city}/driveaway`} element={<Driveway />}>
            Driveaway
          </NavCategory>
          <NavCategory to="../hotels" element={<Hotels />}>
            Hotels
          </NavCategory>
          <NavCategory to="../restoraunts" element={<Restaurants />}>
            Restaurants
          </NavCategory>
          <NavCategory to="../entertainment" element={<Entertainment />}>
            Entertainment
          </NavCategory>
        </NavCategoryBox> */}
      {/* </nav> */}
    </div>
  );
};

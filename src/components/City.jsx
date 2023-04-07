/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Categories } from './Categories';

export const City = () => {
  const { city } = useParams();

  return (
    <div>
      <img src="https://media.istockphoto.com/id/1190993364/pl/zdj%C4%99cie/pomara%C5%84czowy-zach%C3%B3d-s%C5%82o%C5%84ca-i-chmura-nad-pejza%C5%BCem-kijowskim-ukraina-europa.jpg?s=1024x1024&w=is&k=20&c=72FOE9AhHhMtNwhmQye0co6awuYfjd0WnU7NXZQ8Mqo=" alt="" />
      <h1>{city}</h1>
      <p>Description from backend</p>
      <Categories city={city} />
    </div>
  );
};

// const getCategory = (currentCategory) => {
//   setCategory(currentCategory);
// };
// const getSection = () => {
//   switch (section) {
//     case 'home':
//       setCategory('home');
//       break;
//     case 'driveway':
//       setCategory('driveway');
//       break;
//     case 'hotels':
//       setCategory('hotels');
//       break;
//     case 'restaurants':
//       setCategory('restaurants');
//       break;
//     case 'entertainment':
//       setCategory('entertainment');
//       break;
//     default:
//       setCategory('home');
//   }
// };

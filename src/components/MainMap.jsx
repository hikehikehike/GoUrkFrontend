/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';

const cities = ['Івано-Франківськ',
  'Тернопіль',
  'Львів',
  'Житомир',
  'Вінниця',
  'Київ',
  'Чернігів',
  'Суми',
  'Полтава',
  'Черкаси',
  'Кіровоград',
  'Запоріжжя',
  'Одеса',
  'Миколаїв',
  'Херсон',
  'Харків',
  'Дніпропетровськ'];

export const MainMap = () => {
  const { selectedCity } = useParams();

  //   const [regions, setRegions] = useState(null);

  //   useEffect(() => {
  //     setRegions();
  //   }, []);

  return (
    <div>
      <h1>Incrediable land of brave people</h1>
      <p>Chose the city you want to visit</p>
      {cities.map(city => (
        <li
          key={city}
          className={classNames({ 'is-active': city === selectedCity })}
        >
          <Link
            to={`../${city}`}
            replace
          >
            { city }
            <img src="" alt="" />
          </Link>
        </li>
      ))}
    </div>
  );
};

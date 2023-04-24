/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { HotelList } from './HotelList';
import { InputSection } from './InputSection';
import { Error } from '../../Loader/Error.jsx/Error';
import { Loader } from '../../Loader/Loader';

export const HotelsSection = ({ city }) => {
  const [hotelData, setHotelData] = useState(null);
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadHotelsInfo = async() => {
      const cityInLowerCase = selectedCity.toLowerCase();

      try {
        setIsError(false);
        console.log('fetching');
        const cityInfoFromServer = await axios.get(`https://goukraine.onrender.com/api/city/${cityInLowerCase}/hotels`);

        if (cityInfoFromServer.data) {
          setHotelData(cityInfoFromServer.data.hotels);
          console.log(cityInfoFromServer.data.hotels);
        }
      } catch {
        console.log('serverdata error', console.error());
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    };

    loadHotelsInfo();

    return () => {
      setHotelData(null);
    };
  }, [selectedCity]);

  return (
    <>
      {isError && <Error />}
      {!hotelData && isLoading && <Loader />}
      {hotelData && (
      <div>
        <InputSection />
        <HotelList hotels={hotelData} />
      </div>
      )}
    </>
  );
};

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Notiflix from 'notiflix';
import { HomeCarousel } from './HomeCarousel';
import { HomeReview } from './HomeReview';
import { LeaveReviewBtn } from './LeaveReviewBtn';
import { HomeTitle, HomeDescription, ReviewSection } from './HomeSection.styled';

export const HomeSection = ({ city }) => {
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const BASE_URL = 'https://goukraine.onrender.com/api/city';

    axios.defaults.baseURL = BASE_URL;
    const loadCityInfo = async() => {
      const cityInLowerCase = selectedCity.toLowerCase();

      try {
        setIsError(false);
        setIsLoading(true);
        console.log('serverdata fetch');

        const cityInfoFromServer = await axios.get(cityInLowerCase, {
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET',
          },
        });

        if (cityInfoFromServer) {
          console.log(cityInfoFromServer);
        }
      } catch {
        console.log('serverdata error', console.error());
        setIsError(true);
        Notiflix.Notify.failure('Can`t get city information.Please try again');
      } finally {
        setIsLoading(false);
      }
    };

    loadCityInfo();
  // return () => {
  //   second
  // }
  }, [city]);

  return (
    // isLoading
    //   ? Notiflix.Loading.standard('Loading...')
    //   :
    (
      <div>
        <HomeTitle>
          The city with golden domes, Kyiv, my heart belongs to you.
        </HomeTitle>
        <HomeDescription>
          Get ready for the adventure of a lifetime,
          because Kyiv is the place to be! The capital of Ukraine is a vibrant and thrilling destination
          that has something for everyone. With a history spanning over a thousand years,
          this city is bursting with energy and excitement. From the awe-inspiring St.
          Sophias Cathedral to the underground catacombs of Kyiv-Pechersk Lavra,
          every corner of Kyiv is full of surprises and wonder. And when the sun goes down,
          the city truly comes to life with a nightlife scene that will blow your mind.
          So get ready to eat, drink, dance, and explore your heart out - Kyiv is waiting for you!
        </HomeDescription>
        <HomeCarousel />
        <ReviewSection>
          <HomeReview />
          <LeaveReviewBtn />
        </ReviewSection>
      </div>
    )
  );
};

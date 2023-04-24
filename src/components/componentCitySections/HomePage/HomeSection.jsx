/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { HomeCarousel } from './HomeCarousel';
import { HomeReview } from './HomeReview';
import { LeaveReviewBtn } from './LeaveReviewBtn';
import { HomeTitle, HomeDescription, ReviewSection, ReviewSectionTextWrapper, StyledLink } from './HomeSection.styled';
import { Loader } from '../../Loader/Loader';
import { Error } from '../../Loader/Error.jsx/Error';

export const HomeSection = ({ city }) => {
  const [cityData, setCityData] = useState(null);
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadCityInfo = async() => {
      const cityInLowerCase = selectedCity.toLowerCase();

      try {
        setIsError(false);
        console.log('fetching');
        const cityInfoFromServer = await axios.get(`https://goukraine.onrender.com/api/city/${cityInLowerCase}`);

        if (cityInfoFromServer.data) {
          setCityData(cityInfoFromServer.data);
        }
      } catch {
        console.log('serverdata error', console.error());
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    };

    loadCityInfo();

    return () => {
      setCityData(null);
    };
  }, [selectedCity]);

  return (
    <>
      {isError && <Error />}
      {!cityData && isLoading && <Loader />}
      {cityData && (
      <div>
        <HomeTitle>
          {cityData.song_line}
        </HomeTitle>
        <HomeDescription>
          {cityData.description}
        </HomeDescription>
        <HomeCarousel images={cityData.image} />
        <ReviewSection>
          <ReviewSectionTextWrapper>
            <p>
              Your  impressions of
              {city}
            </p>
            <StyledLink
              to={`https://www.google.com/search?q=${selectedCity}+ukraine+reviews&oq=${selectedCity}+ukraine+reviews`}
              target="_blank"
            >
              View more
            </StyledLink>
          </ReviewSectionTextWrapper>
          <HomeReview reviews={cityData.comment} />
          <LeaveReviewBtn />
        </ReviewSection>
      </div>
      )}
    </>
  );
};

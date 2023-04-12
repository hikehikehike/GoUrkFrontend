/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { HomeCarousel } from './HomeCarousel';
import { HomeReview } from './HomeReview';
import { LeaveReviewBtn } from './LeaveReviewBtn';

export const HomeTitle = styled.h2`
font-family: MacPaw Fixel;
font-size: 48px;
font-weight: 600;
line-height: 66px;
letter-spacing: 0em;
text-align: right;
margin-right: 0px;
margin-left: 355px;
margin-bottom: 56px;
`;

export const HomeDescription = styled.p`
font-family: MacPaw Fixel;
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
margin-right: 355px;
margin-bottom: 108px;
width: 60%;
`;

export const ReviewSection = styled.div`
text-align: center;
`;

export const HomeSection = () => (
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
);

/* eslint-disable max-len */
import React from 'react';
import { HomeCarousel } from './HomeCarousel';
import { HomeReview } from './HomeReview';
import { LeaveReviewBtn } from './LeaveReviewBtn';
import { HomeTitle, HomeDescription, ReviewSection } from './HomeSection.styled';

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

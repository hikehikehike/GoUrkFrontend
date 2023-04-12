/* eslint-disable max-len */
import React from 'react';
import { ReactComponent as Stars } from '../../Icons/Stars.svg';
import {
  ProfileAvatar, ProfileLocation, ProfileName,
  ReadMoreLink, ReviewBox, ReviewContainer,
  ReviewDescription, ReviewScope, ReviewTitle,
} from './HomeReview.styled';

export const HomeReview = () => (
  <ReviewContainer>
    <ReviewBox>
      <ProfileAvatar src="https://qph.cf2.quoracdn.net/main-qimg-9040998f65757443d325083efed8d70c-lq" alt="" />
      <ProfileName>John</ProfileName>
      <ProfileLocation>Virginia, USA</ProfileLocation>
      <ReviewTitle>Kyiv - the home of my soul</ReviewTitle>
      <ReviewScope>
        <span>
          5.0
          {' '}
          <Stars />
        </span>
      </ReviewScope>
      <ReviewDescription>
        Kyiv is a fantastic destination that I would highly recommend to anyone.
        Its stunning architecture, rich history, bustling nightlife,
        and delicious cuisine make for an unforgettable experience...
      </ReviewDescription>
      <ReadMoreLink to="https://greentourua.com/top-10-reasons-to-visit-ukraine/">
        Read More...
      </ReadMoreLink>
    </ReviewBox>
    <ReviewBox>
      <ProfileAvatar src="https://qph.cf2.quoracdn.net/main-qimg-9040998f65757443d325083efed8d70c-lq" alt="" />
      <p>John</p>
      <p>Virginia, USA</p>
      <ReviewTitle>Kyiv - the home of my soul</ReviewTitle>
      <div>
        <p>5.0</p>
        <Stars />
      </div>
      <ReviewDescription>
        Kyiv is a fantastic destination that I would highly recommend to anyone.
        Its stunning architecture, rich history, bustling nightlife,
        and delicious cuisine make for an unforgettable experience...
      </ReviewDescription>
      <ReadMoreLink to="https://greentourua.com/top-10-reasons-to-visit-ukraine/">
        Read More...
      </ReadMoreLink>
    </ReviewBox>
  </ReviewContainer>
);

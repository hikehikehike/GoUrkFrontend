/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Stars } from '../../Icons/Stars.svg';
import {
  ProfileAvatar, ProfileLocation, ProfileName,
  ReadMore, ReviewBox, ReviewContainer,
  ReviewDescription, ReviewScope, ReviewTitle,
} from './HomeReview.styled';

function cutText(text) {
  if (text.length <= 109) {
    return text;
  }

  const truncated = text.slice(0, 120);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace === -1) {
    return `${truncated}`;
  }

  return `${truncated.slice(0, lastSpace)}`;
}

export const HomeReview = ({ reviews }) => {
  const [selectedComment, setSelectedComment] = useState('');
  const reviewsToRender = reviews.length < 2 ? HomeReview.defaultProps.reviews : reviews;

  return (
    <ReviewContainer>
      {reviewsToRender.map((review) => {
        const { header,
          id,
          profile_photo: avatar,
          rating,
          text,
          user,
          location = 'Texas, USA' } = review;

        return (
          <ReviewBox key={id}>
            <ProfileAvatar src={avatar} alt="" />
            <ProfileName>{user}</ProfileName>
            <ProfileLocation>{location}</ProfileLocation>
            <ReviewTitle>{header}</ReviewTitle>
            <ReviewScope>
              <span>
                {rating}
                {' '}
                <Stars />
              </span>
            </ReviewScope>
            <ReviewDescription>
              {cutText(text)}
              {selectedComment === id ? text : '...'}
            </ReviewDescription>
            {(selectedComment !== id) && (
            <ReadMore
              id={id}
              onClick={(e) => {
                if (+e.target.id === +id) {
                  setSelectedComment(id);
                }
              }}
            >
              Read More...
            </ReadMore>
            )}
          </ReviewBox>
        );
      })}
    </ReviewContainer>
  );
};

HomeReview.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape),
};

const defaultReviews = [
  {
    header: ` The home of my soul`,
    id: 1111,
    profile_photo: 'https://i.pinimg.com/originals/f9/a3/6e/f9a36ee6f4469602253a72f64dae60fe.jpg',
    rating: 5,
    text: `Is a fantastic destination that I would highly recommend to anyone.
        Its stunning architecture, rich history, bustling nightlife,
        and delicious cuisine make for an unforgettable experience.`,
    user: 'John',
    location: 'California, USA',
  },
  {
    header: ` In I felt at home from the moment I arrived.`,
    id: 1112,
    profile_photo: 'https://images.saymedia-content.com/.image/t_share/MTc2MjY1NDMzOTM3MTU5MzQx/square-face-women-celebrities.jpg',
    rating: 5,
    text: `The city itself is a true gem, with stunning architecture and a rich cultural history. 
    The vibrant colors of the buildings and the intricate designs of the 
    cathedrals left me in awe.It was amazing to see how the city had preserved its heritage.`,
    user: 'Olivia',
    location: 'Texas, USA',
  },
];

HomeReview.defaultProps = {
  reviews: defaultReviews,
};

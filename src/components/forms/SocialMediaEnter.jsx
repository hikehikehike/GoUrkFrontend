import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './SocialMediaEnter.styled';

const buttons = [
  {
    name: 'GOOGLE',
    link: 'https://accounts.google.com',
  },
  {
    name: 'FACEBOOK',
    link: 'https://www.facebook.com',
  },
  {
    name: 'TWITTER',
    link: ' https://twitter.com/i/flow/login',
  },
];

export const SocialMediaEnter = () => (
  <ButtonContainer>
    {buttons.map(button => (
      <button type="button" key={button.name}>
        <Link to={button.link}>
          {button.name}
        </Link>
      </button>
    ))}

  </ButtonContainer>
);

import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer, ButtonMedia } from './SocialMediaEnter.styled';
import { ReactComponent as Twitter } from '../Icons/twitter.svg';
import { ReactComponent as Google } from '../Icons/google.svg';
import { ReactComponent as Facebook } from '../Icons/facebook.svg';

const buttons = [
  {
    name: Facebook,
    link: ' https://twitter.com/i/flow/login',
  },
  {
    name: Twitter,
    link: 'https://accounts.google.com',
  },
  {
    name: Google,
    link: 'https://www.facebook.com',
  },
];

export const SocialMediaEnter = () => (
  <ButtonContainer>
    {buttons.map((button) => {
      const SvgComponent = button.name;

      return (
        <ButtonMedia type="button" key={button.link}>
          <Link to={button.link}>
            <SvgComponent />
          </Link>
        </ButtonMedia>
      );
    })}

  </ButtonContainer>
);

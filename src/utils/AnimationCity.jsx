/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import UkraineBird from '../components/Icons/UkraineBird.gif';

const Frame = styled.iframe`
width: 1200px;
height: 600px;
border: white;
margin-left: 100px;
`;

const FrameWrapper = styled.div`
background-color: #a1d0f0;
width: 1400px;
font-size: 32px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-top: 30px;
margin-bottom: 30px;
`;

export const AnimationCity = () => {
  return (
    <FrameWrapper>
      Page in progress...
      <Frame
        title="Parallax SVG Interactive Landscape"
        src={UkraineBird}
        loading="lazy"
        allowTransparency="true"
        allowfullscreen="true"
      />
    </FrameWrapper>
  );
};

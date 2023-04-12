import React from 'react';
import styled from 'styled-components';

const LeaveReviewBtnStyled = styled.button`
width: 213px;
height: 56px;
background-color: ${props => props.theme.colors.blue};
font-size:16px;
font-weight:600;
line-height: 22.08px;
color: ${props => props.theme.colors.white};
border:none;
margin-bottom: 57px;
`;

export const LeaveReviewBtn = () => (
  <LeaveReviewBtnStyled type="button">
    Leave a review
  </LeaveReviewBtnStyled>
);

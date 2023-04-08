import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Account } from '../Icons/Avatar.svg';

const AccountSvg = styled(Account)`
height: 66px;
width: 66px;
display: block;
`;

export const AccountNav = () => (
  <AccountSvg />
);

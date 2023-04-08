/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from './NavItem';
import { GoUkraineNav } from './GoUkraine';
import { ButtonNav } from './ButtonNav';
import { SavedNav } from './SavedNav';
import { AccountNav } from './AccountNav';
import {
  NavBarBox,
  LogoWrapper,
  IconsWrapper,
  SphereSvg,
} from './NavBar.styled';

export const NavBar = ({ onLoginClick }) => {
  const [isHasAccount, setIsHasAccount] = useState(false);

  return (
    <nav
      className="navbar"
    >
      <NavBarBox className="navbar-box">
        <LogoWrapper>
          <NavItem to="/" element={<GoUkraineNav />} />
        </LogoWrapper>
        <IconsWrapper>
          <SphereSvg />
          {isHasAccount
            ? (
              <>
                <NavItem to="/saved" element={<SavedNav />} />
                <NavItem to="/account" element={<AccountNav />} />
              </>
            ) : (
              <ButtonNav
                buttonName="Log In"
                isHasAccount={isHasAccount}
                onClick={onLoginClick}
              />
            )}
        </IconsWrapper>
      </NavBarBox>
    </nav>
  );
};

NavBar.propTypes = {
  onLoginClick: PropTypes.func,
};

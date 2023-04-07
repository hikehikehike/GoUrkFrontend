/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from './NavItem';
import { GoUkraineNav } from './GoUkraine';
import { IconSphere } from '../Icons/Icons';
import { ButtonNav } from './ButtonNav';
import { SavedNav } from './SavedNav';
import { AccountNav } from './AccountNav';
import { NavBarBox } from './NavBar.styled';

export const NavBar = ({ onLoginClick }) => {
  const [isHasAccount, setIsHasAccount] = useState(true);

  return (
    <nav
      className="navbar"
    >
      <NavBarBox className="navbar-box">
        <NavItem to="/" element={<GoUkraineNav />} />
        <IconSphere />
        {isHasAccount
          ? (
            <>
              <ButtonNav
                buttonName="Log In"
                isHasAccount={isHasAccount}
                onClick={onLoginClick}
              />
              <NavItem to="/saved" element={<SavedNav />} />
              <NavItem to="/account" element={<AccountNav />} />
            </>
          ) : (
            <ButtonNav
              buttonName="Sign Up"
              isHasAccount={isHasAccount}
              onClick={onLoginClick}
            />
          )}
      </NavBarBox>
    </nav>
  );
};

NavBar.propTypes = {
  onLoginClick: PropTypes.func,
};

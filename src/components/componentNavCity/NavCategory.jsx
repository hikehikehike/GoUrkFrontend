import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLinkStyled } from './NavCategory.styled';

export const NavCategory = ({ to, element }) => (
  <NavLinkStyled
    to={to}
    activeClassName="active"
    // className={
    //   ({ isActive }) => classNames(
    //     { 'is-blue': isActive },
    //   )
    // }
  >
    {element}

  </NavLinkStyled>
);

NavCategory.propTypes = {
  to: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  element: PropTypes.element,
};

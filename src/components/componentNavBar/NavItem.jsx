import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const NavItem = ({ to, element }) => (
  <NavLink
    to={to}
    className={
      ({ isActive }) => classNames(
        'navbar-item', { 'is-light': isActive },
      )
    }
  >
    {element}

  </NavLink>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  element: PropTypes.element.isRequired,
};

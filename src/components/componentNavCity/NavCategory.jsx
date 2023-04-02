import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const NavCategory = ({ to, element }) => (
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

NavCategory.propTypes = {
  to: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  element: PropTypes.element,
};

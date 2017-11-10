import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';

import { Link } from '../Router';
import { onRouteSettings } from '../routes/Settings/redux';

// this is separated out to prevent react bootstrap's
// NavBar from injecting unknown props to the li component

const propTypes = {
  picture: PropTypes.string,
  points: PropTypes.number,
  showLoading: PropTypes.bool,
  username: PropTypes.string
};

export default function SignUpButton({
  picture,
  points,
  showLoading,
  username
}) {
  if (showLoading) {
    return null;
  }
  if (!username) {
    return (
      <NavItem
        href='/signup'
        key='signup'
        >
        Sign Up
      </NavItem>
    );
  }
  return (
    <li
      className='nav-avatar'
      key='user'
      >
      <Link to={ onRouteSettings() }>
        <span className='nav-username hidden-sm'> { username } </span>
        <span className='nav-points'> [ { points || 1 } ] </span>
        <span className='nav-picture-container'>
          <img
            className='nav-picture float-right'
            src={ picture }
          />
        </span>
      </Link>
    </li>
  );
}

SignUpButton.displayName = 'SignUpButton';
SignUpButton.propTypes = propTypes;

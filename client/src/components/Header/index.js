import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import FCCSearch from 'react-freecodecamp-search';

import NavLogo from './components/NavLogo';
import UserState from './components/UserState';

import './header.css';

function Header({ disableSettings }) {
  return (
    <header>
      <nav id='top-nav'>
        <a className='home-link' href='https://www.freecodecamp.org'>
          <NavLogo />
        </a>
        {disableSettings ? null : <FCCSearch />}
        <ul id='top-right-nav'>
          <li>
            <Link to='/'>Curriculum</Link>
          </li>
          <li>
            <a
              href='https://forum.freecodecamp.org'
              rel='noopener noreferrer'
              target='_blank'
              >
              Forum
            </a>
          </li>
          <li>
            <UserState disableSettings={disableSettings} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  disableSettings: PropTypes.bool
};
export default Header;

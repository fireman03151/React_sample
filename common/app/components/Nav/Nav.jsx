import React, { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Col,
  Nav,
  NavbarBrand,
  Navbar,
  NavItem
} from 'react-bootstrap';

import navLinks from './links.json';
import FCCNavItem from './NavItem.jsx';

const win = typeof window !== 'undefined' ? window : {};
const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';

const logoElement = (
  <a href='/'>
    <img
      alt='learn to code javascript at Free Code Camp logo'
      className='img-responsive nav-logo'
      src={ fCClogo } />
  </a>
);

const toggleButtonChild = (
    <Col xs={ 12 }>
      <span className='hamburger-text'>Menu</span>
    </Col>
);

function getDashedName() {
  let challengeDashedName;
  if (typeof win.localStorage !== 'undefined') {
    challengeDashedName = win.localStorage.getItem('currentDashedName');
  }
  return challengeDashedName && challengeDashedName !== 'undefined' ?
    challengeDashedName :
    '';
}

export default React.createClass({
  displayName: 'Nav',

  propTypes: {
    points: PropTypes.number,
    picture: PropTypes.string,
    signedIn: PropTypes.bool,
    username: PropTypes.string
  },

  renderLinks() {
    return navLinks.map(({ content, link, react, target }, index) => {
      if (react) {
        return (
          <LinkContainer
            eventKey={ index + 1 }
            key={ content }
            to={ link }>
            <NavItem
              target={ target || null }>
              { content }
            </NavItem>
          </LinkContainer>
        );
      }
      return (
        <NavItem
          eventKey={ index + 1 }
          href={ link }
          key={ content }
          target={ target || null }>
          { content }
        </NavItem>
      );
    });
  },

  renderLearnBtn() {
    return (
      <NavItem
        href='#'
        onClick={ () => {
          const challengeDashedName = getDashedName();
          const goTo = challengeDashedName ?
          '/challenges/' + challengeDashedName :
          '/map';
          win.location = goTo;
        }}>
        Learn
      </NavItem>
    );
  },

  renderPoints(username, points) {
    if (!username) {
      return null;
    }
    return (
      <FCCNavItem
        className='brownie-points-nav'
        href={ '/' + username }>
        [ { points } ]
      </FCCNavItem>
    );
  },

  renderSignin(username, picture) {
    if (username) {
      return (
        <div
          className='hidden-xs hidden-sm'
          eventKey={ 2 }>
          <a href={ '/' + username }>
            <img
              className='profile-picture float-right'
              src={ picture } />
          </a>
        </div>
      );
    } else {
      return (
        <FCCNavItem
          className='btn signup-btn signup-btn-nav signin-button-nav'
          eventKey={ 2 }
          href='/login'>
          Sign In
        </FCCNavItem>
      );
    }
  },

  render() {
    const { username, points, picture } = this.props;

    return (
      <Navbar
        className='nav-height'
        fixedTop={ true }>
        <NavbarBrand>{ logoElement }</NavbarBrand>
        <Navbar.Toggle children={ toggleButtonChild } />
        <Navbar.Collapse eventKey={ 0 }>
          <Nav
            className='hamburger-dropdown'
            navbar={ true }
            pullRight={ true }>
            { this.renderLearnBtn() }
            { this.renderLinks() }
            { this.renderPoints(username, points) }
            { this.renderSignin(username, picture) }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

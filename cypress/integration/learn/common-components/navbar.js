/* global cy */

const selectors = {
  heading: "[data-test-label='landing-header']",
  smallCallToAction: "[data-test-label='landing-small-cta']",
  navigationLinks: '.nav-list',
  avatarContainer: '.avatar-container',
  defaultAvatar: '.avatar-container',
  menuButton: '.toggle-button-nav'
};

let appHasStarted;
function spyOnListener(win) {
  const addListener = win.EventTarget.prototype.addEventListener;
  win.EventTarget.prototype.addEventListener = function (name) {
    if (name === 'click') {
      appHasStarted = true;
      win.EventTarget.prototype.addEventListener = addListener;
    }
    return addListener.apply(this, arguments);
  };
}

function waitForAppStart() {
  return new Promise(resolve => {
    const isReady = () => {
      if (appHasStarted) {
        return resolve();
      }
      return setTimeout(isReady, 0);
    };
    isReady();
  });
}

describe('Navbar', () => {
  beforeEach(() => {
    appHasStarted = false;
    cy.visit('/', {
      onBeforeLoad: spyOnListener
    }).then(waitForAppStart);
    cy.viewport(1300, 660);
  });

  it('Should render properly', () => {
    cy.get('#universal-nav').should('be.visible');
    cy.get('#universal-nav').should('have.class', 'universal-nav');
  });

  it(
    'Should take user to learn page when clicked on ' + 'the freeCodeCamp logo',
    () => {
      cy.get('.universal-nav-middle').within(() => {
        cy.get('svg').click();
      });
      cy.url().should('include', '/learn');
    }
  );

  it('Should have a "Sign in" button', () => {
    cy.contains("[data-test-label='landing-small-cta']", 'Sign in');
  });

  // have the curriculum and CTA on landing and /learn pages.
  it(
    'Should have `Radio`, `Forum`, and `Curriculum` links on landing and learn pages' +
      'page when not signed in',
    () => {
      cy.get(selectors.menuButton).click();
      cy.get(selectors.navigationLinks).contains('Forum');
      cy.get(selectors.navigationLinks).contains('Curriculum').click();
      cy.url().should('include', '/learn');
      cy.get(selectors.navigationLinks).contains('Curriculum');
      cy.get(selectors.navigationLinks).contains('Forum');
      cy.get(selectors.navigationLinks).contains('Radio');
    }
  );

  it(
    'Should have `Sign in` link on landing and learn pages' +
      ' when not signed in',
    () => {
      cy.contains(selectors.smallCallToAction, 'Sign in');
      cy.get(selectors.menuButton).click();
      cy.get(selectors.navigationLinks).contains('Curriculum').click();
      cy.contains(selectors.smallCallToAction, 'Sign in');
    }
  );

  it('Should have `Profile` link when user is signed in', () => {
    cy.login();
    cy.get('a[href*="/settings"]').should('be.visible');
    cy.get(selectors.menuButton).click();
    cy.get(selectors.navigationLinks).contains('Profile').click();
    cy.url().should('include', '/developmentuser');
  });

  it('Should have a profile image with class `default-border`', () => {
    cy.login();
    cy.get(selectors.avatarContainer).should('have.class', 'default-border');
    cy.get(selectors.defaultAvatar).should('exist');
  });
});

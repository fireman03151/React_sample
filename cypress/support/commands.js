// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {});
//
//
// -- This is a child command --
// Cypress.Commands.add(
//   'drag',
//   { prevSubject: 'element' },
//   (subject, options) => {}
// );
//
//
// -- This is a dual command --
// Cypress.Commands.add(
//   'dismiss',
//   { prevSubject: 'optional' },
//   (subject, options) => {}
// );
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {});

Cypress.Commands.add('login', () => {
  cy.visit(`${Cypress.env('API_LOCATION')}/signin`);
  cy.contains('Welcome back');
});

Cypress.Commands.add('toggleAll', () => {
  cy.visit('/settings');
  // cy.get('input[name="isLocked"]').click();
  // cy.get('input[name="name"]').click();
  cy.get('#privacy-settings')
    .find('.toggle-not-active')
    .each(element => {
      return new Cypress.Promise(resolve => {
        cy.wrap(element).click().should('have.class', 'toggle-active');
        resolve();
      });
    });
  cy.get('#honesty-policy').find('button').click().wait(300);
});

Cypress.Commands.add('resetUsername', () => {
  cy.visit('/settings');

  cy.get('@usernameInput')
    .clear({ force: true })
    .type('developmentuser', { force: true });

  cy.contains('Username is available');

  cy.get('@usernameInput').type('{enter}', { force: true, release: false });

  cy.contains('Account Settings for developmentuser').should('be.visible');
});

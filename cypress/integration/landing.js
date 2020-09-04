/* global cy */
const selectors = {
  heading: "[data-test-label='landing-header']",
  callToAction: "[data-test-label='landing-big-cta']",
  certifications: "[data-test-label='certifications']",
  testimonials: "[data-test-label='testimonial-cards']",
  landingPageImage: '.landing-page-image'
};

describe('Landing page', () => {
  it('Should render', () => {
    cy.visit('/');
    cy.title().should('eq', 'Learn to code at home | freeCodeCamp.org');
    cy.contains(selectors.callToAction, "Get started (it's free)");
    cy.get(selectors.callToAction).should('have.length', 2);
  });

  it('Has visible header and sub-header', () => {
    cy.contains(selectors.heading, 'Learn to code at home.');
    cy.contains('Build projects.').should('be.visible');
    cy.contains('Earn certifications.').should('be.visible');

    cy.contains(
      'Since 2014, more than 40,000 freeCodeCamp.org ' +
        'graduates have gotten jobs at tech companies including:'
    ).should('be.visible');
  });

  it('Has 5 brand logos', () => {
    cy.get('.logo-row')
      .children()
      .its('length')
      .should('eq', 5);
  });

  it('Has `as seens as` section', () => {
    cy.contains('Build projects.').should('be.visible');
    cy.get('.big-heading')
      .siblings()
      .get('svg');
  });

  it('Has a visible large image on large viewports', function() {
    cy.viewport(1200, 660)
      .get(selectors.landingPageImage)
      .should('be.visible');

    cy.viewport(1199, 660)
      .get(selectors.landingPageImage)
      .should('not.be.visible');
  });

  it('Has 10 certifications', function() {
    cy.get(selectors.certifications)
      .children()
      .its('length')
      .should('eq', 10);
  });

  it('Has 3 testimonial cards', function() {
    cy.get(selectors.testimonials)
      .children()
      .its('length')
      .should('eq', 3);
  });
});

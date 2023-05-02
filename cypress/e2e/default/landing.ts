const landingPageElements = {
  heading: "[data-test-label='landing-header']",
  callToAction: "[data-test-label='landing-big-cta']",
  certifications: "[data-test-label='certifications']",
  testimonials: "[data-test-label='testimonial-cards']",
  landingPageImage: "[data-test-label='landing-page-figure']",
  faq: "[data-test-label='landing-page-faq']"
} as const;

type LandingPageTypes<T> = T[keyof T];

type LandingPageLogs = LandingPageTypes<typeof landingPageElements>;

const certifications = [
  'Responsive Web Design',
  'JavaScript Algorithms and Data Structures',
  'Front End Development Libraries',
  'Data Visualization',
  'Relational Database',
  'Back End Development and APIs',
  'Quality Assurance',
  'Scientific Computing with Python',
  'Data Analysis with Python',
  'Information Security',
  'Machine Learning with Python',
  'College Algebra with Python'
];

describe('Landing page', () => {
  it('Should render', () => {
    cy.visit('/');
    cy.title().should(
      'eq',
      'Learn to Code — For Free — Coding Courses for Busy People'
    );
    cy.contains(landingPageElements.callToAction, "Get started (it's free)");
    cy.get(landingPageElements.callToAction).should('have.length', 4);
  });

  it('Has visible header and sub-header', () => {
    cy.contains(landingPageElements.heading, 'Learn to code — for free.');
    cy.contains('Build projects.').should('be.visible');
    cy.contains('Earn certifications.').should('be.visible');

    cy.contains(
      'Since 2014, more than 40,000 freeCodeCamp.org ' +
        'graduates have gotten jobs at tech companies including:'
    ).should('be.visible');
  });

  it('Has 5 brand logos', () => {
    cy.get('.logo-row').children().its('length').should('eq', 5);
  });

  it('Has `as seens as` section', () => {
    cy.contains('Build projects.').should('be.visible');
    cy.get('.big-heading').siblings().get('svg');
  });

  it('Has a visible large image on large viewports', function () {
    cy.viewport(1200, 660)
      .get(landingPageElements.landingPageImage)
      .should('be.visible');

    cy.viewport(1199, 660)
      .get(landingPageElements.landingPageImage)
      .should('not.exist');
  });

  it('Has links to all the certifications', function () {
    cy.get(landingPageElements.certifications)
      .children()
      .its('length')
      .should('eq', 12);
    cy.wrap(certifications).each((cert: LandingPageLogs) => {
      cy.get(landingPageElements.certifications).contains(cert);
    });
  });

  it('Has 3 testimonial cards', function () {
    cy.get(landingPageElements.testimonials)
      .children()
      .its('length')
      .should('eq', 3);
  });

  it('Has FAQ section', function () {
    cy.get(landingPageElements.faq).its('length').should('eq', 9);
  });
});

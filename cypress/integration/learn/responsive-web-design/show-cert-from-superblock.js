import { SuperBlocks } from '../../../../config/certification-settings';

const projects = {
  superBlock: SuperBlocks.RespWebDesign,
  block: 'responsive-web-design-projects',
  challenges: [
    {
      slug: 'build-a-tribute-page',
      solution: 'https://codepen.io/moT01/pen/ZpJpKp'
    },
    {
      slug: 'build-a-survey-form',
      solution: 'https://codepen.io/moT01/pen/LrrjGz?editors=1010'
    },
    {
      slug: 'build-a-product-landing-page',
      solution: 'https://codepen.io/moT01/full/qKyKYL/'
    },
    {
      slug: 'build-a-technical-documentation-page',
      solution: 'https://codepen.io/moT01/full/JBvzNL/'
    },
    {
      slug: 'build-a-personal-portfolio-webpage',
      solution: 'https://codepen.io/moT01/pen/vgOaoJ'
    }
  ]
};

describe('Responsive Web Design Superblock', () => {
  before(() => {
    cy.exec('npm run seed');
    cy.login();
    cy.visit('/learn/responsive-web-design');
  });
  describe('Before submitting projects', () => {
    it('should navigate to "/settings#certification-settings" when clicking the "Go to settings to claim your certification" anchor', () => {
      cy.contains('Go to settings to claim your certification').click();
      cy.url().should('include', '/settings#certification-settings');
    });
  });
  describe('After submitting all 5 projects', () => {
    before(() => {
      cy.exec('npm run seed');
      cy.login();
      cy.toggleAll();
    });

    it('should be possible to view certifications from the settings page', () => {
      submitFrontEndSolutions();
      cy.visit(`/learn/${projects.superBlock}/`);
      cy.contains('Go to settings to claim your certification').click();
      cy.location().should(loc => {
        expect(loc.pathname).to.eq(`/settings`);
      });
      cy.get('[data-cy=btn-for-responsive-web-design]').click();
      cy.contains('Show Certification').click();
      cy.location().should(loc => {
        expect(loc.pathname).to.eq(
          `/certification/developmentuser/${projects.superBlock}`
        );
      });
    });

    function submitFrontEndSolutions() {
      const { superBlock, block, challenges } = projects;
      challenges.forEach(({ slug, solution }) => {
        const url = `/learn/${superBlock}/${block}/${slug}`;
        cy.visit(url);
        cy.get('#dynamic-front-end-form')
          .get('#solution')
          .type(solution, { force: true, delay: 0 });
        cy.contains("I've completed this challenge")
          .should('not.be.disabled')
          .click();
        cy.intercept(`${Cypress.env('API_LOCATION')}/project-completed`).as(
          'challengeCompleted'
        );
        cy.contains('Submit and go to next challenge').click();
        cy.wait('@challengeCompleted')
          .its('response.statusCode')
          .should('eq', 200);
        cy.location().should(loc => {
          expect(loc.pathname).to.not.eq(url);
        });
      });
    }
  });
});

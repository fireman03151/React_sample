const selectors = {
  defaultOutput: '.output-text',
  editor: '.monaco-editor',
  hotkeys: '.default-layout > div',
  runTestsButton: 'button:contains("Run the Tests")'
};

const locations = {
  index:
    '/learn/responsive-web-design/basic-html-and-html5/' +
    'say-hello-to-html-elements',
  jQuery:
    '/learn/front-end-development-libraries/jquery/' +
    'target-html-elements-with-selectors-using-jquery',
  js:
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/' +
    'comment-your-javascript-code'
};

const defaultOutput = `
/**
* Your test output will go here
*/`;

const runningOutput = '// running tests';
const finishedOutput = '// tests completed';

describe('Classic challenge', function () {
  before(() => {
    cy.visit(locations.index);
  });

  it('renders the default output text', () => {
    cy.title().should(
      'eq',
      'Basic HTML and HTML5: Say Hello to HTML Elements |' + ' freeCodeCamp.org'
    );
    cy.get(selectors.defaultOutput).contains(defaultOutput);
  });

  it('shows test output when the tests are run', () => {
    // first wait for the editor to load
    cy.get(selectors.editor, { timeout: 15000 });
    cy.get(selectors.runTestsButton)
      .click()
      .then(() => {
        cy.get(selectors.defaultOutput)
          .contains(runningOutput)
          .contains(finishedOutput);
      });
  });

  it('shows test output when the tests are triggered by the keyboard', () => {
    // first wait for the editor to load
    cy.get(selectors.editor, {
      timeout: 15000
    });
    cy.get(selectors.hotkeys)
      .focus()
      .type('{ctrl}{enter}')
      .then(() => {
        cy.get(selectors.defaultOutput)
          .contains(runningOutput)
          .contains(finishedOutput);
      });
  });
});

describe('jQuery challenge', function () {
  before(() => {
    cy.visit(locations.jQuery);
  });

  it('renders the default output text', () => {
    cy.title().should(
      'eq',
      'jQuery: Target HTML Elements with Selectors Using jQuery | freeCodeCamp.org'
    );
    cy.get(selectors.defaultOutput).contains(defaultOutput);
  });

  it('should not show a reference error', () => {
    cy.wait(5000);
    cy.get(selectors.defaultOutput).should(
      'not.contain',
      'ReferenceError: $ is not defined'
    );
  });
});

describe('Custom output for JavaScript objects', function () {
  beforeEach(() => {
    cy.visit(locations.js);
    cy.get(selectors.editor, {
      timeout: 15000
    })
      .first()
      .click()
      .focused()
      .type('{ctrl}a')
      .clear();
  });

  it('Set object', () => {
    cy.get(selectors.editor)
      .first()
      .click()
      .focused()
      .type(
        'const set = new Set();{enter}set.add(1);{enter}set.add("set");{enter}set.add(10);{enter}console.log(set);'
      );
    cy.get(selectors.defaultOutput).should('contain', 'Set(3) {1, set, 10}');
  });

  it('Map object', () => {
    cy.get(selectors.editor)
      .first()
      .click()
      .focused()
      .type(
        'const map = new Map();{enter}map.set("first", 1);{enter}map.set("second", 2);{enter}map.set("other", "map");{enter}console.log(map);'
      );
    cy.get(selectors.defaultOutput).should(
      'contain',
      'Map(3) {first => 1, second => 2, other => map})'
    );
  });
});

---
id: 5e601bf95ac9d0ecd8b94afd
title: Sudoku Solver
challengeType: 4
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank">https://sudoku-solver.freecodecamp.rocks/</a>.

- Clone <a href='https://github.com/freecodecamp/boilerplate-project-sudoku-solver' target='_blank'>this GitHub repo</a> and complete your project locally.
- Use <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-sudoku-solver' target='_blank'>our repl.it starter project</a> to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your project's source code in the `GitHub Link` field.
</section>

## Instructions
<section id='instructions'>

- All puzzle logic can go into `/controllers/sudoku-solver.js`
- All routing logic can go into `/routes/api.js`
- See the `puzzle-strings.js` file in `/controllers` for some sample puzzles your application should solve
- To run the challenge tests on this page, set `NODE_ENV` to `test` without quotes in the `.env` file
- To run the tests in the console, use the command `npm run test`. To open the Repl.it console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should provide your own project, not the example URL.
    testString: |
      getUserInput => {
        const url = getUserInput('url');
        assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: You can `POST` `/api/solve` with form data containing `puzzle` which will be a string containing a combination of numbers (1-9) and periods `.` to represent empty spaces. The returned object will contain a `solution` property with the solved puzzle.
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'solution');
      assert.equal(parsed.solution, output);
      }"
  - text: If the object submitted to `/api/solve` is missing `puzzle`, the returned value will be `{ error: 'Required field missing' }`
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Required field missing';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({notpuzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the puzzle submitted to `/api/solve` contains values which are not numbers or periods, the returned value will be `{ error: 'Invalid characters in puzzle' }`
    testString: "async getUserInput => {
      const input = 'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Invalid characters in puzzle';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the puzzle submitted to `/api/solve` is greater or less than 81 characters, the returned value will be `{ error: 'Expected puzzle to be 81 characters long' }`
    testString: "async getUserInput => {
      const input = '9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Expected puzzle to be 81 characters long';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the puzzle submitted to `/api/solve` is invalid or cannot be solved, the returned value will be `{ error: 'Puzzle cannot be solved' }`
    testString: "async getUserInput => {
      const input = '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Puzzle cannot be solved';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: You can `POST` to `/api/check` an object containing `puzzle`, `coordinate`, and `value` where the `coordinate` is the letter A-I indicating the row, followed by a number 1-9 indicating the column, and `value` is a number from 1-9.
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '7';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'valid');
      assert.isTrue(parsed.valid);
      }"
  - text: The return value from the `POST` to `/api/check` will be an object containing a `valid` property, which is `true` if the number may be placed at the provided coordinate and `false` if the number may not. If false, the returned object will also contain a `conflict` property which is an array containing the strings `"row"`, `"column"`, and/or `"region"` depending on which makes the placement invalid.
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '1';
      const conflict = ['row', 'column'];
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'valid');
      assert.isFalse(parsed.valid);
      assert.property(parsed, 'conflict');
      assert.include(parsed.conflict, 'row');
      assert.include(parsed.conflict, 'column');
      }"
  - text: If the puzzle submitted to `/api/check` contains values which are not numbers or periods, the returned value will be `{ error: 'Invalid characters in puzzle' }`
    testString: "async getUserInput => {
      const input = 'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '1';
      const output = 'Invalid characters in puzzle';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the puzzle submitted to `/api/check` is greater or less than 81 characters, the returned value will be `{ error&#58; 'Expected puzzle to be 81 characters long' }`
    testString: "async getUserInput => {
      const input = '9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '1';
      const output = 'Expected puzzle to be 81 characters long';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the object submitted to `/api/check` is missing `puzzle`, `coordinate` or `value`, the returned value will be `{ error: Required field(s) missing }`
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Required field(s) missing';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the coordinate submitted to `api/check` does not point to an existing grid cell, the returned value will be `{ error: 'Invalid coordinate'}`
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Invalid coordinate';
      const coordinate = 'XZ18';
      const value = '7';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the `value` submitted to `/api/check` is not a number between 1 and 9, the returned values will be `{ error: 'Invalid value' }`
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Invalid value';
      const coordinate = 'A1';
      const value = 'X';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: All 12 unit tests are complete and passing. See `/tests/1_unit-tests.js` for the expected behavior you should write tests for.
    testString: "async getUserInput => {
       try {
          const getTests = await $.get(getUserInput('url') + '/_api/get-tests' );
          assert.isArray(getTests);
          const units = getTests.filter(el => el.context.includes('UnitTests'));
          assert.isAtLeast(units.length, 12, 'At least 12 tests passed');
          units.forEach(test => {
            assert.equal(test.state, 'passed', 'Test in Passed State');
            assert.isAtLeast(test.assertions.length, 1, 'At least one assertion per test');
          });
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: All 14 functional tests are complete and passing. See `/tests/2_functional-tests.js` for the functionality you should write tests for.
    testString: "async getUserInput => {
       try {
          const getTests = await $.get(getUserInput('url') + '/_api/get-tests' );
          assert.isArray(getTests);
          const funcs = getTests.filter(el => el.context.includes('Functional Tests'));
          assert.isAtLeast(funcs.length, 14, 'At least 14 tests passed');
          funcs.forEach(test => {
            assert.equal(test.state, 'passed', 'Test in Passed State');
            assert.isAtLeast(test.assertions.length, 1, 'At least one assertion per test');
          });
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"


```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```

</section>

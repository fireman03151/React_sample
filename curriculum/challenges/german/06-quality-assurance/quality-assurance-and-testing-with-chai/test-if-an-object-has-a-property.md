---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2
forumTopicId: 301604
dashedName: test-if-an-object-has-a-property
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`property` asserts that the actual object has a given property.

# --instructions--

Within `tests/1_unit-tests.js` under the test labelled `#16` in the `Objects` suite, change each `assert` to either `assert.property` or `assert.notProperty` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die erste Behauptung wählen - `property` vs. `notProperty`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notProperty',
        'A car has not wings'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die zweite Behauptung wählen - `property` vs. `notProperty`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'property',
        'planes have engines'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die dritte Behauptung wählen - `property` vs. `notProperty`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'property', 'Cars have wheels');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

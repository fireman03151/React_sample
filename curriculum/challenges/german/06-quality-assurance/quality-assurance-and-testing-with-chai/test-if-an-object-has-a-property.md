---
id: 587d824e367417b2b2512c55
title: Teste, ob ein Objekt über eine Eigenschaft verfügt
challengeType: 2
forumTopicId: 301604
dashedName: test-if-an-object-has-a-property
---

# --description--

Zur Erinnerung: Dieses Projekt baut auf dem folgenden Startprojekt auf<a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">repliziert</a>, oder geklont von<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`property` asserts that the actual object has a given property.

# --instructions--

Within `tests/1_unit-tests.js` under the test labelled `#16` in the `Objects` suite, change each `assert` to either `assert.property` or `assert.notProperty` to make the test pass (should evaluate to `true`). Ändere nicht die Argumente, die an die Assertions übergeben werden.

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

---
id: 587d824d367417b2b2512c50
title: Evalúa si un valor es un arreglo
challengeType: 2
forumTopicId: 301600
dashedName: test-if-a-value-is-an-array
---

# --description--

Como recordatorio, este proyecto está siendo construido con base en el siguiente proyecto inicial <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Repl.it</a>, o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#11` in the `Arrays` suite, change each `assert` to either `assert.isArray` or `assert.isNotArray` to make the test pass (should evaluate to `true`). No modifiques los argumentos pasados ​​a los verificadores.

# --hints--

Todas las pruebas deben pasar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debes elegir el método correcto para la primera comprobación - `isArray` vs `isNotArray`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isArray',
        'String.prototype.split() returns an Array'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debes elegir el método correcto para la segunda comprobación - `isArray` vs `isNotArray`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isNotArray',
        'Array.prototype.indexOf() returns a number'
      );
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

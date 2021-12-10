---
id: 587d824c367417b2b2512c4f
title: Перевірте, чи знаходиться значення у межах конкретного діапазону
challengeType: 2
forumTopicId: 301598
dashedName: test-if-a-value-falls-within-a-specific-range
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного початкового проєкту на [ Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) або копіюється з [ GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

```javascript
.approximately(actual, expected, delta, [message])
```

Перевіряє, щоб `actual` дорівнював `expected`, у межах +/- `delta` діапазону.

# --instructions--

У межах `tests/1_unit-tests.js` під тестом з міткою `#10` в наборі `Comparisons` змініть кожний `assert` на `assert.approximately`, щоб полегшити проходження тесту (варто оцінювати як `true`).

Виберіть мінімальний діапазон (третій параметр) для того, щоб тест можна було проходити завжди. Він має бути менше ніж 1.

# --hints--

Всі тести повинні бути успішно пройдені.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Оберіть правильний діапазон для першого твердження - `approximately(actual, expected, range)`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'approximately');
      assert.equal(
        data.assertions[0].args[2],
        0.5,
        "weirdNumbers(0.5) is in the range (0.5, 1.5]. It's within 1 +/- 0.5"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Оберіть правильний діапазон для другого твердження - `approximately(actual, expected, range)`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'approximately');
      assert.equal(
        data.assertions[1].args[2],
        0.8,
        "weirdNumbers(0.2) is in the range (0.2, 1.2]. It's within 1 +/- 0.8"
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

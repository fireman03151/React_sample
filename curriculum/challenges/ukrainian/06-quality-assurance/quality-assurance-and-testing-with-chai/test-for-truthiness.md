---
id: 587d824b367417b2b2512c49
title: Тест на істинність
challengeType: 2
forumTopicId: 301596
dashedName: test-for-truthiness
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного початкового проєкту на [ Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) або копіюється з [ GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

`isTrue()` протестує логічне значення `true` та `isNotTrue()` передасть дані, коли отримає будь-що окрім логічного значення `true`.

```js
assert.isTrue(true, 'This will pass with the boolean value true');
assert.isTrue('true', 'This will NOT pass with the string value "true"');
assert.isTrue(1, 'This will NOT pass with the number value 1');
```

`isFalse()` та `isNotFalse()` також існують, і мають схожу поведінку до своїх true двійників, якщо тільки не шукають логічне значення `false`.

# --instructions--

У `tests/1_unit-tests.js` тесті з позначкою `#4` в наборі `Basic Assertions` змініть кожне `assert` на `assert.isTrue`, або `assert.isNotTrue`, щоб пройти тест (варто оцінювати як `true`). Не змінюйте аргументи, передані до тверджень.

# --hints--

Всі тести повинні бути успішно пройдені.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для першого твердження `isTrue` або `isNotTrue`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isTrue', 'True is true');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для другого твердження `isTrue` або `isNotTrue`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isTrue',
        'Double negation of a truthy value is true'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для третього твердження – `isTrue` або `isNotTrue`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isNotTrue',
        'A truthy object is not true - neither is a false one'
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

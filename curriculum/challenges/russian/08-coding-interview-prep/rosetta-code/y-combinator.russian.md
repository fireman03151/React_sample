---
title: Y combinator
id: 594810f028c0303b75339ad5
challengeType: 5
videoUrl: ''
localeTitle: И комбинатор
---

## Description
<section id="description"><p> В строгом <a href="https://en.wikipedia.org/wiki/Functional programming" title="wp: функциональное программирование">функциональном программировании</a> и <a href="https://en.wikipedia.org/wiki/lambda calculus" title="wp: лямбда-исчисление">исчислении лямбда</a> функции (лямбда-выражения) не имеют состояния и могут быть разрешены только к аргументам включенных функций. Это исключает обычное определение рекурсивной функции, в которой функция связана с состоянием переменной, и состояние этой переменной используется в теле функции. </p><p> <a href="http://mvanier.livejournal.com/2897.html">Комбинатор Y</a> сам по себе является функцией без состояния, которая при применении к другой функции без сохранения возвращает рекурсивную версию функции. Комбинатор Y является простейшим из класса таких функций, называемых <a href="https://en.wikipedia.org/wiki/Fixed-point combinator" title="wp: комбинатор с фиксированной запятой">комбинаторами с фиксированной запятой</a> . </p> Задача: <pre> <code>Define the stateless Y combinator function and use it to compute &lt;a href=&quot;https://en.wikipedia.org/wiki/Factorial&quot; title=&quot;wp: factorial&quot;&gt;factorial&lt;/a&gt;.</code> </pre><p> Функция <code>factorial(N)</code> уже предоставлена ​​вам. См. Также <a href="http://vimeo.com/45140590">Джим Вейрих: Приключения в функциональном программировании</a> . </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Y должен возвращать функцию
    testString: 'assert.equal(typeof Y(f => n => n), "function", "Y must return a function");'
  - text: factorial (1) должен возвращать 1.
    testString: 'assert.equal(factorial(1), 1, "factorial(1) must return 1.");'
  - text: factorial (2) должен вернуть 2.
    testString: 'assert.equal(factorial(2), 2, "factorial(2) must return 2.");'
  - text: факториал (3) должен возвращать 6.
    testString: 'assert.equal(factorial(3), 6, "factorial(3) must return 6.");'
  - text: факториал (4) должен возвращать 24.
    testString: 'assert.equal(factorial(4), 24, "factorial(4) must return 24.");'
  - text: factorial (10) должен вернуть 3628800.
    testString: 'assert.equal(factorial(10), 3628800, "factorial(10) must return 3628800.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Y(f) {
  return function() {
  // Good luck!
  };
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
challengeType: 1
videoUrl: ''
localeTitle: Использовать несколько условных (тройных) операторов
---

## Description
<section id="description"> В предыдущем вызове использовался один <code>conditional operator</code> . Вы также можете связать их вместе, чтобы проверить наличие нескольких условий. Следующая функция использует if, else if и else для проверки нескольких условий: <blockquote> функция findGreaterOrEqual (a, b) { <br> if (a === b) { <br> return «a и b равны»; <br> } <br> else if (a&gt; b) { <br> return «a больше»; <br> } <br> else { <br> return «b больше»; <br> } <br> } </blockquote> Вышеупомянутая функция может быть переписана с использованием нескольких <code>conditional operators</code> : <blockquote> функция findGreaterOrEqual (a, b) { <br> return (a === b)? «a и b равны»: (a&gt; b)? «a больше»: «b больше»; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Используйте несколько <code>conditional operators</code> в функции <code>checkSign</code> чтобы проверить, является ли число положительным, отрицательным или нулевым. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkSign</code> должен использовать несколько <code>conditional operators</code>
    testString: 'assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), "<code>checkSign</code> should use multiple <code>conditional operators</code>");'
  - text: '<code>checkSign(10)</code> должен возвращать «положительный». Обратите внимание, что вопросы капитализации'
    testString: 'assert(checkSign(10) === "positive", "<code>checkSign(10)</code> should return "positive". Note that capitalization matters");'
  - text: '<code>checkSign(-12)</code> должен возвращать «отрицательный». Обратите внимание, что вопросы капитализации'
    testString: 'assert(checkSign(-12) === "negative", "<code>checkSign(-12)</code> should return "negative". Note that capitalization matters");'
  - text: '<code>checkSign(0)</code> должен возвращать «ноль». Обратите внимание, что вопросы капитализации'
    testString: 'assert(checkSign(0) === "zero", "<code>checkSign(0)</code> should return "zero". Note that capitalization matters");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSign(num) {

}

checkSign(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

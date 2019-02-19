---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
videoUrl: ''
localeTitle: Доступ к многомерным массивам с индексами
---

## Description
<section id="description"> Один из способов думать о <dfn>многомерном</dfn> массиве - это <em>массив массивов</em> . Когда вы используете скобки для доступа к вашему массиву, первый набор скобок ссылается на записи в массиве внешнего (первого уровня), а каждая дополнительная пара скобок ссылается на следующий уровень записей внутри. <strong>пример</strong> <blockquote> var arr = [ <br> [1,2,3], <br> [4,5,6], <br> [7,8,9], <br> [[10,11,12], 13, 14] <br> ]; <br> обр [3]; // равно [[10,11,12], 13, 14] <br> обр [3] [0]; // равно [10,11,12] <br> обр [3] [0] [1]; // равно 11 </blockquote> <strong>Заметка</strong> <br> Между именем массива и квадратными скобками не должно быть пробелов, например <code>array [0][0]</code> и даже этот <code>array [0] [0]</code> недопустим. Хотя JavaScript способен корректно обрабатывать, это может смутить других программистов, читающих ваш код. </section>

## Instructions
<section id="instructions"> Используя нотацию с помощью скобок, выберите элемент из <code>myArray</code> таким образом, чтобы <code>myData</code> был равен <code>8</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myData</code> должен быть равен <code>8</code> .
    testString: 'assert(myData === 8, "<code>myData</code> should be equal to <code>8</code>.");'
  - text: Для чтения правильного значения из <code>myArray</code> вы должны использовать условное обозначение.
    testString: 'assert(/myArray\[2\]\[1\]/g.test(code) && !/myData\s*=\s*(?:.*[-+*/%]|\d)/g.test(code), "You should be using bracket notation to read the correct value from <code>myArray</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[0][0];

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

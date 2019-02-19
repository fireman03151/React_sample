---
id: 56533eb9ac21ba0edf2244ed
title: Appending Variables to Strings
challengeType: 1
videoUrl: ''
localeTitle: Добавление переменных в строки
---

## Description
<section id="description"> Так же, как мы можем построить строку из нескольких строк из строковых <dfn>литералов</dfn> , мы также можем добавить переменные в строку, используя оператор equals ( <code>+=</code> ). </section>

## Instructions
<section id="instructions"> Установите <code>someAdjective</code> и добавьте его в <code>myStr</code> используя оператор <code>+=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>someAdjective</code> должен быть установлен в строку длиной не менее 3 символов
    testString: 'assert(typeof someAdjective !== "undefined" && someAdjective.length > 2, "<code>someAdjective</code> should be set to a string at least 3 characters long");'
  - text: Добавить <code>someAdjective</code> в <code>myStr</code> используя оператор <code>+=</code>
    testString: 'assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0, "Append <code>someAdjective</code> to <code>myStr</code> using the <code>+=</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective;
var myStr = "Learning to code is ";

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

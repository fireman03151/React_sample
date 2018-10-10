---
id: cf1111c1c11feddfaeb8bdef
title: Modify Array Data With Indexes
challengeType: 1
videoUrl: ''
localeTitle: Изменение данных массива с индексами
---

## Description
<section id="description"> В отличие от строк, записи массивов <dfn>изменяемы</dfn> и могут быть изменены свободно. <strong>пример</strong> <blockquote> var ourArray = [50,40,30]; <br> ourArray [0] = 15; // равно [15, 40, 30] </blockquote> <strong>Заметка</strong> <br> Между именем массива и квадратными скобками не должно быть пробелов, например <code>array [0]</code> . Хотя JavaScript способен корректно обрабатывать, это может смутить других программистов, читающих ваш код. </section>

## Instructions
<section id="instructions"> Измените данные, хранящиеся в индексе <code>0</code> <code>myArray</code> до значения <code>45</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> теперь должен быть [45,64,99].'
    testString: 'assert((function(){if(typeof myArray != "undefined" && myArray[0] == 45 && myArray[1] == 64 && myArray[2] == 99){return true;}else{return false;}})(), "<code>myArray</code> should now be [45,64,99].");'
  - text: Вы должны использовать правильный индекс для изменения значения в <code>myArray</code> .
    testString: 'assert((function(){if(code.match(/myArray\[0\]\s*=\s*/g)){return true;}else{return false;}})(), "You should be using correct index to modify the value in <code>myArray</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.

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

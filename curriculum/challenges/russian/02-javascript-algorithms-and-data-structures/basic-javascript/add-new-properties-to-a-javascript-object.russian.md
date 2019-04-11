---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: Добавление новых свойств в объект JavaScript
---

## Description
<section id="description"> Вы можете добавлять новые свойства к существующим объектам JavaScript так же, как вы их модифицировали. Вот как мы добавим свойство <code>&quot;bark&quot;</code> в объект <code>ourDog</code> : <code>ourDog.bark = &quot;гав-гав&quot;;</code> или <code>ourDog[&quot;bark&quot;] = &quot;гав-гав&quot;;</code> Теперь, когда мы вызовем <code>ourDog.bark</code> , мы получим значение записанного свойства - <code>&quot;гав-гав&quot;</code>. </section>

## Instructions
<section id="instructions"> Добавьте свойство <code>&quot;bark&quot;</code> в объект <code>myDog</code> и присвойте этому свойству звук который издает собака, например "гав". Вы можете использовать точку или квадратные скобки для задания свойства объекта.</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Добавьте свойство <code>&quot;bark&quot;</code> в <code>myDog</code> .
    testString: 'assert(myDog.bark !== undefined, "Add the property <code>"bark"</code> to <code>myDog</code>.");'
  - text: Не добавляйте свойство <code>&quot;bark&quot;</code> в раздел <code>// Setup</code>
    testString: 'assert(!/bark[^\n]:/.test(code), "Do not add <code>"bark"</code> to the setup section");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Барбос",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "гав-гав";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return z;})(myDog);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Гав";
```
</section>

---
id: 56bbb991ad1ed5201cd392cb
title: Manipulate Arrays With push()
challengeType: 1
videoUrl: ''
localeTitle: Манипулировать массивами С помощью push ()
---

## Description
<section id="description"> Простым способом добавления данных в конец массива является функция <code>push()</code> . <code>.push()</code> принимает один или несколько <dfn>параметров</dfn> и «нажимает» их на конец массива. <blockquote> var arr = [1,2,3]; <br> arr.push (4); <br> // arr теперь [1,2,3,4] </blockquote></section>

## Instructions
<section id="instructions"> Нажмите <code>[&quot;dog&quot;, 3]</code> на конец переменной <code>myArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> должен теперь равняться <code>[[&quot;John&quot;, 23], [&quot;cat&quot;, 2], [&quot;dog&quot;, 3]]</code> .'
    testString: 'assert((function(d){if(d[2] != undefined && d[0][0] == "John" && d[0][1] === 23 && d[2][0] == "dog" && d[2][1] === 3 && d[2].length == 2){return true;}else{return false;}})(myArray), "<code>myArray</code> should now equal <code>[["John", 23], ["cat", 2], ["dog", 3]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

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

---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
challengeType: 1
---

## Description
<section id='description'>
Just like a regular function, you can pass arguments into an arrow function.

```js
// doubles input value and returns it
const doubler = (item) => item * 2;
```

If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.

```js
// the same function, without the argument parentheses
const doubler = item => item * 2;
```

It is possible to pass more than one argument into an arrow function.

```js
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
```

</section>

## Instructions
<section id='instructions'>
Rewrite the <code>myConcat</code> function which appends contents of <code>arr2</code> to <code>arr1</code> so that the function uses arrow function syntax.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: User did replace <code>var</code> keyword.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g), 'User did replace <code>var</code> keyword.');
  - text: <code>myConcat</code> should be a constant variable (by using <code>const</code>).
    testString: getUserInput => assert(getUserInput('index').match(/const\s+myConcat/g), '<code>myConcat</code> should be a constant variable (by using <code>const</code>).');
  - text: <code>myConcat</code> should be a function
    testString: assert(typeof myConcat === 'function', '<code>myConcat</code> should be a function');
  - text: <code>myConcat()</code> returns the correct <code>array</code>
    testString: assert(() => { const a = myConcat([1], [2]); return a[0] == 1 && a[1] == 2; }, '<code>myConcat()</code> returns the correct <code>array</code>');
  - text: <code>function</code> keyword was not used.
    testString: getUserInput => assert(!getUserInput('index').match(/function/g), '<code>function</code> keyword was not used.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```

</div>



</section>

## Solution
<section id='solution'>

```js
const myConcat = (arr1, arr2) =>  {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```
</section>

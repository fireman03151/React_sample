---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1
---

## Description
<section id='description'>
In some cases, you can destructure the object in a function argument itself.
Consider the code below:

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```

This effectively destructures the object sent into the function. This can also be done in-place:

```js
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
```

This removes some extra lines and makes our code look neat.
This has the added benefit of not having to manipulate an entire object in a function; only the fields that are needed are copied inside the function.
</section>

## Instructions
<section id='instructions'>
Use destructuring assignment within the argument to the function <code>half</code> to send only <code>max</code> and <code>min</code> inside the function.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>stats</code> should be an <code>object</code>.
    testString: assert(typeof stats === 'object');
  - text: <code>half(stats)</code> should be <code>28.015</code>
    testString: assert(half(stats) === 28.015);
  - text: Destructuring should be used.
    testString: assert(code.replace(/\s/g, '').match(/half=\({\w+,\w+}\)/));
  - text: Destructured parameter should be used.
    testString: assert(!code.match(/stats\.max|stats\.min/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; // use function argument destructuring
// change code above this line

console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
```

</div>



</section>

## Solution
<section id='solution'>

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```
</section>

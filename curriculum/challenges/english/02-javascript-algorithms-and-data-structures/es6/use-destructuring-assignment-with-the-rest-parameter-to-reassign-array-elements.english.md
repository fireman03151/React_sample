---
id: 587d7b8a367417b2b2512b4c
title: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
challengeType: 1
---

## Description
<section id='description'>
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
The result is similar to <code>Array.prototype.slice()</code>, as shown below:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

Variables <code>a</code> and <code>b</code> take the first and second values from the array. After that, because of rest parameter's presence, <code>arr</code> gets rest of the values in the form of an array.
The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out last element of the original array.
</section>

## Instructions
<section id='instructions'>
Use destructuring assignment with the rest parameter to perform an effective <code>Array.prototype.slice()</code> so that <code>arr</code> is a sub-array of the original array <code>source</code> with the first two elements omitted.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arr</code> should be <code>[3,4,5,6,7,8,9,10]</code>
    testString: assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
  - text: <code>Array.slice()</code> should not be used.
    testString: getUserInput => assert(!getUserInput('index').match(/slice/g));
  - text: Destructuring on <code>list</code> should be used.
    testString: assert(code.replace(/\s/g, '').match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const arr = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
```

</div>



</section>

## Solution
<section id='solution'>

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [, , ...arr] = list;
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```
</section>

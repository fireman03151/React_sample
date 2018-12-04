---
id: 587d7b8e367417b2b2512b5f
title: Pass Arguments to Avoid External Dependence in a Function
challengeType: 1
---

## Description
<section id='description'>
The last challenge was a step closer to functional programming principles, but there is still something missing.
We didn't alter the global variable value, but the function <code>incrementer</code> would not work without the global variable <code>fixedValue</code> being there.
Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.
This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.
Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.
</section>

## Instructions
<section id='instructions'>
Let's update the <code>incrementer</code> function to clearly declare its dependencies.
Write the <code>incrementer</code> function so it takes an argument, and then increases the value by one.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.
    testString: assert(fixedValue === 4, 'Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.');
  - text: Your <code>incrementer</code> function should take a parameter.
    testString: assert(incrementer.length === 1, 'Your <code>incrementer</code> function should take a parameter.');
  - text: Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.
    testString: assert(newValue === 5, 'Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer () {


  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
```

</div>



</section>

## Solution
<section id='solution'>

```js
// the global variable
var fixedValue = 4;

const incrementer = val => val + 1;

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
```
</section>

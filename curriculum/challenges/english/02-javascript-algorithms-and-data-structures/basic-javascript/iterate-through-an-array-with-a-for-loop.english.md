---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
---

## Description
<section id='description'>
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a <code>for</code> loop. This code will output each element of the array <code>arr</code> to the console:

```js
var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Remember that arrays have zero-based indexing, which means the last index of the array is <code>length - 1</code>. Our condition for this loop is <code>i < arr.length</code>, which stops the loop when <code>i</code> is equal to <code>length</code>. In this case the last iteration is <code>i === 4</code> i.e. when <code>i</code> becomes equal to <code>arr.length</code> and outputs <code>6</code> to the console.
</section>

## Instructions
<section id='instructions'>
Declare and initialize a variable <code>total</code> to <code>0</code>. Use a <code>for</code> loop to add the value of each element of the <code>myArr</code> array to <code>total</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>total</code> should be declared and initialized to 0
    testString: assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
  - text: <code>total</code> should equal 20
    testString: assert(total === 20);
  - text: You should use a <code>for</code> loop to iterate through <code>myArr</code>
    testString: assert(code.match(/for\s*\(/g).length > 1 && code.match(/myArr\s*\[/));
  - text: Do not set <code>total</code> to 20 directly
    testString: assert(!code.match(/total[\s\+\-]*=\s*(0(?!\s*[;,]?$)|[1-9])/gm));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

```

</div>

### After Test
<div id='js-teardown'>

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()

```

</div>

</section>

## Solution
<section id='solution'>

```js
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```

</section>

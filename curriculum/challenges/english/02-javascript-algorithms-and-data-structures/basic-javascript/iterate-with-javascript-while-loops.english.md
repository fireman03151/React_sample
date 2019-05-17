---
id: cf1111c1c11feddfaeb1bdef
title: Iterate with JavaScript While Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
---

## Description
<section id='description'>
You can run the same code multiple times by using a loop.
The first type of loop we will learn is called a <code>while</code> loop because it runs "while" a specified condition is true and stops once that condition is no longer true.

```js
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```

Let's try getting a while loop to work by pushing values to an array.
</section>

## Instructions
<section id='instructions'>
Push the numbers 0 through 4 to <code>myArray</code> using a <code>while</code> loop.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>while</code> loop for this.
    testString: assert(code.match(/while/g), 'You should be using a <code>while</code> loop for this.');
  - text: <code>myArray</code> should equal <code>[0,1,2,3,4]</code>.
    testString: assert.deepEqual(myArray, [0,1,2,3,4], '<code>myArray</code> should equal <code>[0,1,2,3,4]</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];

// Only change code below this line.


```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [];
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
```

</section>

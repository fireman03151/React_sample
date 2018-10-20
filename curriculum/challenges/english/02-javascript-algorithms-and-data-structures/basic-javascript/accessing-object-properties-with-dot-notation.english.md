---
id: 56533eb9ac21ba0edf2244c7
title: Accessing Object Properties with Dot Notation
challengeType: 1
---

## Description
<section id='description'>
There are two ways to access the properties of an object: dot notation (<code>.</code>) and bracket notation (<code>[]</code>), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
Here is a sample of using dot notation (<code>.</code>) to read an object's property:
<blockquote>var myObj = {<br>&nbsp;&nbsp;prop1: "val1",<br>&nbsp;&nbsp;prop2: "val2"<br>};<br>var prop1val = myObj.prop1; // val1<br>var prop2val = myObj.prop2; // val2</blockquote>
</section>

## Instructions
<section id='instructions'>
Read in the property values of <code>testObj</code> using dot notation. Set the variable <code>hatValue</code> equal to the object's property <code>hat</code> and set the variable <code>shirtValue</code> equal to the object's property <code>shirt</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hatValue</code> should be a string
    testString: assert(typeof hatValue === 'string' , '<code>hatValue</code> should be a string');
  - text: The value of <code>hatValue</code> should be <code>"ballcap"</code>
    testString: assert(hatValue === 'ballcap' , 'The value of <code>hatValue</code> should be <code>"ballcap"</code>');
  - text: <code>shirtValue</code> should be a string
    testString: assert(typeof shirtValue === 'string' , '<code>shirtValue</code> should be a string');
  - text: The value of <code>shirtValue</code> should be <code>"jersey"</code>
    testString: assert(shirtValue === 'jersey' , 'The value of <code>shirtValue</code> should be <code>"jersey"</code>');
  - text: You should use dot notation twice
    testString: assert(code.match(/testObj\.\w+/g).length > 1, 'You should use dot notation twice');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```

</section>

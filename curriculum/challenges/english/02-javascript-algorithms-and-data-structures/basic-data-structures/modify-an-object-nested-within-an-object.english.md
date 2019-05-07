---
id: 587d7b7c367417b2b2512b19
title: Modify an Object Nested Within an Object
challengeType: 1
---

## Description
<section id='description'>
Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};
```

<code>nestedObject</code> has three unique keys: <code>id</code>, whose value is a number, <code>date</code> whose value is a string, and <code>data</code>, whose value is an object which has yet another object nested within it. While structures can quickly become complex, we can still use the same notations to access the information we need.
</section>

## Instructions
<section id='instructions'>
Here we've defined an object, <code>userActivity</code>, which includes another object nested within it. You can modify properties on this nested object in the same way you modified properties in the last challenge. Set the value of the <code>online</code> key to <code>45</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>userActivity</code> has <code>id</code>, <code>date</code> and <code>data</code> properties
    testString: assert('id' in userActivity && 'date' in userActivity && 'data' in userActivity, '<code>userActivity</code> has <code>id</code>, <code>date</code> and <code>data</code> properties');
  - text: <code>userActivity</code> has a <code>data</code> key set to an object with keys <code>totalUsers</code> and <code>online</code>
    testString: assert('totalUsers' in userActivity.data && 'online' in userActivity.data, '<code>userActivity</code> has a <code>data</code> key set to an object with keys <code>totalUsers</code> and <code>online</code>');
  - text: The <code>online</code> property nested in the <code>data</code> key of <code>userActivity</code> should be set to <code>45</code>
    testString: assert(userActivity.data.online === 45, 'The <code>online</code> property nested in the <code>data</code> key of <code>userActivity</code> should be set to <code>45</code>');
  - text: The <code>online</code> property is set using dot or bracket notation
    testString: 'assert.strictEqual(code.search(/online: 45/), -1, ''The <code>online</code> property is set using dot or bracket notation'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line

// change code above this line

console.log(userActivity);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```
</section>

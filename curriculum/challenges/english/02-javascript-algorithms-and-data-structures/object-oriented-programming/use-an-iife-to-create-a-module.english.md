---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
---

## Description
<section id='description'>
An <code>immediately invoked function expression</code> (<code>IIFE</code>) is often used to group related functionality into a single object or <code>module</code>. For example, an earlier challenge defined two mixins:

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

We can group these <code>mixins</code> into a module as follows:

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invoked
```

Note that you have an <code>immediately invoked function expression</code> (<code>IIFE</code>) that returns an object <code>motionModule</code>. This returned object contains all of the <code>mixin</code> behaviors as properties of the object.
The advantage of the <code>module</code> pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

```js
motionModule.glideMixin(duck);
duck.glide();
```

</section>

## Instructions
<section id='instructions'>
Create a <code>module</code> named <code>funModule</code> to wrap the two <code>mixins</code> <code>isCuteMixin</code> and <code>singMixin</code>. <code>funModule</code> should return an object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>funModule</code> should be defined and return an object.
    testString: assert(typeof funModule === "object", '<code>funModule</code> should be defined and return an object.');
  - text: <code>funModule.isCuteMixin</code> should access a function.
    testString: assert(typeof funModule.isCuteMixin === "function", '<code>funModule.isCuteMixin</code> should access a function.');
  - text: <code>funModule.singMixin</code> should access a function.
    testString: assert(typeof funModule.singMixin === "function", '<code>funModule.singMixin</code> should access a function.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

</div>



</section>

## Solution
<section id='solution'>


```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```

</section>

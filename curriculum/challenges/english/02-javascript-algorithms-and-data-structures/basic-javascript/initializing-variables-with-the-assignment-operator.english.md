---
id: 56533eb9ac21ba0edf2244a9
title: Initializing Variables with the Assignment Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWJ4Bfb'
---

## Description
<section id='description'>
It is common to <dfn>initialize</dfn> a variable to an initial value in the same line as it is declared.
<code>var myVar = 0;</code>
Creates a new variable called <code>myVar</code> and assigns it an initial value of <code>0</code>.
</section>

## Instructions
<section id='instructions'>
Define a variable <code>a</code> with <code>var</code> and initialize it to a value of <code>9</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Initialize <code>a</code> to a value of <code>9</code>
    testString: assert(/var\s+a\s*=\s*9\s*/.test(code), 'Initialize <code>a</code> to a value of <code>9</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourVar = 19;

// Only change code below this line

```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof a !== 'undefined') {(function(a){return "a = " + a;})(a);} else { (function() {return 'a is undefined';})(); }
```

</div>

</section>

## Solution
<section id='solution'>


```js
var a = 9;
```

</section>

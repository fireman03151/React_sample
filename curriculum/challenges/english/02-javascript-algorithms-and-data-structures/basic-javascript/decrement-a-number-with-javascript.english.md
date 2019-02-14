---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
---

## Description
<section id='description'>
You can easily <dfn>decrement</dfn> or decrease a variable by one with the <code>--</code> operator.
<code>i--;</code>
is the equivalent of
<code>i = i - 1;</code>
<strong>Note</strong><br>The entire line becomes <code>i--;</code>, eliminating the need for the equal sign.
</section>

## Instructions
<section id='instructions'>
Change the code to use the <code>--</code> operator on <code>myVar</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> should equal <code>10</code>
    testString: assert(myVar === 10, '<code>myVar</code> should equal <code>10</code>');
  - text: <code>myVar = myVar - 1;</code> should be changed
    testString: assert(/var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code), '<code>myVar = myVar - 1;</code> should be changed');
  - text: Use the <code>--</code> operator on <code>myVar</code>
    testString: assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code), 'Use the <code>--</code> operator on <code>myVar</code>');
  - text: Do not change code above the line
    testString: assert(/var myVar = 11;/.test(code), 'Do not change code above the line');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myVar = 11;
myVar--;
```

</section>

---
id: cf1111c1c11feddfaeb4bdef
title: Subtract One Number from Another with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3yQtk'
---

## Description
<section id='description'>
We can also subtract one number from another.
JavaScript uses the <code>-</code> symbol for subtraction.

<strong>Example</strong>

```js
myVar = 12 - 6; // assigned 6
```


</section>

## Instructions
<section id='instructions'>
Change the <code>0</code> so the difference is <code>12</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Make the variable <code>difference</code> equal 12.
    testString: assert(difference === 12, 'Make the variable <code>difference</code> equal 12.');
  - text: Only subtract one number from 45.
    testString: assert(/var\s*difference\s*=\s*45\s*-\s*[0-9]*;(?!\s*[a-zA-Z0-9]+)/.test(code),'Only subtract one number from 45.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var difference = 45 - 0;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return 'difference = '+z;})(difference);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var difference = 45 - 33;
```

</section>

---
id: 5900f3a11000cf542c50feb4
challengeType: 5
title: 'Problem 53: Combinatoric selections'
videoUrl: ''
localeTitle: 'Problema 53: selecciones combinatorias'
---

## Description
<section id="description"> Hay exactamente diez formas de seleccionar tres de cinco, 12345: 123, 124, 125, 134, 135, 145, 234, 235, 245 y 345 En combinatoria, usamos la notación, 5C3 = 10. En general, <p> nCr = n! r! (n − r)! , donde r ≤ n, n! = n × (n − 1) × ... × 3 × 2 × 1, y 0! = 1. </p><p> No es hasta n = 23, que un valor excede de un millón: 23C10 = 1144066. ¿Cuántos, no necesariamente distintos, valores de nCr, para 1 ≤ n ≤ 100, son mayores que un millón? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinatoricSelections(1000)</code> deben devolver 4626.
    testString: 'assert.strictEqual(combinatoricSelections(1000), 4626, "<code>combinatoricSelections(1000)</code> should return 4626.");'
  - text: <code>combinatoricSelections(10000)</code> deben devolver 4431.
    testString: 'assert.strictEqual(combinatoricSelections(10000), 4431, "<code>combinatoricSelections(10000)</code> should return 4431.");'
  - text: <code>combinatoricSelections(100000)</code> deben devolver 4255.
    testString: 'assert.strictEqual(combinatoricSelections(100000), 4255, "<code>combinatoricSelections(100000)</code> should return 4255.");'
  - text: <code>combinatoricSelections(1000000)</code> deben devolver 4075.
    testString: 'assert.strictEqual(combinatoricSelections(1000000), 4075, "<code>combinatoricSelections(1000000)</code> should return 4075.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinatoricSelections(limit) {
  // Good luck!
  return 1;
}

combinatoricSelections(1000000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

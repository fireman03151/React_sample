---
title: Babbage problem
id: 594db4d0dedb4c06a2a4cefd
challengeType: 5
videoUrl: ''
localeTitle: Problema de babbage
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/Charles_Babbage" title="wp: Charles_Babbage">Charles Babbage</a> , mirando el tipo de problemas que su motor analítico podría resolver, dio este ejemplo: </p><blockquote> ¿Cuál es el entero positivo más pequeño cuyo cuadrado termina en los dígitos 269,696? </blockquote><p> - Babbage, carta a Lord Bowden, 1837; ver Hollingdale y Tootill, <i>Electronic Computers</i> , segunda edición, 1970, pág. 125. </p><p> Pensó que la respuesta podría ser 99,736, cuyo cuadrado es 9,947,269,696; pero no podía estar seguro. </p><p> La tarea es averiguar si Babbage tuvo la respuesta correcta. </p><p> Implemente una función para devolver el entero más bajo que satisfaga el problema de Babbage. Si Babbage tenía razón, devuelve el número de Babbage. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>babbage</code> es una función.
    testString: 'assert(typeof babbage === "function", "<code>babbage</code> is a function.");'
  - text: '<code>babbage(99736, 269696)</code> no debe devolver 99736 (hay una respuesta más pequeña).'
    testString: 'assert.equal(babbage(babbageAns, endDigits), answer, "<code>babbage(99736, 269696)</code> should not return 99736 (there is a smaller answer).");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function babbage (babbageNum, endDigits) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

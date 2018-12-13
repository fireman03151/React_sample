---
id: a77dbc43c33f39daa4429b4f
title: Boo who
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Boo quien
---

## Descripción
<section id="description"> Compruebe si un valor está clasificado como un primitivo booleano. Devuelve verdadero o falso. Los primitivos booleanos son verdaderos y falsos. Recuerda usar la técnica de <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Leer-Buscar-Preguntar</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instrucciones
<section id="instructions">
</section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: <code>booWho(true)</code> debe devolver true.
    testString: 'assert.strictEqual(booWho(true), true, "<code>booWho(true)</code> should return true.");'
  - text: <code>booWho(false)</code> debe devolver verdadero.
    testString: 'assert.strictEqual(booWho(false), true, "<code>booWho(false)</code> should return true.");'
  - text: '<code>booWho([1, 2, 3])</code> debe devolver falso.'
    testString: 'assert.strictEqual(booWho([1, 2, 3]), false, "<code>booWho([1, 2, 3])</code> should return false.");'
  - text: '<code>booWho([].slice)</code> debe devolver falso.'
    testString: 'assert.strictEqual(booWho([].slice), false, "<code>booWho([].slice)</code> should return false.");'
  - text: '<code>booWho({ &quot;a&quot;: 1 })</code> debe devolver falso.'
    testString: 'assert.strictEqual(booWho({ "a": 1 }), false, "<code>booWho({ "a": 1 })</code> should return false.");'
  - text: <code>booWho(1)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho(1), false, "<code>booWho(1)</code> should return false.");'
  - text: <code>booWho(NaN)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho(NaN), false, "<code>booWho(NaN)</code> should return false.");'
  - text: <code>booWho(&quot;a&quot;)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho("a"), false, "<code>booWho("a")</code> should return false.");'
  - text: <code>booWho(&quot;true&quot;)</code> debería devolver falso.
    testString: 'assert.strictEqual(booWho("true"), false, "<code>booWho("true")</code> should return false.");'
  - text: <code>booWho(&quot;false&quot;)</code> debe devolver false.
    testString: 'assert.strictEqual(booWho("false"), false, "<code>booWho("false")</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function booWho(bool) {
  // ¿Cuál es la nueva dieta milagrosa de los desarrolladores fantasma? La Booleana.
  return bool;
}

booWho(null);

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>

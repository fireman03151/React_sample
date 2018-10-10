---
id: 587d7b88367417b2b2512b45
title: Write Higher Order Arrow Functions
challengeType: 1
videoUrl: ''
localeTitle: Escribir funciones de flecha de orden superior
---

## Description
<section id="description"> Es hora de que veamos cuán poderosas son las funciones de flecha al procesar datos. Las funciones de flecha funcionan realmente bien con funciones de orden superior, como <code>map()</code> , <code>filter()</code> y <code>reduce()</code> , que toman otras funciones como argumentos para procesar colecciones de datos. Lee el siguiente código: <blockquote> FBPosts.filter (función (publicación) { <br> volver post.thumbnail! == null &amp;&amp; post.shares&gt; 100 &amp;&amp; post.likes&gt; 500; <br> }) </blockquote> Hemos escrito esto con <code>filter()</code> para al menos hacerlo de alguna manera legible. Ahora compárelo con el siguiente código que usa la sintaxis de la función de flecha en su lugar: <blockquote> FBPosts.filter ((post) =&gt; post.thumbnail! == null &amp;&amp; post.shares&gt; 100 &amp;&amp; post.likes&gt; 500) </blockquote> Este código es más breve y realiza la misma tarea con menos líneas de código. </section>

## Instructions
<section id="instructions"> Use la sintaxis de la función de flecha para calcular el cuadrado de solo los enteros positivos (los números decimales no son enteros) en la matriz <code>realNumberArray</code> y almacene la nueva matriz en la variable <code>squaredIntegers</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>squaredIntegers</code> debe ser una variable constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+squaredIntegers/g), "<code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>squaredIntegers</code> debe ser una <code>array</code>
    testString: 'assert(Array.isArray(squaredIntegers), "<code>squaredIntegers</code> should be an <code>array</code>");'
  - text: '<code>squaredIntegers</code> deben ser <code>[16, 1764, 36]</code>'
    testString: 'assert.deepStrictEqual(squaredIntegers, [16, 1764, 36], "<code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>");'
  - text: <code>function</code> palabra clave de la <code>function</code> no se utilizó.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'
  - text: bucle no debe ser utilizado
    testString: 'getUserInput => assert(!getUserInput("index").match(/(for)|(while)/g), "loop should not be used");'
  - text: '<code>map</code> , <code>filter</code> o <code>reduce</code> debe ser usado'
    testString: 'getUserInput => assert(getUserInput("index").match(/map|filter|reduce/g), "<code>map</code>, <code>filter</code>, or <code>reduce</code> should be used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

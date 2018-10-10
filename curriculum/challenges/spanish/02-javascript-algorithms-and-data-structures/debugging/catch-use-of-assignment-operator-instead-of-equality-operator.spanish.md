---
id: 587d7b85367417b2b2512b38
title: Catch Use of Assignment Operator Instead of Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: Captura el uso del operador de asignación en lugar del operador de igualdad
---

## Description
<section id="description"> Los programas de ramificación, es decir, los que hacen cosas diferentes si se cumplen ciertas condiciones, se basan en las declaraciones <code>if</code> , <code>else if</code> , y <code>else</code> en JavaScript. La condición a veces toma la forma de probar si un resultado es igual a un valor. Esta lógica se habla (en inglés, al menos) como &quot;si x es igual a y, entonces ...&quot;, que puede traducirse literalmente en código utilizando el operador <code>=</code> , o asignación. Esto conduce a un flujo de control inesperado en su programa. Como se cubrió en desafíos anteriores, el operador de asignación ( <code>=</code> ) en JavaScript asigna un valor a un nombre de variable. Y los operadores <code>==</code> y <code>===</code> verifican la igualdad (las pruebas triples <code>===</code> para la igualdad estricta, lo que significa que tanto el valor como el tipo son iguales). El siguiente código asigna <code>x</code> para ser 2, que se evalúa como <code>true</code> . Casi todos los valores en JavaScript se evalúan como <code>true</code> , excepto lo que se conoce como valores &quot;falsos&quot;: <code>false</code> , <code>0</code> , <code>&quot;&quot;</code> (una cadena vacía), <code>NaN</code> , <code>undefined</code> y <code>null</code> . <blockquote> sea ​​x = 1; <br> sea ​​y = 2; <br> si (x = y) { <br> // este bloque de código se ejecutará para cualquier valor de y (a menos que y se haya establecido originalmente como falsy) <br> } else { <br> // este bloque de código es lo que debería ejecutarse (pero no lo hará) en este ejemplo <br> } </blockquote></section>

## Instructions
<section id="instructions"> Corrija la condición para que el programa ejecute la rama derecha y se asigne el valor apropiado al <code>result</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Su código debe arreglar la condición para que verifique la igualdad, en lugar de usar la asignación.'
    testString: 'assert(result == "Not equal!", "Your code should fix the condition so it checks for equality, instead of using assignment.");'
  - text: La condición puede usar <code>==</code> o <code>===</code> para probar la igualdad.
    testString: 'assert(code.match(/x\s*?===?\s*?y/g), "The condition can use either <code>==</code> or <code>===</code> to test for equality.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

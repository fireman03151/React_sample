---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
videoUrl: ''
localeTitle: Comprobar la presencia de un elemento con indexOf ()
---

## Description
<section id="description"> Dado que las matrices se pueden cambiar, o <em>mutar</em> , en cualquier momento, no hay garantía sobre dónde estará una determinada pieza de datos en una matriz determinada, o si ese elemento aún existe. Afortunadamente, JavaScript nos proporciona otro método <code>indexOf()</code> , <code>indexOf()</code> , que nos permite verificar rápida y fácilmente la presencia de un elemento en una matriz. <code>indexOf()</code> toma un elemento como parámetro y, cuando se le llama, devuelve la posición o el índice de ese elemento, o <code>-1</code> si el elemento no existe en la matriz. Por ejemplo: <blockquote> deja que las frutas = [&#39;manzanas&#39;, &#39;peras&#39;, &#39;naranjas&#39;, &#39;melocotones&#39;, &#39;peras&#39;]; <br><br> fruits.indexOf (&#39;dates&#39;) // devuelve -1 <br> fruits.indexOf (&#39;naranjas&#39;) // devuelve 2 <br> fruits.indexOf (&#39;pears&#39;) // devuelve 1, el primer índice en el que existe el elemento </blockquote></section>

## Instructions
<section id="instructions"> <code>indexOf()</code> puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en una matriz. Hemos definido una función, <code>quickCheck</code> , que toma una matriz y un elemento como argumentos. Modifique la función utilizando <code>indexOf()</code> para que devuelva <code>true</code> si el elemento pasado existe en la matriz, y <code>false</code> si no lo hace. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;mushrooms&quot;)</code> debe devolver <code>false</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "mushrooms"), false, "<code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code> should return <code>false</code>");'
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;onions&quot;)</code> debe devolver <code>true</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "onions"), true, "<code>quickCheck(["squash", "onions", "shallots"], "onions")</code> should return <code>true</code>");'
  - text: '<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> debe devolver <code>true</code>'
    testString: 'assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true, "<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>");'
  - text: '<code>quickCheck([true, false, false], undefined)</code> debe devolver <code>false</code>'
    testString: 'assert.strictEqual(quickCheck([true, false, false], undefined), false, "<code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>");'
  - text: La función <code>quickCheck</code> debe utilizar el método <code>indexOf()</code>
    testString: 'assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1, "The <code>quickCheck</code> function should utilize the <code>indexOf()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

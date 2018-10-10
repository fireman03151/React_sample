---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
videoUrl: ''
localeTitle: Usar getters y setters para controlar el acceso a un objeto
---

## Description
<section id="description"> Puede obtener valores de un objeto y establecer un valor de una propiedad dentro de un objeto. Estos son clásicamente llamados <dfn>getters</dfn> y <dfn>setters</dfn> . Las funciones de Getter están destinadas a simplemente devolver (obtener) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada. Las funciones de Setter están destinadas a modificar (configurar) el valor de la variable privada de un objeto en función del valor pasado a la función de establecimiento. Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior. <blockquote> Libro de clase { <br> constructor (autor) { <br> this._author = autor; <br> } <br> // getter <br> obtener escritor () { <br> devuelve esto. <br> } <br> // setter <br> establecer escritor (updatedAuthor) { <br> this._author = updatedAuthor; <br> } <br> } <br> const lol = libro nuevo (&#39;anónimo&#39;); <br> console.log (lol.writer); // anónimo <br> lol.writer = &#39;wut&#39;; <br> console.log (lol.writer); // wut </blockquote> Observe la sintaxis que estamos utilizando para invocar al captador y al configurador, como si no fueran siquiera funciones. Los captadores y los definidores son importantes porque ocultan los detalles de la implementación interna. </section>

## Instructions
<section id="instructions"> Utilice <code>class</code> palabra clave de <code>class</code> para crear una clase de termostato. El constructor acepta la temperatura Fahrenheit. Ahora cree el <code>getter</code> y el <code>setter</code> en la clase, para obtener la temperatura en la escala Celsius. Recuerde que <code>C = 5/9 * (F - 32)</code> y <code>F = C * 9.0 / 5 + 32</code> , donde F es el valor de la temperatura en la escala Fahrenheit, y C es el valor de la misma temperatura en la escala Celsius Nota Cuando implementa esto, estarías siguiendo la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius. Este es el poder de getter o setter: está creando una API para otro usuario, que obtendría el resultado correcto, sin importar de cuál sea el seguimiento. En otras palabras, está abstrayendo los detalles de implementación del consumidor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Thermostat</code> debe ser una <code>class</code> con un método <code>constructor</code> definido.
    testString: 'assert(typeof Thermostat === "function" && typeof Thermostat.constructor === "function","<code>Thermostat</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: Se usó la palabra clave de <code>class</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: <code>Thermostat</code> puede ser instanciado.
    testString: 'assert(() => {const t = new Thermostat(32); return typeof t === "object" && t.temperature === 0;}, "<code>Thermostat</code> can be instantiated.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

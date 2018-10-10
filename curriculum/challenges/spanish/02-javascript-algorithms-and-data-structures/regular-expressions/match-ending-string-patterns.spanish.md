---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
videoUrl: ''
localeTitle: Coincidir con patrones de cadena
---

## Description
<section id="description"> En el último desafío, aprendiste a usar el carácter de <code>caret</code> para buscar patrones al principio de las cadenas. También hay una forma de buscar patrones al final de las cadenas. Puede buscar el final de las cadenas con el <code>dollar sign</code> <code>$</code> al final de la expresión regular. <blockquote> Let theEnding = &quot;Esta es una historia interminable&quot;; <br> Deje storyRegex = / story $ /; <br> storyRegex.test (theEnding); <br> // Devuelve true <br> Deje que noEnding = &quot;A veces una historia tenga que terminar&quot;; <br> storyRegex.test (noEnding); <br> // Devuelve falso <br></blockquote></section>

## Instructions
<section id="instructions"> Utilice el carácter de ancla ( <code>$</code> ) para que coincida con la cadena <code>&quot;caboose&quot;</code> al final de la cadena <code>caboose</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debe buscar <code>&quot;caboose&quot;</code> con el signo de dólar <code>$</code> ancla en su expresión regular.
    testString: 'assert(lastRegex.source == "caboose$", "You should search for <code>"caboose"</code> with the dollar sign <code>$</code> anchor in your regex.");'
  - text: Su expresión regular no debe usar ninguna bandera.
    testString: 'assert(lastRegex.flags == "", "Your regex should not use any flags.");'
  - text: Debe coincidir con <code>&quot;caboose&quot;</code> al final de la cadena <code>&quot;The last car on a train is the caboose&quot;</code>
    testString: 'assert(lastRegex.test("The last car on a train is the caboose"), "You should match <code>"caboose"</code> at the end of the string <code>"The last car on a train is the caboose"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

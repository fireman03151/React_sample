---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
videoUrl: ''
localeTitle: Cambia el prototipo a un nuevo objeto
---

## Description
<section id="description"> Hasta ahora ha estado agregando propiedades al <code>prototype</code> individualmente: <blockquote> Bird.prototype.numLegs = 2; </blockquote> Esto se vuelve tedioso después de algunas propiedades. <blockquote> Bird.prototype.eat = function () { <br> console.log (&quot;nom nom nom&quot;); <br> } <br><br> Bird.prototype.describe = function () { <br> console.log (&quot;Mi nombre es&quot; + this.name); <br> } </blockquote> Una forma más eficiente es establecer el <code>prototype</code> en un nuevo objeto que ya contenga las propiedades. De esta manera, las propiedades se agregan todas a la vez: <blockquote> Bird.prototype = { <br> NumLegs: 2, <br> comer: función () { <br> console.log (&quot;nom nom nom&quot;); <br> } <br> describe: function () { <br> console.log (&quot;Mi nombre es&quot; + this.name); <br> } <br> }; </blockquote></section>

## Instructions
<section id="instructions"> Agregue la propiedad <code>numLegs</code> y los dos métodos <code>eat()</code> y <code>describe()</code> al <code>prototype</code> de <code>Dog</code> estableciendo el <code>prototype</code> a un nuevo objeto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> debe establecer en un nuevo objeto.
    testString: 'assert((/Dog\.prototype\s*?=\s*?{/).test(code), "<code>Dog.prototype</code> should be set to a new object.");'
  - text: <code>Dog.prototype</code> debe tener la propiedad <code>numLegs</code> .
    testString: 'assert(Dog.prototype.numLegs !== undefined, "<code>Dog.prototype</code> should have the property <code>numLegs</code>.");'
  - text: <code>Dog.prototype</code> debe tener el método <code>eat()</code> .
    testString: 'assert(typeof Dog.prototype.eat === "function", "<code>Dog.prototype</code> should have the method <code>eat()</code>."); '
  - text: <code>Dog.prototype</code> debe tener el método <code>describe()</code> .
    testString: 'assert(typeof Dog.prototype.describe === "function", "<code>Dog.prototype</code> should have the method <code>describe()</code>."); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line

};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

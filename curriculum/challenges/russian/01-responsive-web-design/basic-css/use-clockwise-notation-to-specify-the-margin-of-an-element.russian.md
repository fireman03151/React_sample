---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
videoUrl: ''
localeTitle: 'Используйте обозначение по часовой стрелке, чтобы указать маржу элемента'
---

## Description
<section id="description"> Давайте попробуем это снова, но с <code>margin</code> в этот раз. Вместо того, чтобы указывать свойства <code>margin-top</code> , <code>margin-right</code> , <code>margin-bottom</code> и <code>margin-left</code> отдельно, вы можете указать их все в одной строке, например: <code>margin: 10px 20px 10px 20px;</code> Эти четыре значения работают как часы: верхний, правый, нижний, левый и будут давать тот же результат, что и при использовании отдельных margin свойств. </section>

## Instructions
<section id="instructions"> Используйте <code>Clockwise Notation</code> чтобы дать элементу класса <code>blue-box</code> margin <code>40px</code> на его верхней и левой сторонах, и только 20 <code>20px</code> на нижней и правой стороне. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш <code>blue-box</code> класс должен дать верхнюю часть элементов <code>40px</code> из <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-top") === "40px", "Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>margin</code>.");'
  - text: Ваш класс <code>blue-box</code> должен предоставить право элементов <code>20px</code> <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-right") === "20px", "Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>margin</code>.");'
  - text: Ваш класс с <code>blue-box</code> должен дать нижнюю часть <code>20px</code> <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>margin</code>.");'
  - text: Ваш класс с <code>blue-box</code> должен оставить слева от элементов <code>40px</code> <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-left") === "40px", "Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>margin</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

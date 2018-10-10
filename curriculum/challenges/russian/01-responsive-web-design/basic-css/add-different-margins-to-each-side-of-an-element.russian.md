---
id: bad87fee1248bd9aedf08824
title: Add Different Margins to Each Side of an Element
challengeType: 0
videoUrl: ''
localeTitle: Добавление разных полей в каждую сторону элемента
---

## Description
<section id="description"> Иногда вам нужно настроить элемент таким образом, чтобы он имел разный <code>margin</code> на каждой из сторон. CSS позволяет вам контролировать <code>margin</code> всех четырех отдельных сторон элемента с параметрами <code>margin-top</code> , <code>margin-right</code> , <code>margin-bottom</code> и <code>margin-left</code> . </section>

## Instructions
<section id="instructions"> Дайте синей коробке <code>margin</code> <code>40px</code> на ее верхней и левой стороне, но только <code>20px</code> на нижней и правой стороне. </section>

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
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
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

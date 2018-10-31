---
id: 587d781b367417b2b2512abd
title: Adjust the Size of a Header Versus a Paragraph Tag
challengeType: 0
videoUrl: ''
localeTitle: Отрегулируйте размер заголовка в сравнении с тегом абзаца
---

## Description
<section id="description"> Размер шрифта тегов заголовков (от <code>h1</code> до <code>h6</code> ) обычно должен быть больше размера шрифта тегов абзаца. Это облегчает пользователю визуальное понимание макета и уровня важности всего содержимого на странице. Для изменения размера текста в элементе используется свойство <code>font-size</code>. </section>

## Instructions
<section id="instructions"> Чтобы заголовок был значительно больше абзаца, измените <code>font-size</code> тега <code>h4</code> на 27 пикселей. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен добавить свойство <code>font-size</code> к элементу <code>h4</code> установленному в 27 пикселей.
    testString: 'assert($("h4").css("font-size") == "27px", "Your code should add a <code>font-size</code> property to the <code>h4</code> element set to 27 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;

  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
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

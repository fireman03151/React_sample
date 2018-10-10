---
id: 5a94fe7769fb03452672e463
title: Use Media Queries to Create Responsive Layouts
challengeType: 0
videoUrl: ''
localeTitle: Использование медиа-запросов для создания адаптивных макетов
---

## Description
<section id="description"> CSS Grid может быть простым способом сделать ваш сайт более отзывчивым, используя медиа-запросы, чтобы изменить области сетки, изменить размеры сетки и изменить порядок размещения элементов. В предварительном просмотре, когда ширина области просмотра составляет 300 пикселей или более, количество столбцов изменяется от 1 до 2. Область рекламы затем занимает левый столбец полностью. </section>

## Instructions
<section id="instructions"> Когда ширина области просмотра составляет <code>400px</code> или более, сделайте область заголовка <code>400px</code> верхней строкой полностью, а нижняя <code>400px</code> полностью занимает нижнюю строку. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Когда область просмотра составляет <code>400px</code> или более, класс <code>container</code> должен иметь свойство <code>grid-template-areas</code> в котором области нижнего колонтитула и заголовка занимают верхнюю и нижнюю строки соответственно, а объявление и контент занимают левый и правый столбцы средней строки.'
    testString: 'assert(code.match(/@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi), "When the viewport is <code>400px</code> or more, <code>container</code> class should have a <code>grid-template-areas</code> property in which the footer and header areas occupy the top and bottom rows respectively and advert and content occupy the left and right columns of the middle row.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      /* change the code below this line */

      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";

    /* change the code above this line */
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
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

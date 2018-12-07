---
id: 587d7dbd367417b2b2512bb4
title: Store Data with Sass Variables
challengeType: 0
videoUrl: ''
localeTitle: Сохранять данные с помощью переменных Sass
---

## Description
<section id="description"> Одна из особенностей Sass, которая отличается от CSS, заключается в использовании переменных. Они объявляются и устанавливаются для хранения данных, похожих на JavaScript. В JavaScript переменные определяются с использованием слов <code>let</code> и <code>const</code> . В Sass переменные начинаются с <code>$</code> за которым следует имя переменной. Вот несколько примеров: <blockquote> $ main-fonts: Arial, sans-serif; <br> $ headings-color: green; <br><br> // Для использования переменных: <br> h1 { <br> font-family: $ main-fonts; <br> цвет: $ headings-color; <br> } </blockquote> Одним из примеров полезности переменных является то, что ряд элементов должен быть одного цвета. Если этот цвет изменен, единственным местом для редактирования кода является значение переменной. </section>

## Instructions
<section id="instructions"> Создайте переменную <code>$text-color</code> и установите ее на красный. Затем измените значение свойства <code>color</code> для <code>.blog-post</code> и <code>h2</code> на переменную <code>$text-color</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Ваш код должен иметь переменную Sass, объявленную для <code>$text-color</code> со значением красного цвета.'
    testString: 'assert(code.match(/\$text-color:\s*?red;/g), "Your code should have a Sass variable declared for <code>$text-color</code> with a value of red.");'
  - text: Ваш код должен использовать переменную <code>$text-color</code> для изменения <code>color</code> для <code>.blog-post</code> и <code>h2</code> .
    testString: 'assert(code.match(/color:\s*?\$text-color;/g), "Your code should use the <code>$text-color</code> variable to change the <code>color</code> for the <code>.blog-post</code> and <code>h2</code> items.");'
  - text: <code>.blog-post</code> должен иметь цвет красного цвета.
    testString: 'assert($(".blog-post").css("color") == "rgb(255, 0, 0)", "Your <code>.blog-post</code> element should have a </code>color</code> of red.");'
  - text: Ваши элементы <code>h2</code> должны иметь красный цвет.
    testString: 'assert($("h2").css("color") == "rgb(255, 0, 0)", "Your <code>h2</code> elements should have a </code>color</code> of red.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
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

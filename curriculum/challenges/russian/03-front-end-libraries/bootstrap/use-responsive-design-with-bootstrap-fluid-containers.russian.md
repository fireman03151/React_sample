---
id: bad87fee1348bd9acde08712
title: Use Responsive Design with Bootstrap Fluid Containers
challengeType: 0
videoUrl: ''
localeTitle: Используйте адаптивный дизайн с подвижными контейнерами Bootstrap
---

## Description
В секциях HTML5 и CSS в freeCodeCamp мы создали Приложение для фотографий кошек. Давайте вернемся к нему. В этот раз мы стилизуем его используя, популярный адаптивный фреймворк CSS - Bootstrap.

Bootstrap определит насколько широк ваш экран и ответит измением размера ваших HTML элементов. Отсюда и название `адаптивный дизайн`.

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>div</code> должен иметь класс <code>container-fluid</code>.'
    testString: 'assert($("div").hasClass("container-fluid"), "Your <code>div</code> element should have the class <code>container-fluid</code>.");'
  - text: 'Убедитесь, что ваш элемент <code>div</code> имеет закрывающий тег'
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure your <code>div</code> element has a closing tag.");'
  - text: 'Убедитесь, что вы вставили все элементы HTML после закрывающего тега <code>style</code> в <code>.container-fluid</code>.'
    testString: 'assert($(".container-fluid").children().length >= 8, "Make sure you have nested all HTML elements after the closing <code>style</code> tag in <code>.container-fluid</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality"> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Crazy</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

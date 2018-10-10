---
id: bad87fee1348bd9aedf07756
title: Override All Other Styles by using Important
challengeType: 0
videoUrl: ''
localeTitle: 'Переопределите все остальные стили, используя важные'
---

## Description
<section id="description"> Ура! Мы просто доказали, что встроенные стили переопределяют все объявления CSS в вашем элементе <code>style</code> . Но ждать. Есть один последний способ переопределить CSS. Это самый мощный метод для всех. Но прежде чем мы это сделаем, давайте поговорим о том, почему вы хотели бы переопределить CSS. Во многих ситуациях вы будете использовать библиотеки CSS. Они могут случайно переопределить ваш собственный CSS. Поэтому, когда вам абсолютно необходимо убедиться, что элемент имеет определенный CSS, вы можете использовать <code>!important</code> Давайте вернемся к нашему объявлению класса <code>pink-text</code> . Помните, что наш класс <code>pink-text</code> был переопределен последующими объявлениями классов, декларациями id и встроенными стилями. </section>

## Instructions
<section id="instructions"> Давайте добавим ключевое слово <code>!important</code> для вашего объявления цвета вашего розового текста, чтобы 100% убедиться, что ваш элемент <code>h1</code> будет розовым. Пример того, как это сделать: <code>color: red !important;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш элемент <code>h1</code> должен иметь класс <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Ваш элемент <code>h1</code> должен иметь <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: Ваш элемент <code>h1</code> должен иметь идентификатор <code>orange-text</code> .
    testString: 'assert($("h1").attr("id") === "orange-text", "Your <code>h1</code> element should have the id of <code>orange-text</code>.");'
  - text: 'Ваш элемент <code>h1</code> должен иметь встроенный стиль <code>color: white</code> .'
    testString: 'assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi), "Your <code>h1</code> element should have the inline style of <code>color&#58; white</code>.");'
  - text: 'В объявлении класса <code>pink-text</code> должно быть ключевое слово <code>!important</code> Important, чтобы переопределить все другие объявления.'
    testString: 'assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g), "Your <code>pink-text</code> class declaration should have the <code>!important</code> keyword to override all other declarations.");'
  - text: Ваш элемент <code>h1</code> должен быть розовым.
    testString: 'assert($("h1").css("color") === "rgb(255, 192, 203)", "Your <code>h1</code> element should be pink.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

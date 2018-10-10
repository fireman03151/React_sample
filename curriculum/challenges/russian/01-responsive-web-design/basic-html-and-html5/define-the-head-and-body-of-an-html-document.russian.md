---
id: 587d78aa367417b2b2512aec
title: Define the Head and Body of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: Определение заголовка и тела документа HTML
---

## Description
<section id="description"> Вы можете добавить еще один уровень организации в свой HTML-документ в тегах <code>html</code> с элементами <code>head</code> и <code>body</code> . Любая разметка с информацией о Вашей странице будет идти в <code>head</code> метку. Тогда любая метка с содержимым страницы (то, что отображается для пользователя) войдет в тег <code>body</code> . Элементы метаданных, такие как <code>link</code> , <code>meta</code> , <code>title</code> и <code>style</code> , обычно входят в элемент <code>head</code> . Вот пример макета страницы: <blockquote> &lt;! DOCTYPE html&gt; <br> &lt;HTML&gt; <br> &lt;Голова&gt; <br> &lt;! - элементы метаданных -&gt; <br> &lt;/ HEAD&gt; <br> &lt;Тело&gt; <br> &lt;! - содержание страницы -&gt; <br> &lt;/ Body&gt; <br> &lt;/ Html&gt; </blockquote></section>

## Instructions
<section id="instructions"> Отредактируйте разметку, чтобы появилась <code>head</code> и <code>body</code> . Элемент <code>head</code> должен включать только <code>title</code> , а элемент <code>body</code> должен включать только <code>h1</code> и <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: На странице должен быть только один элемент <code>head</code> .
    testString: 'assert($("head").length == 1, "There should be only one <code>head</code> element on the page.");'
  - text: На странице должен быть только один элемент <code>body</code> .
    testString: 'assert($("body").length == 1, "There should be only one <code>body</code> element on the page.");'
  - text: Элемент <code>head</code> должен быть дочерним элементом <code>html</code> .
    testString: 'assert($("html").children("head").length == 1, "The <code>head</code> element should be a child of the <code>html</code> element.");'
  - text: Элемент <code>body</code> должен быть дочерним элементом <code>html</code> .
    testString: 'assert($("html").children("body").length == 1, "The <code>body</code> element should be a child of the <code>html</code> element.");'
  - text: Элемент <code>head</code> должен обернуть элемент <code>title</code> .
    testString: 'assert(code.match(/<head>\s*?<title>\s*?.*?\s*?<\/title>\s*?<\/head>/gi), "The <code>head</code> element should wrap around the <code>title</code> element.");'
  - text: Элемент <code>body</code> должен обернуть оба элемента <code>h1</code> и <code>p</code> .
    testString: 'assert($("body").children("h1").length == 1 && $("body").children("p").length == 1, "The <code>body</code> element should wrap around both the <code>h1</code> and <code>p</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

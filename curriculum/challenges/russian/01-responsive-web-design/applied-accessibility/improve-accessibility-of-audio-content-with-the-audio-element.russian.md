---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: ''
localeTitle: Улучшаем доступность аудиоконтента
---


## Description
<section id="description"> В HTML5 <code>audio</code> элемент дает смысловое значение, когда он оборачивает звук или аудио поток контента в разметке. Аудиоконтент также нуждается в текстовой альтернативе, доступной для людей, которые являются глухими или слабослышащими. Это можно сделать рядом с текстом на странице или ссылкой на стенограмму. <code>audio</code> тег поддерживает атрибут <code>controls</code> . Это показывает воспроизведение по умолчанию в браузере, паузу и другие элементы управления и поддерживает функциональность клавиатуры. Это логический атрибут, то есть он не нуждается в значении, его присутствие на теге включает настройку. Вот пример: <blockquote> &lt;audio id = &quot;meowClip&quot; элементы управления&gt; <br> &lt;источник src = &quot;audio / meow.mp3&quot; type = &quot;audio / mpeg&quot; /&gt; <br> &lt;источник src = &quot;audio / meow.ogg&quot; type = &quot;audio / ogg&quot; /&gt; <br> &lt;/ Аудио&gt; <br></blockquote> <strong>Заметка</strong> <br> Мультимедийный контент обычно имеет как визуальные, так и звуковые компоненты. Для этого нужны синхронизированные подписи и расшифровка стенограммы, чтобы пользователи с визуальными и / или слуховыми нарушениями могли получить к ней доступ. Как правило, веб-разработчик не несет ответственности за создание титров или расшифровки, но должен знать, чтобы их включать. </section>

## Instructions
<section id="instructions"> Пора отдохнуть от Camper Cat и познакомиться с кемпером Zersiax (@zersiax), чемпионом доступности и пользователем экрана. Чтобы услышать клип его экранного ридера в действии, добавьте <code>audio</code> элемент после <code>p</code> . Включите атрибут <code>controls</code> . Затем поместите <code>source</code> тег внутри <code>audio</code> тегов с атрибутом <code>src</code> установленным на «https://s3.amazonaws.com/freecodecamp/screen-reader.mp3», и <code>type</code> атрибут «audio / mpeg». <strong>Заметка</strong> <br> Звуковой клип может звучать быстро и быть трудно понятен, но это обычная скорость для пользователей с экрана. </section>


## Tests (Тесты)
<section id='tests'>

```yml
tests:
  - text: В вашем коде должен быть один <code>audio</code> тег.
    testString: 'assert($("audio").length === 1, "Your code should have one <code>audio</code> tag.");'
  - text: 'Убедитесь, что ваш <code>audio</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/audio>/g).length === 1 && code.match(/<audio.*>[\s\S]*<\/audio>/g), "Make sure your <code>audio</code> element has a closing tag.");'
  - text: <code>audio</code> тег должен иметь атрибут <code>controls</code> .
    testString: 'assert($("audio").attr("controls"), "The <code>audio</code> tag should have the <code>controls</code> attribute.");'
  - text: Ваш код должен иметь один тег <code>source</code> .
    testString: 'assert($("source").length === 1, "Your code should have one <code>source</code> tag.");'
  - text: Ваш тег <code>source</code> должен находиться внутри <code>audio</code> тегов.
    testString: 'assert($("audio").children("source").length === 1, "Your <code>source</code> tag should be inside the <code>audio</code> tags.");'
  - text: Значение атрибута <code>src</code> в теге <code>source</code> должно точно соответствовать ссылке в инструкциях.
    testString: 'assert($("source").attr("src") === "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3", "The value for the <code>src</code> attribute on the <code>source</code> tag should match the link in the instructions exactly.");'
  - text: Ваш код должен включать атрибут <code>type</code> в тег <code>source</code> со значением audio / mpeg.
    testString: 'assert($("source").attr("type") === "audio/mpeg", "Your code should include a <code>type</code> attribute on the <code>source</code> tag with a value of audio/mpeg.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>



  </main>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// здесь должно быть ваше решение
```
</section>

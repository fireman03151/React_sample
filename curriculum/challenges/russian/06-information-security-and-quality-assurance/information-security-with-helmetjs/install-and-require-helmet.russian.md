---
id: 587d8247367417b2b2512c36
title: Install and Require Helmet
challengeType: 2
videoUrl: ''
localeTitle: Установить и потребовать шлем
---

## Description
<section id="description"> Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Шлем помогает защитить ваши приложения Express, установив различные заголовки HTTP. Установите пакет, а затем выполните его. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Зависимость «шлема» должна быть в package.json
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/package.json").then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "helmet"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

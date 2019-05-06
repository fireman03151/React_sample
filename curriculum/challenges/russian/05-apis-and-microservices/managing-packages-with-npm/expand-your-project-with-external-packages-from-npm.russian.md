---
id: 587d7fb4367417b2b2512c00
title: Expand Your Project with External Packages from npm
localeTitle: Расширьте свой проект с помощью внешних пакетов от npm
challengeType: 2
---

## Description
<section id='description'> 
Одной из главных причин использования менеджера пакетов является их мощное управление зависимостями. Вместо того, чтобы вручную проверять наличие всех зависимостей при настройке проекта на новом компьютере, npm автоматически устанавливает все для вас. Но как npm может точно знать, что нужно вашему проекту? Познакомьтесь с разделом зависимостей вашего package.json. 
В разделе зависимостей пакеты, необходимые для вашего проекта, хранятся в следующем формате: 
<code>"dependencies": {</code> 
<code>"package-name": "version",</code> 
<code>"express": "4.14.0"</code> 
<code>}</code> 
Инструкции 
Добавьте версию 2.14.0 момента пакета в поле зависимостей вашего пакета. Json 
Moment - удобная библиотека для работы со временем и датами. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: «Зависимости» должны включать «момент»
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: «момент» версия должна быть «2.14.0»
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.match(packJson.dependencies.moment, /^[\^\~]?2\.14\.0/, ''Wrong version of "moment" installed. It should be 2.14.0''); }, xhr => { throw new Error(xhr.responseText); })'

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

<table>
    <tr>
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربي </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# Как работать над задачами по разработке

### Изменения на GitHub

Каждая задача хранится в собственном файле разметки. Это упрощает редактирование задач прямо из GitHub.

Вы можете сделать изменения без каких-либо операций в вашей локальной системе.

После того, как вы найдете файл, который хотите изменить в интерфейсе GitHub, щелкните значок карандаша, чтобы начать редактирование файла. Это автоматически создаст форк проекта, если у вас его еще нет.

Вы также можете клонировать проект и редактировать локально на своем компьютере. Для получения помощи, прочитайте [гайд для содействующих](/CONTRIBUTING.md).

### Шаблон задачи

Вот шаблон того, как выглядят файлы разметки задачи.

````md
---
id: Уникальный идентификатор (алфавитно-цифровой, MongoDB _id)
title: Название задачи
challengeType: 0
guideUrl: 'url статьи руководства'
videoUrl: 'url видео объяснения'
---

## Описание
<section id='description'>
Описание задачи и того, что требуется для прохождения
</section>

## Инструкции
<section id='instructions'>
Инструкции о том, что именно нужно сделать.
</section>
## Тесты
<section id='tests'>

``` yml
- text: Должен возвращать  "foo".
  testString: 'A stringified function using Chai asserts'
```

</section>

<div id='js-seed'>

```js
Код по умолчанию отображается в редакторе.
```

</div>

### Перед тестом
<div id='js-setup'>

```js
Код для настройки тестирования.
```

</div>

</section>

### После теста
<div id='js-teardown'>

```js
Код для проверки пройден ли тест
```

</div>

</section>

## Решение
<section id='solution'>

```js
Код решения задачи.
```

</section>
````

### Полезные ссылки

Создание и редактирование задач:

1. [Руководство по оформлению задач](style-guide-for-curriculum-challenges.md) - как создавать и оформлять задачи

2. [Типы задач](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - что значит номер типа задачи (перечисление).

3. [Помощь FreeCodeCamp - Написание тестов для ES6 задач](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - видео [Ethan Arrowood](https://twitter.com/ArrowoodTech) как он внес свой вклад в старую версию учебного плана

---
id: 587d7fb0367417b2b2512bee
title: Start a Working Express Server
localeTitle: Запустить работающий экспресс-сервер
challengeType: 2
---

## Description
<section id='description'> 
В первых двух строках файла myApp.js вы можете увидеть, как легко создать объект приложения Express. У этого объекта есть несколько методов, и мы изучим многие из них в этих задачах. Одним из основных методов является <code>app.listen(port)</code> . Он говорит вашему серверу прослушивать данный порт, переводя его в рабочее состояние. Вы можете увидеть это внизу файла. Это внутри комментариев, потому что для тестирования нам нужно, чтобы приложение работало в фоновом режиме. Весь код, который вы можете добавить, находится между этими двумя основными частями. Glitch хранит номер порта в переменной окружения <code>process.env.PORT</code> . Его значение <code>3000</code> . 
Давай обслужим нашу первую строку! В Express маршруты имеют следующую структуру: <code>app.METHOD(PATH, HANDLER)</code> . МЕТОД - это http-метод в нижнем регистре. PATH - это относительный путь на сервере (это может быть строка или даже регулярное выражение). HANDLER - это функция, которая вызывает Express при совпадении маршрута. 
Обработчики принимают <code>function(req, res) {...}</code> формы <code>function(req, res) {...}</code> , где req - объект запроса, а res - объект ответа. Например, обработчик 
<blockquote>function(req, res) {<br> res.send('Response String');<br>}</blockquote> 
будет служить строкой «Response String». 
Используйте метод <code>app.get()</code> для обслуживания строки Hello Express для получения запросов, соответствующих пути / root. Убедитесь, что ваш код работает, просматривая журналы, затем просмотрите результаты в своем браузере, нажав кнопку «Показать вживую» в пользовательском интерфейсе Glitch. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваше приложение должно обслуживать строку «Hello Express»
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.equal(data, ''Hello Express'', ''Your app does not serve the text "Hello Express"''); }, xhr => { throw new Error(xhr.responseText); })'

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

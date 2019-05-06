---
id: 587d7fb1367417b2b2512bf4
title: Chain Middleware to Create a Time Server
localeTitle: Промежуточное ПО для создания сервера времени
challengeType: 2
---

## Description
<section id='description'> 
<code>app.METHOD(path, middlewareFunction)</code> можно смонтировать по определенному маршруту, используя <code>app.METHOD(path, middlewareFunction)</code> . Промежуточное программное обеспечение также может быть связано внутри определения маршрута. 
Посмотрите на следующий пример: 
<blockquote>app.get('/user', function(req, res, next) {<br>  req.user = getTheUserSync();  // Hypothetical synchronous operation<br>  next();<br>}, function(req, res) {<br>  res.send(req.user);<br>})</blockquote> 
Этот подход полезен для разделения операций сервера на более мелкие единицы. Это приводит к лучшей структуре приложения и возможности повторного использования кода в разных местах. Этот подход также можно использовать для проверки данных. В каждой точке стека промежуточного программного обеспечения вы можете заблокировать выполнение текущей цепочки и передать управление функциям, специально разработанным для обработки ошибок. Или вы можете передать управление следующему подходящему маршруту для обработки особых случаев. Мы увидим, как в расширенном разделе Экспресс. 
В маршруте <code>app.get('/now', ...)</code> функцию промежуточного программного обеспечения и конечный обработчик. В функции промежуточного программного обеспечения вы должны добавить текущее время к объекту запроса в ключе <code>req.time</code> . Вы можете использовать <code>new Date().toString()</code> . В обработчике ответьте объектом JSON, взяв структуру <code>{time: req.time}</code> . 
Подсказка: тест не пройдет, если вы не подключите промежуточное ПО. Если вы смонтируете функцию где-то еще, тест не пройдёт, даже если результат вывода верный. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Конечная точка / now должна иметь смонтированное промежуточное ПО
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { assert.equal(data.stackLength, 2, ''"/now" route has no mounted middleware''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Конечная точка / now должна возвращать время +/- 20 секунд
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { var now = new Date(); assert.isAtMost(Math.abs(new Date(data.time) - now), 20000, ''the returned time is not between +- 20 secs from now''); }, xhr => { throw new Error(xhr.responseText); })'

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

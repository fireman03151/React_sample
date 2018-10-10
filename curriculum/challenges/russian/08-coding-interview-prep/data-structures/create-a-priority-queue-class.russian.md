---
id: 587d8255367417b2b2512c74
title: Create a Priority Queue Class
challengeType: 1
videoUrl: ''
localeTitle: Создание класса очереди приоритетов
---

## Description
<section id="description"> В этом вызове вы создадите очередь приоритетов. Приоритетная очередь - это особый тип очереди, в которой элементы могут иметь дополнительную информацию, которая определяет их приоритет. Это может быть просто представлено целым числом. Приоритет элемента переопределяет порядок размещения при определении элементов последовательности. Если элемент с более высоким приоритетом помещается в очередь после элементов с более низким приоритетом, элемент с более высоким приоритетом будет удален до всех остальных. Например, предположим, что у нас есть очередь приоритетов с тремя элементами: <code>[[&#39;kitten&#39;, 2], [&#39;dog&#39;, 2], [&#39;rabbit&#39;, 2]]</code> Здесь второе значение (целое число) представляет приоритет элемента , Если мы ставим в очередь <code>[&#39;human&#39;, 1]</code> с приоритетом <code>1</code> (при условии, что более низкие приоритеты заданы приоритетом), тогда это будет первый элемент, который будет удален. Коллекция понравится: <code>[[&#39;human&#39;, 1], [&#39;kitten&#39;, 2], [&#39;dog&#39;, 2], [&#39;rabbit&#39;, 2]]</code> . Мы начали писать <code>PriorityQueue</code> в редакторе кода. Вам нужно будет добавить метод <code>enqueue</code> для добавления элементов с приоритетом, метод <code>dequeue</code> для удаления элементов, метод <code>size</code> для возврата количества элементов в очереди, <code>front</code> метод для возврата элемента в передней части очереди и наконец, метод <code>isEmpty</code> , который вернет <code>true</code> если очередь пуста или <code>false</code> если это не так. <code>enqueue</code> должна принимать элементы с форматом, указанным выше ( <code>[&#39;human&#39;, 1]</code> ), где <code>1</code> представляет приоритет. <code>dequeue</code> должен возвращать только текущий элемент, а не его приоритет. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Класс <code>Queue</code> должен иметь метод <code>enqueue</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.enqueue === "function")}()), "Your <code>Queue</code> class should have a <code>enqueue</code> method.");'
  - text: Класс <code>Queue</code> должен иметь метод <code>dequeue</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.dequeue === "function")}()), "Your <code>Queue</code> class should have a <code>dequeue</code> method.");'
  - text: Класс <code>Queue</code> должен иметь метод <code>size</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.size === "function")}()), "Your <code>Queue</code> class should have a <code>size</code> method.");'
  - text: Класс <code>Queue</code> должен иметь метод <code>isEmpty</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.isEmpty === "function")}()), "Your <code>Queue</code> class should have an <code>isEmpty</code> method.");'
  - text: 'Ваш PriorityQueue должен правильно отслеживать текущее количество элементов, используя метод <code>size</code> поскольку элементы находятся в очереди и удалены.'
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["David Brown", 2]); test.enqueue(["Jon Snow", 1]); var size1 = test.size(); test.dequeue(); var size2 = test.size(); test.enqueue(["A", 3]); test.enqueue(["B", 3]); test.enqueue(["C", 3]); return (size1 === 2 && size2 === 1 && test.size() === 4)}()), "Your PriorityQueue should correctly keep track of the current number of items using the <code>size</code> method as items are enqueued and dequeued.");'
  - text: Метод <code>isEmpty</code> должен возвращать <code>true</code> когда очередь пуста.
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["A", 1]); test.enqueue(["B", 1]); test.dequeue(); var first = test.isEmpty(); test.dequeue(); return (!first && test.isEmpty()); }()), "The <code>isEmpty</code> method should return <code>true</code> when the queue is empty.");'
  - text: Очередь приоритета должна возвращать элементы с более высоким приоритетом перед элементами с более низким приоритетом и возвращать элементы в порядке «первым в первом порядке» в противном случае.
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["A", 5]); test.enqueue(["B", 5]); test.enqueue(["C", 5]); test.enqueue(["D", 3]); test.enqueue(["E", 1]); test.enqueue(["F", 7]); var result = []; result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); return result.join("") === "EDABCF";}()), "The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line

    // Only change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

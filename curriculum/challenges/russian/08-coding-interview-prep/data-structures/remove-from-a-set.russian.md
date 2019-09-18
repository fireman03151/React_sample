---
id: 587d8253367417b2b2512c6b
title: Remove from a Set
challengeType: 1
videoUrl: ''
localeTitle: Удалить из набора
---

## Description
<section id='description'>
В этих упражнениях мы собираемся создать функцию удаления для нашего набора. Функция должна быть названа <code>this.remove</code> . Эта функция должна принимать значение и проверять, существует ли он в наборе. Если это так, удалите это значение из набора и верните true. В противном случае верните false.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Класс <code>Set</code> должен иметь метод <code>remove</code> .
    testString: 'assert((function(){var test = new Set(); return (typeof test.remove === "function")}()), "Your <code>Set</code> class should have a <code>remove</code> method.");'
  - text: 'Метод <code>remove</code> должен удалять только те элементы, которые присутствуют в наборе.'
    testString: 'assert.deepEqual((function(){var test = new Set(); test.add("a");test.add("b");test.remove("c"); return test.values(); })(), ["a", "b"], "Your <code>remove</code> method should only remove items that are present in the set.");'
  - text: Ваш метод <code>remove</code> должен удалить данный элемент из набора.
    testString: 'assert((function(){var test = new Set(); test.add("a");test.add("b");test.remove("a"); var vals = test.values(); return (vals[0] === "b" && vals.length === 1)}()), "Your <code>remove</code> method should remove the given item from the set.");'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // change code below this line
    // change code above this line
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

---
id: 587d8259367417b2b2512c84
title: Create a Trie Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Создание дерева поиска Trie
---

## Description
<section id="description"> Здесь мы перейдем от двоичных деревьев поиска и рассмотрим другой тип древовидной структуры, называемый trie. Trie - это упорядоченное дерево поиска, обычно используемое для хранения строк или более общих ассоциативных массивов или динамических наборов данных, в которых ключи являются строками. Они очень хороши в хранении наборов данных, когда многие ключи имеют перекрывающиеся префиксы, например, все слова в словаре. В отличие от двоичного дерева, узлы не связаны с фактическими значениями. Вместо этого путь к узлу представляет собой конкретный ключ. Например, если бы мы хотели сохранить строковый код в trie, у нас было бы четыре узла, по одному для каждой буквы: c - o - d - e. После этого пути через все эти узлы затем создадут код как строку - этот путь является ключом, который мы сохранили. Затем, если бы мы хотели добавить строковое кодирование, он разделил бы первые три узла кода, прежде чем разветвиться после d. Таким образом, большие наборы данных могут храниться очень компактно. Кроме того, поиск может быть очень быстрым, поскольку он фактически ограничен длиной строки, которую вы храните. Кроме того, в отличие от двоичных деревьев узел может хранить любое количество дочерних узлов. Как вы могли догадаться из приведенного выше примера, некоторые метаданные обычно хранятся в узлах, которые содержат конец ключа, так что на последующих обходах этот ключ все еще может быть восстановлен. Например, если мы добавили коды в наш пример выше, нам понадобится некоторый способ узнать, что e в коде представляет собой конец ключа, который был ранее введен. В противном случае эта информация будет эффективно потеряна при добавлении кодов. Инструкции: создадим три для хранения слов. Он будет принимать слова через метод добавления и хранить их в структуре данных trie. Это также позволит нам запросить, является ли данная строка словом с методом isWord и извлекает все слова, введенные в trie с помощью метода печати. isWord должен возвращать логическое значение, и print должен возвращать массив всех этих слов в виде строковых значений. Чтобы мы убедились, что эта структура данных реализована правильно, мы предоставили структуру узла для каждого узла в дереве. Каждый узел будет объектом с свойством keys, являющимся объектом JavaScript Map. Это будет содержать отдельные буквы, которые являются действительными ключами каждого узла. Мы также создали свойство конца на узлах, которое может быть установлено в true, если узел представляет собой завершение слова. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: У Trie есть метод добавления.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.add == "function") }()), "The Trie has an add method.");'
  - text: Метод Trie имеет метод печати.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.print == "function") }()), "The Trie has a print method.");'
  - text: У Trie есть метод isWord.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.isWord == "function") }()), "The Trie has an isWord method.");'
  - text: 'Метод print возвращает все элементы, добавленные в trie как строки в массиве.'
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; test.add("jump"); test.add("jumps"); test.add("jumped"); test.add("house"); test.add("mouse"); var added = test.print(); return (added.indexOf("jump") != -1 && added.indexOf("jumps") != -1 && added.indexOf("jumped") != -1 && added.indexOf("house") != -1 && added.indexOf("mouse") != -1 && added.length == 5); }()), "The print method returns all items added to the trie as strings in an array.");'
  - text: 'Метод isWord возвращает true только для слов, добавленных в trie и false для всех других слов.'
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; test.add("hop"); test.add("hops"); test.add("hopped"); test.add("hoppy"); test.add("hope"); return (test.isWord("hop") && !test.isWord("ho") && test.isWord("hopped") && !test.isWord("hopp") && test.isWord("hoppy") && !test.isWord("hoping")); }()), "The isWord method returns true only for words added to the trie and false for all other words.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

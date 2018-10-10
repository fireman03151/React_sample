---
id: 587d7b90367417b2b2512b65
title: Return Part of an Array Using the slice Method
challengeType: 1
videoUrl: ''
localeTitle: Возвращаемая часть массива Использование метода среза
---

## Description
<section id="description"> Метод <code>slice</code> возвращает копию некоторых элементов массива. Он может принимать два аргумента, первый дает индекс, где начинается срез, второй - индекс для того, где положить конец среза (и он не включен). Если аргументы не предоставлены, по умолчанию начинается с начала массива до конца, что является простым способом сделать копию всего массива. Метод <code>slice</code> не изменяет исходный массив, а возвращает новый. Вот пример: <blockquote> var arr = [&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;]; <br> var newArray = arr.slice (1, 3); <br> // Устанавливает newArray в [«Собака», «Тигр»] </blockquote></section>

## Instructions
<section id="instructions"> Используйте <code>slice</code> метод в <code>sliceArray</code> функции вернуть часть <code>anim</code> массива , учитывая предоставленные <code>beginSlice</code> и <code>endSlice</code> индексов. Функция должна возвращать массив. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать метод <code>slice</code> .
    testString: 'assert(code.match(/\.slice/g), "Your code should use the <code>slice</code> method.");'
  - text: Переменная <code>inputAnim</code> не должна изменяться.
    testString: 'assert(JSON.stringify(inputAnim) === JSON.stringify(["Cat", "Dog", "Tiger", "Zebra", "Ant"]), "The <code>inputAnim</code> variable should not change.");'
  - text: '<code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 1, 3)</code> должны вернуть <code>[&quot;Dog&quot;, &quot;Tiger&quot;]</code> .'
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)) === JSON.stringify(["Dog", "Tiger"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)</code> should return <code>["Dog", "Tiger"]</code>.");'
  - text: '<code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 0, 1)</code> должны возвращать <code>[&quot;Cat&quot;]</code> .'
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)) === JSON.stringify(["Cat"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)</code> should return <code>["Cat"]</code>.");'
  - text: '<code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 1, 4)</code> должны возвращать <code>[&quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;]</code> .'
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)) === JSON.stringify(["Dog", "Tiger", "Zebra"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)</code> should return <code>["Dog", "Tiger", "Zebra"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line


  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

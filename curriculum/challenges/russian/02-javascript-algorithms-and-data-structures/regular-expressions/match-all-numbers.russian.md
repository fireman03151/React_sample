---
id: 5d712346c441eddfaeb5bdef
title: Match All Numbers
challengeType: 1
videoUrl: ''
localeTitle: Совпадение всех номеров
---

## Description
<section id="description"> Вы узнали ярлыки для общих строковых шаблонов, таких как alphanumerics. Другой общий шаблон - это просто цифры или цифры. Ярлык для поиска цифровых символов - <code>\d</code> , с нижним регистром <code>d</code> . Это равно классу символов <code>[0-9]</code> , который ищет один символ любого числа от нуля до девяти. </section>

## Instructions
<section id="instructions"> Используйте класс сокращенного символа <code>\d</code> чтобы подсчитать, сколько цифр указано в названиях фильмов. Письменные номера («шесть» вместо 6) не учитываются. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вашему регулярному выражению следует использовать символ ярлыка для соответствия символам цифр
    testString: 'assert(/\\d/.test(numRegex.source), "Your regex should use the shortcut character to match digit characters");'
  - text: В вашем регулярном выражении должен использоваться глобальный флаг.
    testString: 'assert(numRegex.global, "Your regex should use the global flag.");'
  - text: Ваше регулярное выражение должно найти 1 цифру в <code>&quot;9&quot;</code> .
    testString: 'assert("9".match(numRegex).length == 1, "Your regex should find 1 digit in <code>"9"</code>.");'
  - text: ''
    testString: 'assert("Catch 22".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"Catch 22"</code>.");'
  - text: ''
    testString: 'assert("101 Dalmatians".match(numRegex).length == 3, "Your regex should find 3 digits in <code>"101 Dalmatians"</code>.");'
  - text: ''
    testString: 'assert("One, Two, Three".match(numRegex) == null, "Your regex should find no digits in <code>"One, Two, Three"</code>.");'
  - text: Ваше регулярное выражение должно найти 2 цифры в <code>&quot;21 Jump Street&quot;</code> .
    testString: 'assert("21 Jump Street".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"21 Jump Street"</code>.");'
  - text: 'Ваше регулярное выражение должно найти 4 цифры в <code>&quot;2001: A Space Odyssey&quot;</code> .'
    testString: 'assert("2001: A Space Odyssey".match(numRegex).length == 4, "Your regex should find 4 digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let numRegex = /change/; // Change this line
let result = numString.match(numRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d7db4367417b2b2512b92
title: Extract Matches
challengeType: 1
videoUrl: ''
localeTitle: Экстракционные матчи
---

## Description
<section id="description"> До сих пор вы проверяли, существует ли шаблон в строке или нет. Вы также можете извлечь фактические совпадения, найденные с помощью <code>.match()</code> . Чтобы использовать метод <code>.match()</code> , примените метод к строке и передайте в регулярное выражение внутри круглых скобок. Вот пример: <blockquote> «Hello, World!». Match (/ Hello /); <br> // Возвращает [&quot;Hello&quot;] <br> let ourStr = &quot;Регулярные выражения&quot;; <br> пусть нашRegex = / выражения /; <br> ourStr.match (ourRegex); <br> // Возвращает [&quot;выражения&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Нанести <code>.match()</code> метод , чтобы извлечь слово <code>coding</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>result</code> должен иметь слово <code>coding</code>
    testString: 'assert(result.join() === "coding", "The <code>result</code> should have the word <code>coding</code>");'
  - text: ''
    testString: 'assert(codingRegex.source === "coding", "Your regex <code>codingRegex</code> should search for <code>coding</code>");'
  - text: ''
    testString: 'assert(code.match(/\.match\(.*\)/), "You should use the <code>.match()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

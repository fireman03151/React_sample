---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
videoUrl: ''
localeTitle: Использование групп захвата для поиска и замены
---

## Description
<section id="description"> Поиск полезен. Однако вы можете сделать поиск еще более мощным, когда он также изменяет (или заменяет) текст, который вы соответствуете. Вы можете искать и заменять текст в строке, используя <code>.replace()</code> в строке. Входы для <code>.replace()</code> - это сначала шаблон регулярного выражения, который вы хотите найти. Второй параметр - это строка, которая заменит совпадение или функцию, чтобы что-то сделать. <blockquote> пусть wrongText = «Небо серебристое»; <br> пусть сереброRegex = / серебро /; <br> wrongText.replace (silverRegex, «синий»); <br> // Возвращает «Небо синее». </blockquote> Вы также можете получить доступ к группам захвата в строке замены знаками доллара ( <code>$</code> ). <blockquote> «Кодовый лагерь» .replace (/ (\ w +) \ s (\ w +) /, &#39;$ 2 $ 1&#39;); <br> // Возвращает «Код лагеря» </blockquote></section>

## Instructions
<section id="instructions"> Напишите регулярное выражение так, чтобы он искал строку <code>&quot;good&quot;</code> . Затем обновите переменную <code>replaceText</code> чтобы заменить <code>&quot;good&quot;</code> на <code>&quot;okey-dokey&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вы должны использовать <code>.replace()</code> для поиска и замены.
    testString: 'assert(code.match(/\.replace\(.*\)/), "You should use <code>.replace()</code> to search and replace.");'
  - text: 'Ваше регулярное выражение должно измениться: <code>&quot;This sandwich is good.&quot;</code> <code>&quot;This sandwich is okey-dokey.&quot;</code>'
    testString: 'assert(result == "This sandwich is okey-dokey." && replaceText === "okey-dokey", "Your regex should change <code>"This sandwich is good."</code> to <code>"This sandwich is okey-dokey."</code>");'
  - text: Вы не должны менять последнюю строку.
    testString: 'assert(code.match(/result\s*=\s*huhText\.replace\(.*?\)/), "You should not change the last line.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let huhText = "This sandwich is good.";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = huhText.replace(fixRegex, replaceText);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

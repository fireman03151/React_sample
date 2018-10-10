---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
challengeType: 1
videoUrl: ''
localeTitle: 'Используйте *, чтобы импортировать все из файла'
---

## Description
<section id="description"> Предположим, у вас есть файл, который вы хотите импортировать все его содержимое в текущий файл. Это можно сделать с помощью синтаксиса <dfn>import *</dfn> . Вот пример, когда содержимое файла с именем <code>&quot;math_functions&quot;</code> импортируется в файл в том же каталоге: <blockquote> import * как myMathModule из &quot;math_functions&quot;; <br> myMathModule.add (2,3); <br> myMathModule.subtract (5,3); </blockquote> И разбив этот код: <blockquote> import * как object_with_name_of_your_choice из &quot;file_path_goes_here&quot; <br> object_with_name_of_your_choice.imported_function </blockquote> Вы можете использовать любое имя после <code>import * as</code> часть инструкции. Чтобы использовать этот метод, для него требуется объект, который получает импортированные значения. Здесь вы будете использовать точечную нотацию, чтобы вызвать ваши импортированные значения. </section>

## Instructions
<section id="instructions"> В приведенном ниже коде требуется содержимое файла <code>&quot;capitalize_strings&quot;</code> , найденного в том же каталоге, который он импортировал. Добавьте соответствующий оператор <code>import *</code> в начало файла, используя предоставленный объект. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Правильно использует <code>import * as</code> синтаксис.
    testString: 'assert(code.match(/import\s+\*\s+as\s+[a-zA-Z0-9_$]+\s+from\s*"\s*capitalize_strings\s*"\s*;/gi), "Properly uses <code>import * as</code> syntax.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";

```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'capitalize_strings') {
return {
capitalize: str => str.toUpperCase(),
lowercase: str => str.toLowerCase()
}}};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

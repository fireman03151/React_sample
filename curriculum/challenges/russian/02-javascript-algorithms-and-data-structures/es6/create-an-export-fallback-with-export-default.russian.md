---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1
videoUrl: ''
localeTitle: Создание экспортного возврата с экспортом по умолчанию
---

## Description
<section id="description"> В уроке <code>export</code> вы узнали о синтаксисе, называемом <dfn>именованным экспортом</dfn> . Это позволило вам сделать несколько функций и переменных доступными для использования в других файлах. Существует другой синтаксис <code>export</code> который вам нужно знать, известный как <dfn>экспорт по умолчанию</dfn> . Обычно вы будете использовать этот синтаксис, если экспортируется только одно значение из файла. Он также используется для создания резервного значения для файла или модуля. Ниже приведен пример <code>export default</code> : <blockquote> export default function add (x, y) { <br> return x + y; <br> } </blockquote> Примечание. Поскольку <code>export default</code> используется для объявления резервного значения для модуля или файла, вы можете иметь только одно значение для экспорта по умолчанию в каждом модуле или файле. Кроме того, вы не можете использовать <code>export default</code> с <code>var</code> , <code>let</code> или <code>const</code> </section>

## Instructions
<section id="instructions"> Следующая функция должна быть резервным значением для модуля. Пожалуйста, добавьте необходимый код для этого. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+default\s+function\s+subtract\(x,y\)\s+{return\s+x\s-\s+y;}/g), "Proper used of <code>export</code> fallback.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
function subtract(x,y) {return x - y;}

```

</div>

### Before Test
<div id='js-setup'>

```js
window.exports = function(){};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: bd7158d8c442eddfaeb5bd17
title: Build a JavaScript Calculator
challengeType: 3
isRequired: true
videoUrl: ''
localeTitle: Создайте калькулятор на JavaScript
---

## Description
<section id="description"> <strong>Цель:</strong> создать приложение <a href="https://codepen.io" target="_blank">CodePen.io</a> , функционально похожее на это: <a href="https://codepen.io/freeCodeCamp/full/wgGVVX" target="_blank">https://codepen.io/freeCodeCamp/full/wgGVVX</a> . Выполните приведенные ниже <a href="https://en.wikipedia.org/wiki/User_story" target="_blank">истории пользователей</a> и получите все тесты для прохождения. Дайте ему свой личный стиль. Вы можете использовать любое сочетание HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux и jQuery для завершения этого проекта. Вы должны использовать фреймворк frontend (например, React), потому что этот раздел посвящен изучению интерфейсных фреймворков. Дополнительные технологии, не перечисленные выше, не рекомендуются, и использование их на свой страх и риск. Мы смотрим на поддержку других интерфейсных фреймворков, таких как Angular и Vue, но в настоящее время они не поддерживаются. Мы примем и попытаемся исправить все отчеты о проблемах, которые используют предлагаемый стек технологий для этого проекта. Счастливое кодирование! <strong>User Story # 1:</strong> Мой калькулятор должен содержать интерактивный элемент, содержащий знак <code>=</code> (знак равенства) с соответствующим <code>id=&quot;equals&quot;</code> . <strong>User Story # 2:</strong> Мой калькулятор должен содержать 10 интерактивных элементов, содержащих по одному номеру от 0 до 9, со следующими идентификаторами: <code>id=&quot;zero&quot;</code> , <code>id=&quot;one&quot;</code> , <code>id=&quot;two&quot;</code> , <code>id=&quot;three&quot;</code> , <code>id=&quot;four&quot;</code> , <code>id=&quot;five&quot;</code> , <code>id=&quot;six&quot;</code> , <code>id=&quot;seven&quot;</code> , <code>id=&quot;eight&quot;</code> и <code>id=&quot;nine&quot;</code> . <strong>User Story # 3:</strong> Мой калькулятор должен содержать 4 элемента с возможностью клика, каждый из которых содержит один из 4 основных математических операторов со следующими идентификаторами: <code>id=&quot;add&quot;</code> , <code>id=&quot;subtract&quot;</code> , <code>id=&quot;multiply&quot;</code> , <code>id=&quot;divide&quot;</code> , <strong>User Story # 4:</strong> Мой калькулятор должен содержать интерактивный элемент, содержащий a <code>.</code> (десятичной точки) с соответствующим <code>id=&quot;decimal&quot;</code> . <strong>User Story # 5:</strong> Мой калькулятор должен содержать интерактивный элемент с <code>id=&quot;clear&quot;</code> . <strong>User Story # 6:</strong> Мой калькулятор должен содержать элемент для отображения значений с соответствующим <code>id=&quot;display&quot;</code> . <strong>User Story # 7:</strong> В любое время нажатие кнопки очистки очищает входные и выходные значения и возвращает калькулятор в исходное состояние; 0 должен отображаться в элементе с идентификатором <code>display</code> . <strong>User Story # 8:</strong> Когда я вводил числа, я должен был видеть мой ввод в элементе с идентификатором <code>display</code> . <strong>User Story # 9:</strong> В любом порядке я должен иметь возможность добавлять, вычитать, умножать и делить цепочку чисел любой длины, а когда я нажимаю <code>=</code> , правильный результат должен отображаться в элементе с идентификатором <code>display</code> . <strong>User Story # 10:</strong> при вводе чисел мой калькулятор не должен допускать, чтобы число начиналось с нескольких нулей. <strong>User Story # 11:</strong> После нажатия десятичного элемента a <code>.</code> следует добавить к отображаемому в данный момент значению; два <code>.</code> в одном номере не должны приниматься. <strong>User Story # 12:</strong> Я должен выполнять любую операцию (+, -, *, /) для чисел, содержащих десятичные точки. <strong>User Story # 13:</strong> Если последовательно введено 2 или более операторов, выполняемая операция должна быть последним введенным оператором. <strong>User Story # 14:</strong> нажатие оператора, следующего за <code>=</code> должно начать новый расчет, который работает в результате предыдущей оценки. <strong>User Story # 15:</strong> Мой калькулятор должен иметь несколько десятичных знаков точности, когда дело доходит до округления (обратите внимание, что нет точного стандарта, но вы должны иметь возможность обрабатывать вычисления, такие как <code>2 / 7</code> с разумной точностью, по крайней мере, до 4 знаков после запятой) , <strong>Примечание. В калькуляторе калькулятора.</strong> Следует отметить, что есть две основные школы мышления в логике ввода калькулятора: логика <dfn>непосредственного выполнения и логика</dfn> <dfn>формулы</dfn> . В нашем примере используется логика формулы и соблюдается порядок приоритетности операций, немедленное выполнение не выполняется. Любой из них является приемлемым, но учтите, что в зависимости от того, какой вы выбираете, ваш калькулятор может давать разные результаты, чем наши, для определенных уравнений (см. Пример ниже). Пока ваша математика может быть проверена другим калькулятором производства, пожалуйста, не считайте это ошибкой. <strong>ПРИМЕР:</strong> <code>3 + 5 x 6 - 2 / 4 =</code> <br><ul><li> <strong>Немедленная логика выполнения:</strong> <code>11.5</code> </li><li> <strong>Логика формулы / выражения:</strong> <code>32.5</code> </li></ul> Вы можете создать свой проект, <a href="http://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">нажимая эту ручку CodePen</a> . Или вы можете использовать эту ссылку CDN для запуска тестов в любой среде: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> Как только вы закончите, отправьте URL-адрес своей рабочей проект с прохождением всех его тестов. Не забудьте использовать метод <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests: []

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

---
title: Execute a Markov algorithm
id: 59e09e6d412c5939baa02d16
challengeType: 5
videoUrl: ''
localeTitle: Выполнить алгоритм Маркова
---

## Description
<section id="description"> Задача: <p> Создайте интерпретатор для <a href="https://en.wikipedia.org/wiki/Markov algorithm" title="wp: алгоритм Маркова">алгоритма Маркова</a> . </p><p> Правила имеют синтаксис: </p><p><ruleset> знак равно <comment> | <rule> ) <newline> +) * </newline></rule></comment></ruleset></p><p><comment> знак равно <any character=""> } </any></comment></p><p><rule> знак равно <pattern><whitespace> -&gt; <whitespace> [.] <replacement></replacement></whitespace></whitespace></pattern></rule></p><p><whitespace> знак равно <tab> | <space> ) [ <whitespace> ] </whitespace></space></tab></whitespace></p><p> В каждой строке есть одно правило. </p><p> Если есть <b>.</b> (период), присутствующий до <replacement> , то это правило окончания, в этом случае интерпретатор должен остановить выполнение. </replacement></p><p> Набор правил состоит из последовательности правил с необязательными комментариями. </p><p> <big><big>Rulesets</big></big> </p><p> Используйте следующие тесты для записей: </p> Правила 1: <pre> Этот файл правил извлекается из Википедии:
http://en.wikipedia.org/wiki/Markov_AlgorithmA -&gt; яблоко
B -&gt; сумка
S -&gt; магазин
T -&gt;
магазин -&gt; мой брат
никогда не использовалось -&gt; .terminating rule
</pre><p> Пример текста: </p><p> <code>I bought a B of As from T S.</code> </p> <p> Должен генерировать вывод: </p><p> <code>I bought a bag of apples from my brother.</code> </p> Правила 2: <p> Проверка правила завершения </p><pre> Немного изменен из правил на WikipediaA -&gt; apple
B -&gt; сумка
S -&gt; .shop
T -&gt;
магазин -&gt; мой брат
никогда не использовалось -&gt; .terminating rule </pre><p> Пример текста: </p><p> <code>I bought a B of As from T S.</code> </p> <p> Должна генерировать: </p><p> <code>I bought a bag of apples from T shop.</code> </p> Правила 3: <p> Это проверяет правильный порядок замещения и может задерживать простые подпрограммы на основе регулярного выражения, если специальные символы регулярного выражения не экранируются. </p><pre> BNF Синтаксические правила тестированияA -&gt; apple
WWWW -&gt; с
Багаж -&gt; -&gt;. *
B -&gt; сумка
-&gt;. * -&gt; деньги
W -&gt; WW
S -&gt; .shop
T -&gt;
магазин -&gt; мой брат
никогда не использовалось -&gt; .terminating rule
</pre><p> Пример текста: </p><p> <code>I bought a B of As W my Bgage from T S.</code> </p> <p> Должна генерировать: </p><p> <code>I bought a bag of apples with my money from T shop.</code> </p> Правила 4: <p> Это проверяет правильность порядка сканирования правил и может задерживать процедуры замены, которые сканируются в неправильном порядке. Он реализует общий механизм унарного умножения. (Обратите внимание, что входное выражение должно быть помещено в символы подчеркивания в этой реализации.) </p><pre> ## Unary Multiplication Engine, для тестирования алгоритмов Алгоритма Маркова
## Донал Стипендиаты.
Унарное сложение engine_ + 1 -&gt; _1 +
1 + 1 -&gt; 11+
Переход для преобразования из расщепления умножения в обычный
addition1! -&gt; 1
,! -&gt;! +
_! -&gt; _
Унарное умножение путем дублирования левой стороны, правое время 1 * 1 -&gt; x, @ y
1x -&gt; xX
X, -&gt; 1,1
X1 -&gt; 1X
_x -&gt; _X
, х -&gt;, X
y1 -&gt; 1y
y_ -&gt; _
Следующая фаза применения 1 @ 1 -&gt; x, @ y
1 @ _ -&gt; @_
, @ _ ​​-&gt;! _
++ -&gt; +
Очистка выводов для добавления_1 -&gt; 1
1 + _ -&gt; 1
_ + _ -&gt;
</pre><p> Пример текста: </p><p> <code>_1111*11111_</code> </p> <p> должен генерировать вывод: </p><p> <code>11111111111111111111</code> </p> Правила 5: <p> Простая <a href="http://en.wikipedia.org/wiki/Turing_machine" title="ссылка: http://en.wikipedia.org/wiki/Turing_machine">машина Тьюринга</a> , </p><p> реализуя <a href="http://en.wikipedia.org/wiki/Busy_beaver" title="ссылка: http://ru.wikipedia.org/wiki/Busy_beaver">трехгосударственный бобр</a> . </p><p> Лента состоит из 0s и 1s, состояния A, B, C и H (для Halt), а положение головы указывается путем записи буквы состояния перед символом, где находится голова. </p><p> Все части исходной ленты, на которой работает машина, должны быть указаны на входе. </p><p> Кроме того, демонстрируя, что алгоритм Маркова является Turing-полным, он также заставил меня поймать ошибку в реализации C ++, которая не была захвачена первыми четырьмя наборами правил. </p><pre> Машина Тьюринга: бобер с тремя состояниями
# состояние A, символ 0 =&gt; запись 1, перемещение вправо, новое состояние BA0 -&gt; 1B
состояние A, символ 1 =&gt; запись 1, перемещение влево, новое состояние C0A1 -&gt; C01
1A1 -&gt; C11
состояние B, символ 0 =&gt; запись 1, перемещение влево, новое состояние A0B0 -&gt; A01
1B0 -&gt; A11
состояние B, символ 1 =&gt; записать 1, двигаться вправо, новое состояние BB1 -&gt; 1B
состояние C, символ 0 =&gt; запись 1, перемещение влево, новое состояние B0C0 -&gt; B01
1C0 -&gt; B11
состояние C, символ 1 =&gt; запись 1, перемещение влево, halt0C1 -&gt; H01
1C1 -&gt; H11
</pre><p> Этот набор правил должен </p><p> <code>000000A000000</code> </p> <p> в </p><p> <code>00011H1111000</code> </p> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>markov</code> - функция.
    testString: 'assert(typeof markov === "function", "<code>markov</code> is a function.");'
  - text: '<code>markov([&quot;A -&gt; apple&quot;,&quot;B -&gt; bag&quot;,&quot;S -&gt; shop&quot;,&quot;T -&gt; the&quot;,&quot;the shop -&gt; my brother&quot;,&quot;a never used -&gt; .terminating rule&quot;],&quot;I bought a B of As from T S.&quot;)</code> должен вернуться «Я купил мешок с яблоками от моего брата».'
    testString: 'assert.deepEqual(markov(rules[0],tests[0]),outputs[0],"<code>markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code> should return "I bought a bag of apples from my brother.".");'
  - text: '<code>markov([&quot;A -&gt; apple&quot;,&quot;B -&gt; bag&quot;,&quot;S -&gt; .shop&quot;,&quot;T -&gt; the&quot;,&quot;the shop -&gt; my brother&quot;,&quot;a never used -&gt; .terminating rule&quot;],&quot;I bought a B of As from T S.&quot;)</code> должен вернуться« Я купил мешок яблок из магазина T ».'
    testString: 'assert.deepEqual(markov(rules[1],tests[1]),outputs[1],"<code>markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code> should return "I bought a bag of apples from T shop.".");'
  - text: '<code>markov([&quot;A -&gt; apple&quot;,&quot;WWWW -&gt; with&quot;,&quot;Bgage -&gt; -&gt;.*&quot;,&quot;B -&gt; bag&quot;,&quot;-&gt;.* -&gt; money&quot;,&quot;W -&gt; WW&quot;,&quot;S -&gt; .shop&quot;,&quot;T -&gt; the&quot;,&quot;the shop -&gt; my brother&quot;,&quot;a never used -&gt; .terminating rule&quot;],&quot;I bought a B of As W my Bgage from T S.&quot;)</code> должен вернуться« Я купил мешок с яблоками с моими деньгами из магазина T ».'
    testString: 'assert.deepEqual(markov(rules[2],tests[2]),outputs[2],"<code>markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")</code> should return "I bought a bag of apples with my money from T shop.".");'
  - text: '<code>markov([&quot;_+1 -&gt; _1+&quot;,&quot;1+1 -&gt; 11+&quot;,&quot;1! -&gt; !1&quot;,&quot;,! -&gt; !+&quot;,&quot;_! -&gt; _&quot;,&quot;1*1 -&gt; x,@y&quot;,&quot;1x -&gt; xX&quot;,&quot;X, -&gt; 1,1&quot;,&quot;X1 -&gt; 1X&quot;,&quot;_x -&gt; _X&quot;,&quot;,x -&gt; ,X&quot;,&quot;y1 -&gt; 1y&quot;,&quot;y_ -&gt; _&quot;,&quot;1@1 -&gt; x,@y&quot;,&quot;1@_ -&gt; @_&quot;,&quot;,@_ -&gt; !_&quot;,&quot;++ -&gt; +&quot;,&quot;_1 -&gt; 1&quot;,&quot;1+_ -&gt; 1&quot;,&quot;_+_ -&gt; &quot;],&quot;_1111*11111_&quot;)</code> должен возвращать&quot; 11111111111111111111 &quot;.'
    testString: 'assert.deepEqual(markov(rules[3],tests[3]),outputs[3],"<code>markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")</code> should return "11111111111111111111".");'
  - text: '<code>markov([&quot;A0 -&gt; 1B&quot;,&quot;0A1 -&gt; C01&quot;,&quot;1A1 -&gt; C11&quot;,&quot;0B0 -&gt; A01&quot;,&quot;1B0 -&gt; A11&quot;,&quot;B1 -&gt; 1B&quot;,&quot;0C0 -&gt; B01&quot;,&quot;1C0 -&gt; B11&quot;,&quot;0C1 -&gt; H01&quot;,&quot;1C1 -&gt; H11&quot;],&quot;&quot;)</code> должны возвращать« 00011H1111000 ».'
    testString: 'assert.deepEqual(markov(rules[4],tests[4]),outputs[4],"<code>markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")</code> should return "00011H1111000".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function markov (rules,test) {
  // Good luck!
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

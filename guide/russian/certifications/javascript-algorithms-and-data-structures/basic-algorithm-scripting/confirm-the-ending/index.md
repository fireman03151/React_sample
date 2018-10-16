---
title: Confirm the Ending
localeTitle: Подтвердить завершение
---
## Подтвердить завершение

# 🌻 Решение промежуточного кода:

(Декларативный подход)

```javascript
function confirmEnding(str, target) { 
  // "Never give up and good luck will find you." 
  // -- Falcor 
 
  return str.slice(str.length - target.length) === target; 
 } 
 
 confirmEnding("He has to give me a new name", "name"); 
```

#### 🚀 [Код запуска](https://repl.it/repls/SardonicRoundAfkgaming)

# Код Объяснение:

*   Сначала мы используем метод `slice` копирования строки.
*   Чтобы получить последние символы в `str` эквивалентные длине `target` , мы используем метод `slice` .
*   Первый параметр внутри метода `slice` является начальным индексом, а вторым параметром будет конечный индекс.
*   Например, `str.slice(10, 17)` вернется, `give me` .
*   В этом случае мы включаем только один параметр, который будет скопировать все из начального индекса.
*   Мы вычитаем длину `str` и длину `target` , таким образом, мы получим последние оставшиеся символы, эквивалентные длине `target` .
*   Наконец, мы сравниваем результат возврата среза к `target` и проверяем, имеют ли они одинаковые символы.

### Связанные ссылки

*   [String.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
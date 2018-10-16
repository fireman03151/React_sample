---
title: Python Abs Function
localeTitle: Функция Python Abs
---
`abs()` является встроенной функцией в Python 3, чтобы вычислить абсолютное значение любого числа. Абсолютное значение числа "означает только, как далеко число от 0" 1 Требуется один аргумент `x` . Аргумент может быть даже [сложным числом](https://docs.python.org/3.0/library/cmath.html) , и в этом случае возвращается его [модуль](http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf) .

## аргументация

Он принимает один аргумент `x` - целое, десятичное или комплексное число.

## Возвращаемое значение

Возвращаемое значение будет положительным. Даже если комплексное число будет передано, оно вернет свою величину, рассчитанную как алгебра с комплексным числом.

## Образец кода

```python
print(abs(3.4)) # prints 3.4 
 print(abs(-6)) # prints 6 
 print(abs(3 + 4j)) # prints 5, because |3 + 4j| = 5 
```

[🚀 Код запуска](https://repl.it/CL8k/0)

[Официальные документы](https://docs.python.org/3/library/functions.html#abs)

### источники

1.  [Математика - это весело. Доступ: 25 октября 2017 г.](https://www.mathsisfun.com/numbers/absolute-value.html)
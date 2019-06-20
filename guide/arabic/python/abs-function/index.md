---
title: Python Abs Function
localeTitle: بيثون عبس وظيفة
---
`abs()` دالة مضمنة في Python 3 ، لحساب القيمة المطلقة لأي رقم. القيمة المطلقة للرقم "تعني فقط مدى الرقم من 0" 1 يستغرق وسيطة واحدة `x` . يمكن أن تكون الحجة رقمًا [معقدًا](https://docs.python.org/3.0/library/cmath.html) ، وفي هذه الحالة يتم إرجاع [معاملها](http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf) .

## جدال

يستغرق وسيطة واحدة `x` - عدد صحيح أو عشري أو رقم معقد.

## قيمة الإرجاع

ستكون قيمة الإرجاع رقم موجب. حتى إذا تم تمرير العدد المركب ، فسيعود حجمه ، محسوبًا حسب الجبر المركب.

## عينة الكود

```python
print(abs(3.4)) # prints 3.4
print(abs(-6)) # prints 6
print(abs(3 + 4j)) # prints 5, because |3 + 4j| = 5
``` 

[🚀 تشغيل الكود](https://repl.it/CL8k/0)

[المستندات الرسمية](https://docs.python.org/3/library/functions.html#abs)

### مصادر

1.  [الرياضة مرحه. Accessed: October 25، 2017](https://www.mathsisfun.com/numbers/absolute-value.html)
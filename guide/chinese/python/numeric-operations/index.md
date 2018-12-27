---
title: Python Numeric Operations
localeTitle: Python数值运算
---
[Python文档 - 数字操作](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

Python完全支持混合变量类型的算术：当二进制算术运算符具有不同数值类型的操作数时，具有“较局限”类型的操作数被扩展为另一个的操作数，其中整数比浮点更局限，这比复数更局限。混合变量类型的数字之间的比较运算使用相同的规则。 [2\]构造函数int（），float（）和complex（）可用于生成特定类型的数字。](https://docs.python.org/3/library/functions.html#abs)

所有数字类型（复数除外）都支持以下操作，按升序优先级排序（所有数字操作的优先级都高于比较操作）：

操作|结果|备注|完整的文档  
\----------------- | -------------------------------------------------- ------------------------- | ------ | -------------------------------------------------- ---------------------  
`x + y` | x和y的和| |  
`x - y` | x和y的差| |  
`x * y` | x和y的积| |  
`x / y` | x和y |的商|  
`x // y` | x和y |的平均商（1）|  
`x % y` |x除y的余数 | （2）  
`-x` | x的相反数| |  
`+x` | x本身| |  
`abs(x)` | x |的绝对值或量| \[ `abs()`  
`int(x)` | 将x转换为整数| （3）（6）| [`int()`](https://docs.python.org/3/library/functions.html#int)  
`float(x)` | 将x转换为浮点数| （4）（6）| [`float()`](https://docs.python.org/3/library/functions.html#float)  
`complex(re, im)` |一个复数，实部为re，虚部为im。im默认为零。 | （6）| [`complex()`](https://docs.python.org/3/library/functions.html#complex)  
`c.conjugate()` |复数c的共轭|  
`divmod(x, y)` |数对（x // y，x％y）| （2）| [`divmod()`](https://docs.python.org/3/library/functions.html#divmod)  
`pow(x, y)` | x的y次幂 | （5）| [`pow()`](https://docs.python.org/3/library/functions.html#pow)  
`x ** y` | x的y次幂 | （5）

**笔记：**

1.  也称为整数除法。结果值是整数，但结果的类型不一定是int。结果始终舍入为负无穷大： `1//2`为`0` ， `(-1)//2`为`-1` `1//(-2)`为`-1` ， `(-1)//(-2)`为`0` 。
    
2.  非复数。在适当的情况下使用`abs()`转换为浮点数。
    
3.  从浮点到整数的转换可以像C中那样舍入或截断;请参阅函数[`math.floor()`](https://docs.python.org/3/library/math.html#math.floor)和[`math.ceil()`](https://docs.python.org/3/library/math.html#math.ceil)以获得明确定义的转换。
    
4.  `float`也接受字符串`“nan”`和`“inf”` ，带有可选前缀`“+”`或`“-”`表示非数字（NaN）和正或负无穷大。
    
5.  Python将`pow(0, 0)`和`0 ** 0`设置为`1` ，这在编程语言中很常见。
    
6.  接受的数字文字包括数字0到9或任何Unicode等效项（具有`Nd`属性的代码点）。
    

> 有关具有`Nd`属性的代码点的完整列表，请参阅[Unicode派生数字类型](http://www.unicode.org/Public/8.0.0/ucd/extracted/DerivedNumericType.txt) 。

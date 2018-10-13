---
title: Python Abs Function
localeTitle: Função de Abs Python
---
`abs()` é uma função embutida no Python 3, para calcular o valor absoluto de qualquer número. O valor absoluto de um número "significa apenas até que ponto um número é de 0" 1 Leva um argumento `x` . O argumento pode até ser um [número complexo](https://docs.python.org/3.0/library/cmath.html) e, nesse caso, seu [módulo](http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf) é retornado.

## Argumento

Leva um argumento `x` - um inteiro, ou decimal, ou um número complexo.

## Valor de retorno

O valor de retorno seria um número positivo. Mesmo se o número complexo for passado, ele retornará sua magnitude, calculada de acordo com a álgebra numérica complexa.

## Amostra de código

```python
print(abs(3.4)) # prints 3.4 
 print(abs(-6)) # prints 6 
 print(abs(3 + 4j)) # prints 5, because |3 + 4j| = 5 
```

[🚀 Run Code](https://repl.it/CL8k/0)

[Documentos oficiais](https://docs.python.org/3/library/functions.html#abs)

### Fontes

1.  [A matemática é divertida. Acesso em: 25 de outubro de 2017](https://www.mathsisfun.com/numbers/absolute-value.html)
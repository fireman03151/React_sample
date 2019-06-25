---
title: Limit Item Size Using the minmax Function ##
localeTitle: Limitar o tamanho do item usando a função minmax ##
---
Usar a função _minmax_ em conjunto com a função de _repetição_ é exatamente o que este desafio descreve, mas isso não era inerentemente óbvio para mim a princípio. A maneira de passar esse desafio é remover o valor de **largura máxima** dentro da função de _repetição_ e, em seguida, adicionar a função _minmax_ no lugar do valor de **largura máxima de** _repetição_ .

Aqui está um **exemplo** do que parece ser uma abordagem _antes_ e _depois_ :

### Antes

```css
    grid-template-columns: repeat(3, 1fr); 
```

### Depois de

```css
    grid-template-columns: repeat(3, minmax(50px, 2fr)); 
```


### Recursos

[Rede de desenvolvedores da Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)
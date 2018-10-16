---
title: Switch statement
localeTitle: Cambiar la declaración
---
# Cambiar

`Switch` es una declaración de selección que seleccionará una instrucción de cambio y la ejecutará desde la lista de candidatos. El interruptor consiste en un `case` y un `default` opcional. La ejecución se puede detener utilizando un `break` o `return` .

## Sintaxis
```
switch(x) 
 { 
    case value1: 
      //execute if x = value1 
      break; 
    case value2: 
      //execute if x = value2 
      break; 
 
    ... 
 
    default: 
      execute if x is different with cases above 
 } 
```

## Ejemplo

```php
<?php 
 //initialize with a random integer within range 
 $diceNumber = mt_rand(1, 6); 
 
 //initialize 
 $numText = ""; 
 
 //calling switch statement 
  switch($diceNumber) 
  { 
  case 1: 
    $numText = "One"; 
    break; 
  case 2: 
    $numText = "Two"; 
    break; 
  case 3: 
  case 4: 
    // case 3 and 4 will go to this line 
    $numText = "Three or Four"; 
    break; 
  case 5: 
    $numText = "Five"; 
    echo $numText; 
    // break; //without specify break or return it will continue execute to next case. 
  case 6: 
    $numText = "Six"; 
    echo $numText; 
    break; 
  default: 
    $numText = "unknown"; 
  } 
 
  //display result 
  echo 'Dice show number '.$numText.'.'; 
 
 ?> 
```

## Salida
```
if case is 1 
 > Dice show number One. 
 
 if case is 2 
 > Dice show number Two. 
 
 if case is 3 
 > Dice show number Three or Four. 
 
 if case is 4 
 > Dice show number Three or Four. 
 
 if case is 5 
 > FiveSixDice show number Six. 
 
 if case is 6 
 > SixDice show number Six. 
 
 if none of the above 
 > Dice show number unknown. 

```
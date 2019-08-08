---
title: C++ Arrays
localeTitle: Arrays C ++
---
## ¿Qué son los arreglos?

Un arreglo es una serie de elementos del mismo tipo de datos que se almacenan en ubicaciones de memoria contiguas y pueden referenciarse individualmente.

Por ejemplo, un arreglo que contiene 5 valores enteros llamados **numeros** se declara así:

```cpp
int numbers [5]; 
```

Inicialización:

```cpp
//Initialization with entries: 
 int numbers [5] = {1, 2, 3, 4, 5}; 
 
 //Inicializando el arreglo sin datos
 int numeros[5]; 
 
 //Note que en la primera delaración de arreglo el tamaño del mismo está dada por la cantidad de elementos encerrados entre llaves. En el segundo ejemplo se especificó que la cantidad de posiciones que contendrá el arreglo.
```

Tenga en cuenta que los arreglos en C ++ no son permutables en tamaño, lo que significa que una vez que haya declarado un arreglo con tamaño 5, no se puede ampliar o reducir su tamaño. En caso de que realmente necesite un arreglo más grande con las mismas entradas, tendría que copiar todas las entradas a un nuevo arreglo de mayor tamaño.

### Acceso:

Se puede acceder a los elementos de un arreglo a través de la referencia a su índice. (Comience contando desde 0).  
Ejemplo:

```cpp
x = numbers[0]; // = 1. [0] == first position 
 numbers[2] = 55; // Sets the third position (3) to the new number 55 
 //numbers[] is now: {1, 2, 55, 4, 5} 
```

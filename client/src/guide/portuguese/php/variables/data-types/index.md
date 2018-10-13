---
title: PHP Data Types
localeTitle: Tipos de dados PHP
---
# Tipos de dados

Variáveis ​​podem armazenar dados de diferentes tipos, como:

*   String ("Olá")
*   Inteiro (5)
*   Flutuante (também chamado de duplo) (1.0)
*   Booleano (1 ou 0)
*   Array (array ("eu", "sou", "uma", "matriz"))
*   Objeto
*   NULO
*   Recurso

## Corda

Uma string é uma sequência de caracteres. Pode ser qualquer texto entre aspas (simples ou duplo):

#### Exemplo

```php
$x = "Hello!"; 
 $y = 'Hello!'; 
```

## Inteiro

Um tipo de dados inteiro é um número não decimal entre -2.147.483.648 e 2.147.483.647.

Regras para números inteiros:

*   Um inteiro deve ter pelo menos um dígito
*   Um inteiro não deve ter um ponto decimal
*   Um inteiro pode ser positivo ou negativo
*   Os inteiros podem ser especificados em três formatos: decimal (baseado em 10), hexadecimal (baseado em 16 - prefixado com 0x) ou octal (baseado em 8 - prefixado com 0)

#### Exemplo

```php
$x = 5; 
```

## Flutuador

Um float (número de ponto flutuante) é um número com um ponto decimal ou um número no formato exponencial.

#### Exemplo

```php
$x = 5.01; 
```

## boleano

Um booleano representa dois estados possíveis: VERDADEIRO ou FALSO. Booleanos são frequentemente usados ​​em testes condicionais.

```php
$x = true; 
 $y = false; 
```

## Matriz

Uma matriz armazena vários valores em uma única variável.

```php
$colours = array("Blue","Purple","Pink"); 
```

## Valor NULL

Nulo é um tipo de dados especial que pode ter apenas um valor: NULL.  
Uma variável do tipo de dados NULL é uma variável que não possui nenhum valor atribuído a ela.  
Variáveis ​​também podem ser esvaziadas definindo o valor como NULL.

**Nota:** Se uma variável é criada sem um valor, é atribuído automaticamente um valor de NULL.

```php
<?php 
 $x = "Hello world!"; 
 $x = null; 
 ?> 
```

Saída:  
NULO

## Objeto

Um objeto é um tipo de dados que armazena dados e informações sobre como processar esses dados.  
No PHP, um objeto deve ser explicitamente declarado.  
Primeiro devemos declarar uma classe de objeto. Uma classe é uma estrutura que pode conter propriedades e métodos.

**Exemplo:**

```php
<?php 
 class Car { 
    function Car() { 
        $this->model = "VW"; 
    } 
 } 
 
 // create an object 
 $herbie = new Car(); 
 
 // show object properties 
 echo $herbie->model; 
 ?> 

```
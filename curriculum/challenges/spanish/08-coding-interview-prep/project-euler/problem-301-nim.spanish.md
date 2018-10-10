---
id: 5900f4991000cf542c50ffab
challengeType: 5
title: 'Problem 301: Nim'
videoUrl: ''
localeTitle: 'Problema 301: el'
---

## Description
<section id="description"> Nim es un juego que se juega con montones de piedras, donde dos jugadores lo toman a su vez para eliminar cualquier cantidad de piedras de cualquier montón hasta que no queden piedras. <p> Consideraremos la versión de juego normal de tres pilas de Nim, que funciona de la siguiente manera: </p><ul><li><p> Al comienzo del juego hay tres montones de piedras. </p></li><li><p> En su turno, el jugador elimina cualquier número positivo de piedras de un solo montón. </p></li><li><p> El primer jugador incapaz de moverse (porque no quedan piedras) pierde. </p><p> Si (n1, n2, n3) indica una posición Nim que consiste en montones de tamaño n1, n2 y n3, entonces hay una función simple X (n1, n2, n3) - que puede buscar o intentar deducir por sí mismo - que devoluciones: cero si, con una estrategia perfecta, el jugador que está a punto de moverse eventualmente perderá; o no cero si, con una estrategia perfecta, el jugador que está a punto de moverse eventualmente ganará. Por ejemplo, X (1,2,3) = 0 porque, no importa lo que haga el jugador actual, su oponente puede responder con un movimiento que deja dos montones de igual tamaño, en cuyo punto cada movimiento del jugador actual puede ser reflejado por su oponente hasta que no queden piedras; por lo que el jugador actual pierde. Para ilustrar: </p></li><li><p> el jugador actual se mueve a (1,2,1) </p></li><li><p> el oponente se mueve a (1,0,1) </p></li><li><p> el jugador actual se mueve a (0,0,1) </p></li><li><p> El oponente se mueve a (0,0,0), y así gana. </p></li></ul><p> ¿Para cuántos números enteros positivos n ≤ 230 hace X (n, 2n, 3n) = 0? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler301()</code> debe devolver 2178309.
    testString: 'assert.strictEqual(euler301(), 2178309, "<code>euler301()</code> should return 2178309.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler301() {
  // Good luck!
  return true;
}

euler301();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

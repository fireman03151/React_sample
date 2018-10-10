---
id: 5900f5411000cf542c510052
challengeType: 5
title: 'Problem 467: Superinteger'
videoUrl: ''
localeTitle: 'Problema 467: Superinteger'
---

## Description
<section id="description"> Un entero s se denomina superinteger de otro entero n si los dígitos de n forman una subsecuencia de los dígitos de s. Por ejemplo, 2718281828 es una superintegra de 18828, mientras que 314159 no es una superintegra de 151. <p> Sea p (n) el enésimo número primo, y sea c (n) el enésimo número compuesto. Por ejemplo, p (1) = 2, p (10) = 29, c (1) = 4 y c (10) = 18. {p (i): i ≥ 1} = {2, 3, 5, 7 , 11, 13, 17, 19, 23, 29, ...} {c (i): i ≥ 1} = {4, 6, 8, 9, 10, 12, 14, 15, 16, 18,. ..} </p><p> Sea PD la secuencia de las raíces digitales de {p (i)} (CD se define de manera similar para {c (i)}): PD = {2, 3, 5, 7, 2, 4, 8, 1, 5, 2, ...} CD = {4, 6, 8, 9, 1, 3, 5, 6, 7, 9, ...} </p><p> Sea Pn el entero formado por la concatenación de los primeros n elementos de PD (Cn se define de manera similar para CD). P10 = 2357248152 C10 = 4689135679 </p><p> Sea f (n) el número entero positivo más pequeño que sea un superinteger común de Pn y Cn. Por ejemplo, f (10) = 2357246891352679, y f (100) mod 1 000 000 007 = 771661825. </p><p> Encontrar f (10 000) mod 1 000 000 007. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler467()</code> debe devolver 775181359.
    testString: 'assert.strictEqual(euler467(), 775181359, "<code>euler467()</code> should return 775181359.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler467() {
  // Good luck!
  return true;
}

euler467();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

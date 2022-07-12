---
id: 5900f3991000cf542c50feac
title: 'Problema 45: triangolari, pentagonali ed esagonali'
challengeType: 1
forumTopicId: 302122
dashedName: problem-45-triangular-pentagonal-and-hexagonal
---

# --description--

Numeri triangolari, pentagonali, ed esagonali sono generati dalle seguenti formule:

<div style='display: inline-grid; text-align: center; grid-template-columns: 135px 135px 260px; grid-template-rows: auto;'><div>Triangolare</div><div>T<sub>n</sub>=<var>n</var>(<var>n</var>+1)/2</div><div>1, 3, 6, 10, 15, ...</div></div>
<div style='display: inline-grid; text-align: center; grid-template-columns: 135px 135px 260px; grid-template-rows: auto;'><div>Pentagonale</div><div>P<sub>n</sub>=<var>n</var>(3<var>n</var>−1)/2</div><div>1, 5, 12, 22, 35, ...</div></div>
<div style='display: inline-grid; text-align: center; grid-template-columns: 135px 135px 260px; grid-template-rows: auto;'><div>Esagonale</div><div>H<sub>n</sub>=<var>n</var>(2<var>n</var>−1)</div><div>1, 6, 15, 28, 45, ...</div></div>

Si può verificare che T<sub>285</sub> = P<sub>165</sub> = H<sub>143</sub> = 40755.

Trova il numero triangolare successivo che è anche pentagonale ed esagonale.

# --hints--

`triPentaHexa(40756)` dovrebbe restituire un numero.

```js
assert(typeof triPentaHexa(40756) === 'number');
```

`triPentaHexa(40756)` dovrebbe restituire 1533776805.

```js
assert.strictEqual(triPentaHexa(40756), 1533776805);
```

# --seed--

## --seed-contents--

```js
function triPentaHexa(n) {

  return true;
}

triPentaHexa(40756);
```

# --solutions--

```js
function triPentaHexa(n) {
  function triangular(num) {
  return (num * (num + 1)) / 2;
}

function isPentagonal(num) {
  // Formula found by completing the square and
  // solving for n.
  const n = (Math.sqrt((24 * num) + 1) + 1) / 6;
  return n % 1 === 0;
}

  function isHexagonal(num) {
  // Formula found by completing the square and
  // solving for n.
  const n = Math.sqrt(0.5 * (num + (1 / 8))) + 0.25;
 return n % 1 === 0;
}

let iTri = n;
let tri;
let found = false;
while (!found) {
  iTri++;
  tri = triangular(iTri);
  if (isPentagonal(tri) && isHexagonal(tri)) {
    found = true;
    }
  }
  return tri;
}
```

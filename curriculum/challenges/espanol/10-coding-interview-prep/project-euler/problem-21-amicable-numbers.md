---
id: 5900f3811000cf542c50fe94
title: 'Problema 21: Número amigos'
challengeType: 1
forumTopicId: 301851
dashedName: problem-21-amicable-numbers
---

# --description--

Se define d(`n`) como la suma de los divisores propios de `n` (números menores que `n` los cuales dividen de forma exacta a `n`).

Si d(`a`) = `b` y d(`b`) = `a`, donde `a` ≠ `b`, entonces `a` y `b` forman un par de números amigos, siendo `a` y `b` números amigos.

Por ejemplo, los divisores propios de 220 son 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 y 110; por tanto d(220) = 284. Los divisores propios de 284 son 1, 2, 4, 71 y 142; así pues d(284) = 220.

Evalúa la suma de todos los números amigos por debajo de `n`.

# --hints--

`sumAmicableNum(1000)` debe devolver un número.

```js
assert(typeof sumAmicableNum(1000) === 'number');
```

`sumAmicableNum(1000)` debe devolver 504.

```js
assert.strictEqual(sumAmicableNum(1000), 504);
```

`sumAmicableNum(2000)` debe devolver 2898.

```js
assert.strictEqual(sumAmicableNum(2000), 2898);
```

`sumAmicableNum(5000)` debe devolver 8442.

```js
assert.strictEqual(sumAmicableNum(5000), 8442);
```

`sumAmicableNum(10000)` debe devolver 31626.

```js
assert.strictEqual(sumAmicableNum(10000), 31626);
```

# --seed--

## --seed-contents--

```js
function sumAmicableNum(n) {

  return n;
}

sumAmicableNum(10000);
```

# --solutions--

```js
const sumAmicableNum = (n) => {
  const fsum = (n) => {
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
      if (Math.floor(n % i) === 0)
        sum += i + Math.floor(n / i);
    return sum;
  };
  let d = [];
  let amicableSum = 0;
  for (let i=2; i<n; i++) d[i] = fsum(i);
  for (let i=2; i<n; i++) {
    let dsum = d[i];
    if (d[dsum]===i && i!==dsum) amicableSum += i+dsum;
  }
  return amicableSum/2;
};
```

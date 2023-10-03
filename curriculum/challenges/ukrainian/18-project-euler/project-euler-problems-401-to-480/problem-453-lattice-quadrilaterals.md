---
id: 5900f5311000cf542c510044
title: 'Завдання 453: чотирикутники на сітці'
challengeType: 1
forumTopicId: 302126
dashedName: problem-453-lattice-quadrilaterals
---

# --description--

Простий чотирикутник — це багатокутник, що має чотири окремих вершини, не має прямих кутів і не перетинається сам з собою.

Нехай $Q(m, n)$ буде кількістю простих чотирикутників, чиї вершини є точками сітки з координатами ($x$, $y$), задовільняючи умову $0 ≤ x ≤ m$ та $0 ≤ y ≤ n$.

Наприклад, $Q(2, 2) = 94$, як можна побачити нижче:

<img class="img-responsive center-block" alt="94 чотирикутники, вершинами яких є точки сітки з координатами (x, y), задовільняючи умову 0 &le; x &le; m та 0 &le; y &le; n" src="https://cdn.freecodecamp.org/curriculum/project-euler/lattice-quadrilaterals.png" style="background-color: white; padding: 10px;" />

Можна довести, що $Q(3, 7) = 39\\,590$, $Q(12, 3) = 309\\,000$ та $Q(123, 45) = 70\\,542\\,215\\,894\\,646$.

Знайдіть $Q(12\\,345, 6\\,789)\bmod 135\\,707\\,531$.

# --hints--

`latticeQuadrilaterals()` має повернути `104354107`.

```js
assert.strictEqual(latticeQuadrilaterals(), 104354107);
```

# --seed--

## --seed-contents--

```js
function latticeQuadrilaterals() {

  return true;
}

latticeQuadrilaterals();
```

# --solutions--

```js
// solution required
```

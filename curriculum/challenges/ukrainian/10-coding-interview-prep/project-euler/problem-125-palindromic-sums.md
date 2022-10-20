---
id: 5900f3e91000cf542c50fefc
title: 'Задача 125: Сума цифр числа паліндром'
challengeType: 1
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

Паліндромне число 595 цікаве тим, що його можна записати як суму послідовних квадратів: $6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2$.

Існує рівно одинадцять паліндромів менших за одну тисячу, які можна записати як послідовність суми квадратів, і сума цифр цих паліндромів дорівнює 4164. Зауважте, що число $1 = 0^2 + 1^2$ не було враховане, оскільки ця задача стосується квадратів лише натуральних чисел.

Find the sum of all the numbers less than the  `limit`  that are both palindromic and can be written as the sum of consecutive squares.

# --hints--
`palindromicSums(100000000)` should return `2906969179`.

```js

assert.strictEqual(palindromicSums(100000000), 2906969179);

```

`palindromicSums(100)` should return `137`.

```js
assert.strictEqual(palindromicSums(100), 137);
```

`palindromicSums(1000)` should return `4164`.

```js
assert.strictEqual(palindromicSums(1000),4164);
```

# --seed--

## --seed-contents--

```js
function palindromicSums(limit) {

  return true;
}

palindromicSums(100);
```

# --solutions--

```js
function isPalindrome(num) {
  return num
    .toString()
    .split('')
    .every((digit, i, arr) => digit === arr[arr.length - 1 - i]);
}

function palindromicSums(limit) {
  let sumOfPalindromes = 0;
  const sqrtLimit = Math.sqrt(limit);
  const list = new Set();

  for (let i = 1; i <= sqrtLimit; i++) {
    let sumOfSquares = i * i;
    for (let j = i + 1; j <= sqrtLimit; j++) {
      sumOfSquares += j * j;
      if (sumOfSquares > limit) break;
      if (isPalindrome(sumOfSquares) && !list.has(sumOfSquares)) {
        sumOfPalindromes += sumOfSquares;
        list.add(sumOfSquares);
      }
    }
  }
  return sumOfPalindromes;
}
```

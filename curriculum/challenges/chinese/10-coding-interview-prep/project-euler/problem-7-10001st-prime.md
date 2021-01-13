---
id: 5900f3731000cf542c50fe86
title: 问题7：10001个素数
challengeType: 5
videoUrl: ''
dashedName: problem-7-10001st-prime
---

# --description--

通过列出前六个素数：2,3,5,7,11和13，我们可以看到第6个素数是13.第`n`个素数是多少？

# --hints--

`nthPrime(6)`应该返回13。

```js
assert.strictEqual(nthPrime(6), 13);
```

`nthPrime(10)`应该返回29。

```js
assert.strictEqual(nthPrime(10), 29);
```

`nthPrime(100)`应该返回541。

```js
assert.strictEqual(nthPrime(100), 541);
```

`nthPrime(1000)`应该返回7919。

```js
assert.strictEqual(nthPrime(1000), 7919);
```

`nthPrime(10001)`应该返回104743。

```js
assert.strictEqual(nthPrime(10001), 104743);
```

# --seed--

## --seed-contents--

```js
function nthPrime(n) {

  return true;
}

nthPrime(10001);
```

# --solutions--

```js
const nthPrime = n => {
  let pN = 2;
  let step = 0;
  while (step < n) {
    let isPrime = true;
    let rootN = Math.sqrt(pN);
    for (let i = 2; i <= rootN; i++) {
      if (!(pN % i)) {
        isPrime = false;
        break;
      }
    }
    isPrime ? step++ : '';
    pN++;
  }
  return pN - 1;
}
```

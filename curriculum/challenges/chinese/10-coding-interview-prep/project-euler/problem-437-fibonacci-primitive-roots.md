---
id: 5900f5241000cf542c510036
title: 问题437：斐波那契原始根
challengeType: 5
videoUrl: ''
dashedName: problem-437-fibonacci-primitive-roots
---

# --description--

当我们计算8n模11为n = 0到9时，我们得到：1,8,9,6,4,10,3,2,5,7。我们看到所有可能的值从1到10出现。所以8是11的原始根。但还有更多：如果我们仔细看看，我们看到：1 + 8 = 9 8 + 9 =17≡6mod11 9 + 6 =15≡4mod11 6 + 4 = 10 4 + 10 =14≡3mod11 10 + 3 =13≡2mod11 3 + 2 = 5 2 + 5 = 7 5 + 7 =12≡1mod11。

因此，8 mod 11的幂是循环的，具有周期10，并且8n + 8n +1≡8n+ 2（mod 11）。 8被称为11的斐波那契原始根。不是每个素数都有斐波那契原始根。有一个或多个Fibonacci原始根有323个小于10000的素数，这些素数的总和是1480491.用至少一个Fibonacci原始根找到小于100,000,000的素数之和。

# --hints--

`euler437()`应该返回74204709657207。

```js
assert.strictEqual(euler437(), 74204709657207);
```

# --seed--

## --seed-contents--

```js
function euler437() {

  return true;
}

euler437();
```

# --solutions--

```js
// solution required
```

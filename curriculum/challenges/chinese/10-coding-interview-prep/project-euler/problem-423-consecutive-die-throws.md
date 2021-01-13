---
id: 5900f5141000cf542c510027
title: 问题423：连续死球
challengeType: 5
videoUrl: ''
dashedName: problem-423-consecutive-die-throws
---

# --description--

令n为正整数。

一个6面的骰子被抛出n次。 令c为给出相同值的连续抛出的对数。

例如，如果n = 7并且掷骰的值为（1,1,5,6,6,6,3），那么以下连续投掷对将给出相同的值： （1,1,5,6,6,6,3） （1,1,5,6,6,6,3） （1,1,5,6,6,6,3） 因此，对于（1,1,5,6,6,6,3），c = 3。

将C（n）定义为n次抛出6面骰子的结果数，以使c不超过π（n）.1 例如，C（3）= 216，C（4）= 1290，C（11）= 361912500和C（24）= 4727547363281250000。

对于1≤n≤L，将S（L）定义为∑ C（n）。 例如，S（50）mod 1 000 000 007 = 832833871。

求S（50000000）mod 1000000007。

1π表示素数计数函数，即 π（n）是质数≤n的素数。

# --hints--

`euler423()`应该返回653972374。

```js
assert.strictEqual(euler423(), 653972374);
```

# --seed--

## --seed-contents--

```js
function euler423() {

  return true;
}

euler423();
```

# --solutions--

```js
// solution required
```

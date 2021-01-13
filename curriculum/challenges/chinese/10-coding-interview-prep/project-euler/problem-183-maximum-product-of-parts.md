---
id: 5900f4231000cf542c50ff36
title: 问题183：零件的最大产品
challengeType: 5
videoUrl: ''
dashedName: problem-183-maximum-product-of-parts
---

# --description--

令N为正整数，并且将N分成k个相等的部分，r = N / k，使得N = r + r + ... + r。设P是这些部分的乘积，P = r×r×...×r = rk。

例如，如果11被分成五个相等的部分，11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2，那么P = 2.25 = 51.53632。

对于给定的N值，设M（N）= Pmax。

事实证明，N = 11的最大值是通过将11分成4个相等的部分得到的，这导致Pmax =（11/4）4;即，M（11）= 14641/256 = 57.19140625，这是终止小数。

然而，对于N = 8，通过将其分成三个相等的部分来实现最大值，因此M（8）= 512/27，这是非终止小数。

如果M（N）是非终止小数，则令D（N）= N，如果M（N）是终止小数，则D（N）= -N。

例如，5≤N≤100的ΣD（N）是2438。

求ΣD（N）为5≤N≤10000。

# --hints--

`euler183()`应该返回48861552。

```js
assert.strictEqual(euler183(), 48861552);
```

# --seed--

## --seed-contents--

```js
function euler183() {

  return true;
}

euler183();
```

# --solutions--

```js
// solution required
```

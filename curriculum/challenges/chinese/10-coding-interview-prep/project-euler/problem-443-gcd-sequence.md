---
id: 5900f5271000cf542c51003a
title: 问题443：GCD序列
challengeType: 5
videoUrl: ''
dashedName: problem-443-gcd-sequence
---

# --description--

设g（n）为如下定义的序列：g（4）= 13，g（n）= g（n-1）+ gcd（n，g（n-1）），n> 4。

前几个值是：

```
 n4567891011121314151617181920... g(n)1314161718272829303132333451545560... 
```

给出g（1 000）= 2524和g（1 000 000）= 2624152。

找到g（1015）。

# --hints--

`euler443()`应该返回2744233049300770。

```js
assert.strictEqual(euler443(), 2744233049300770);
```

# --seed--

## --seed-contents--

```js
function euler443() {

  return true;
}

euler443();
```

# --solutions--

```js
// solution required
```

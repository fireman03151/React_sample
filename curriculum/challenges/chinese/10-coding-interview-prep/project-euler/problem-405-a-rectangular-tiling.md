---
id: 5900f5021000cf542c510014
title: 问题405：矩形平铺
challengeType: 5
videoUrl: ''
dashedName: problem-405-a-rectangular-tiling
---

# --description--

我们希望平铺一个长度是其宽度两倍的矩形。设T（0）为由单个矩形组成的平铺。对于n> 0，通过以下列方式替换所有瓦片，从T（n-1）获得T（n）：

以下动画演示了从0到5的n的倾斜T（n）：

设f（n）是四个瓦片在T（n）中相交的点数。例如，f（1）= 0，f（4）= 82并且f（109）mod 177 = 126897180。

找到f（10k）为k = 1018，给出你的答案模数为177。

# --hints--

`euler405()`应返回237696125。

```js
assert.strictEqual(euler405(), 237696125);
```

# --seed--

## --seed-contents--

```js
function euler405() {

  return true;
}

euler405();
```

# --solutions--

```js
// solution required
```

---
id: 5900f4f71000cf542c510009
title: 问题394：吃馅饼
challengeType: 5
videoUrl: ''
dashedName: problem-394-eating-pie
---

# --description--

杰夫以一种不同寻常的方式吃馅饼。馅饼是圆形的。他首先沿着半径切割馅饼中的初始切口。虽然剩下至少给定的馅饼F分数，但他执行以下程序： - 他从饼图中心到馅饼边框剩余的任何一点做两个切片，剩下的馅饼边框上的任何一点都有可能。这将把剩下的馅饼分成三块。 - 从最初的切割逆时针走，他拿出前两个馅饼并吃掉它们。当剩下不到一小部分馅饼时，他不再重复这个过程。相反，他吃剩下的所有馅饼。

对于x≥1，设E（x）是Jeff重复上述过程的预期次数，F = 1 / x。可以证实E（1）= 1，E（2）≈1.2676536759，和E（7.5）≈2.1215732071。

找到E（40）舍入到小数点后面的10位小数。

# --hints--

`euler394()`应返回3.2370342194。

```js
assert.strictEqual(euler394(), 3.2370342194);
```

# --seed--

## --seed-contents--

```js
function euler394() {

  return true;
}

euler394();
```

# --solutions--

```js
// solution required
```

---
id: 5900f3c31000cf542c50fed5
title: 问题86：长方体路线
challengeType: 5
videoUrl: ''
dashedName: problem-86-cuboid-route
---

# --description--

一只蜘蛛S坐在一个长方形房间的一个角落里，尺寸为6乘5乘3，一只苍蝇F坐在对面的角落里。通过在房间的表面上行进，从S到F的最短“直线”距离是10并且路径在图上示出。

但是，对于任何给定的长方体，最多有三个“最短”路径候选，并且最短路径并不总是具有整数长度。可以证明，正好有2060个不同的长方体，忽略旋转，具有整数尺寸，最大尺寸为M×M×M，当M = 100时，最短路径具有整数长度。这是最小值M的解决方案数首先超过两千;当M = 99时的解的数量是1975.找到M的最小值，使得解的数量首先超过一百万。

# --hints--

`euler86()`应该返回1818年。

```js
assert.strictEqual(euler86(), 1818);
```

# --seed--

## --seed-contents--

```js
function cuboidRoute() {

  return true;
}

cuboidRoute();
```

# --solutions--

```js
// solution required
```

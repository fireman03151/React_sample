---
id: 5900f4d91000cf542c50ffea
title: 问题364：舒适的距离
challengeType: 5
videoUrl: ''
dashedName: problem-364-comfortable-distance
---

# --description--

连续N个座位。根据以下规则，N人互相填充座位：如果有任何座位，相邻的座位没有被占用，请使用这样的座位。如果没有这样的座位并且有任何座位仅占用一个相邻的座位，则使用这样的座位。否则请选择剩余的可用座位之一。

设T（N）是具有给定规则的N个人占用N个座位的可能性的数量。下图显示T（4）= 8。

我们可以验证T（10）= 61632和T（1 000）mod 100 000 007 = 47255094.求T（1 000 000）mod 100 000 007。

# --hints--

`euler364()`应返回44855254。

```js
assert.strictEqual(euler364(), 44855254);
```

# --seed--

## --seed-contents--

```js
function euler364() {

  return true;
}

euler364();
```

# --solutions--

```js
// solution required
```

---
id: 5900f43c1000cf542c50ff4e
title: 问题207：整数分区方程
challengeType: 5
videoUrl: ''
dashedName: problem-207-integer-partition-equations
---

# --description--

对于一些正整数k，存在形式为4t = 2t + k的整数分区，其中4t，2t和k都是正整数而t是实数。

前两个这样的分区是41 = 21 + 2和41.5849625 ...... = 21.5849625 ... + 6。

t也是整数的分区称为完美。对于任何m≥1，让P（m）为k≤m的完美分区的比例。因此P（6）= 1/2。

在下表中列出了一些P（m）P（5）= 1/1 P（10）= 1/2 P（15）= 2/3 P（20）= 1/2 P（25）= 1/2 P（30）= 2/5 ... P（180）= 1/4 P（185）= 3/13

找到P（m）&lt;1/12345的最小m

# --hints--

`euler207()`应该返回44043947822。

```js
assert.strictEqual(euler207(), 44043947822);
```

# --seed--

## --seed-contents--

```js
function euler207() {

  return true;
}

euler207();
```

# --solutions--

```js
// solution required
```

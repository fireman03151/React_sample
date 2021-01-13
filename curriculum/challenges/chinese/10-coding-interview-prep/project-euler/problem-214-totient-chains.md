---
id: 5900f4421000cf542c50ff55
title: 问题214个欧拉链
challengeType: 5
videoUrl: ''
dashedName: problem-214-totient-chains
---

# --description--

设φ是欧拉的函数，即对于自然数n，φ（n）是k的数，1≤k≤n，gcd（k，n）= 1。

通过迭代φ，每个正整数产生以1结尾的数字递减的链。例如，如果我们从5开始，则生成序列5,4,2,1。以下列出了长度为4的所有链条：

5,4,2,1 7,6,2,1 8,4,2,1 9,6,2,1 10,4,2,1 12,4,2,1 14,6,2,1 18 ，6,2,1

这些链中只有两个以素数开头，它们的总和为12。

所有小于40000000的素数的总和是多少，它产生一个长度为25的链？

# --hints--

`euler214()`应该返回1677366278943。

```js
assert.strictEqual(euler214(), 1677366278943);
```

# --seed--

## --seed-contents--

```js
function euler214() {

  return true;
}

euler214();
```

# --solutions--

```js
// solution required
```

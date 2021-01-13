---
id: 5900f4141000cf542c50ff26
title: 问题167：研究Ulam序列
challengeType: 5
videoUrl: ''
dashedName: problem-167-investigating-ulam-sequences
---

# --description--

对于两个正整数a和b，Ulam序列U（a，b）由U（a，b）1 = a，U（a，b）2 = b定义，对于k> 2，U（a，b） ）k是大于U（a，b）（k-1）的最小整数，它可以用一种方式写成U（a，b）的两个不同的先前成员的总和。例如，序列U（1,2）以1,2,3 = 1 + 2,4 = 1 + 3,6 = 2 + 4,8 = 2 + 6,11 = 3 + 8开始; 5不属于它，因为5 = 1 + 4 = 2 + 3有两个表示作为前两个成员的总和，同样7 = 1 + 6 = 3 + 4.找到ΣU（2,2n + 1）k为2≤n≤10，其中k = 1011。

# --hints--

`euler167()`应该返回3916160068885。

```js
assert.strictEqual(euler167(), 3916160068885);
```

# --seed--

## --seed-contents--

```js
function euler167() {

  return true;
}

euler167();
```

# --solutions--

```js
// solution required
```

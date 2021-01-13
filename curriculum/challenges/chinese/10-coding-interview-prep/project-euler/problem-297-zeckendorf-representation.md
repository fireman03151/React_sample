---
id: 5900f4951000cf542c50ffa8
title: 问题297：Zeckendorf表示
challengeType: 5
videoUrl: ''
dashedName: problem-297-zeckendorf-representation
---

# --description--

斐波那契数列中的每个新项都是通过将前两个项相加而生成的。

从1和2开始，前10个术语将是：1、2、3、5、8、13、21、34、55、89。

每个正整数都可以唯一地写为斐波纳契数列的非连续项之和。 例如，100 = 3 + 8 + 89。 这样的总和称为数字的Zeckendorf表示。

对于任何n> 0的整数，令z（n）为n的Zeckendorf表示中的项数。 因此，z（5）= 1，z（14）= 2，z（100）= 3等。 另外，对于0 ＜n ＜106，∑ z（n）＝ 7894453。

求出∑ z（n）为0 &lt; n &lt; 1017。

# --hints--

`euler297()`应该返回2252639041804718000。

```js
assert.strictEqual(euler297(), 2252639041804718000);
```

# --seed--

## --seed-contents--

```js
function euler297() {

  return true;
}

euler297();
```

# --solutions--

```js
// solution required
```

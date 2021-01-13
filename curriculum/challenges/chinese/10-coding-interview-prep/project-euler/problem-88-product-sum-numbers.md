---
id: 5900f3c51000cf542c50fed6
title: 问题88：产品总和数
challengeType: 5
videoUrl: ''
dashedName: problem-88-product-sum-numbers
---

# --description--

可以写为至少两个自然数{a1，a2，...，ak}的给定集合的和和乘积的自然数N称为乘积和数：N = a1 + a2 + ... + ak = a1×a2×...×ak。例如，6 = 1 + 2 + 3 = 1×2×3。对于给定的大小集合k，我们将使用此属性调用最小的N作为最小乘积和数。尺寸组k = 2,3,4,5和6的最小乘积和数如下。 k = 2：4 = 2×2 = 2 + 2k = 3：6 = 1×2×3 = 1 + 2 + 3k = 4：8 = 1×1×2×4 = 1 + 1 + 2 + 4k = 5：8 = 1×1×2×2×2 = 1 + 1 + 2 + 2 + 2k = 6：12 = 1×1×1×1×2×6 = 1 + 1 + 1 + 1 + 2 +因此，对于2≤k≤6，所有最小乘积和数之和为4 + 6 + 8 + 12 = 30;请注意，8只计算总和一次。实际上，由于2≤k≤12的完整最小乘积和数是{4,6,8,12,15,16}，因此总和为61.所有最小乘积和的总和是多少数字为2≤k≤12000？

# --hints--

`euler88()`应该返回7587457。

```js
assert.strictEqual(euler88(), 7587457);
```

# --seed--

## --seed-contents--

```js
function productSumNumbers() {

  return true;
}

productSumNumbers();
```

# --solutions--

```js
// solution required
```

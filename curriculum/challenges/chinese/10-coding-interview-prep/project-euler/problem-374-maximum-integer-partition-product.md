---
id: 5900f4e51000cf542c50fff6
title: 问题374：最大整数分区产品
challengeType: 5
videoUrl: ''
dashedName: problem-374-maximum-integer-partition-product
---

# --description--

数字n的整数分区是将n写为正整数之和的方法。

仅按其加数顺序不同的分区被认为是相同的。将n分成不同部分是n的分区，其中每个部分最多出现一次。

5个不同部分的分区是：5,4 + 1和3 + 2。

设f（n）是n的任何这种分区的部分到不同部分的最大乘积，并且令m（n）是具有该乘积的n的任何这种分区的元素的数量。

所以f（5）= 6，m（5）= 2。

对于n = 10，具有最大乘积的分区是10 = 2 + 3 + 5，其给出f（10）= 30和m（10）= 3。并且他们的产品，f（10）·m（10）= 30·3 = 90

可以证实Σf（n）·m（n）对于1≤n≤100= 1683550844462。

找到Σf（n）·m（n）为1≤n≤1014。给出你的答案模数982451653，即第5000万个素数。

# --hints--

`euler374()`应该返回334420941。

```js
assert.strictEqual(euler374(), 334420941);
```

# --seed--

## --seed-contents--

```js
function euler374() {

  return true;
}

euler374();
```

# --solutions--

```js
// solution required
```

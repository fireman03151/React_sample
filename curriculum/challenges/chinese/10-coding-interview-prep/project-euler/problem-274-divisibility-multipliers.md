---
id: 5900f47f1000cf542c50ff91
title: 问题274：可分性乘数
challengeType: 5
videoUrl: ''
dashedName: problem-274-divisibility-multipliers
---

# --description--

对于每个整数p> 1互质到10，有一个正的可分性乘数m &lt;p，它对任何正整数n的后续函数保持p的可除性。

f（n）=（除了n的最后一位以外的所有数字）+（n的最后一位）\* m

也就是说，如果m是p的可分数乘数，则当且仅当n可被p整除时，f（n）可被p整除。

（当n远大于p时，f（n）将小于n，并且f的重复应用为p提供乘法可除性测试。）

例如，113的可分性乘数是34。

f（76275）= 7627 + 5 *34 = 7797：76275和7797都可以被113f（12345）= 1234 + 5* 34 = 1404：12345和1404整除都不能被113整除

对于10和小于1000互质的素数的可除性乘数的总和是39517.对于10和小于107互质的素数的可除数乘数的总和是多少？

# --hints--

`euler274()`应该返回1601912348822。

```js
assert.strictEqual(euler274(), 1601912348822);
```

# --seed--

## --seed-contents--

```js
function euler274() {

  return true;
}

euler274();
```

# --solutions--

```js
// solution required
```

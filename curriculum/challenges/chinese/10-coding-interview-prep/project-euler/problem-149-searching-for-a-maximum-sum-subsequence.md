---
id: 5900f4021000cf542c50ff13
title: 问题149：搜索最大和子序列
challengeType: 5
videoUrl: ''
dashedName: problem-149-searching-for-a-maximum-sum-subsequence
---

# --description--

查看下表，可以很容易地验证任意方向（水平，垂直，对角或反对角）上相邻数字的最大和为16（= 8 + 7 + 1）。

−25329−6513273−18−4 8

现在，让我们重复搜索，但范围更大：

首先，使用称为“滞后斐波那契生成器”的特定形式生成四百万个伪随机数：

对于1≤k≤55，sk = \[100003 − 200003k + 300007k3]（模1000000）− 500000。 对于56≤k≤4000000，sk = \[sk-24 + sk-55 + 1000000]（模1000000）− 500000。

因此，s10 = -393027，s100 = 86613。

然后，将s的项排列在2000×2000表中，使用前2000个数字（顺序）填充第一行，使用后2000个数字填充第二行，依此类推。

最后，在任何方向（水平，垂直，对角线或反对角线）上找到（任意数量）相邻项的最大和。

# --hints--

`euler149()`应该返回52852124。

```js
assert.strictEqual(euler149(), 52852124);
```

# --seed--

## --seed-contents--

```js
function euler149() {

  return true;
}

euler149();
```

# --solutions--

```js
// solution required
```

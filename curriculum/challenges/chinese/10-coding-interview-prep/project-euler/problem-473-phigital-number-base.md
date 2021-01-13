---
id: 5900f5461000cf542c510058
title: 问题473：数字基数
challengeType: 5
videoUrl: ''
dashedName: problem-473-phigital-number-base
---

# --description--

让$ \\ varphi $成为黄金比例：$ \\ varphi = \\ frac {1+ \\ sqrt {5}} {2}。$值得注意的是，有可能将每个正整数写为$ \\ varphi $的幂的总和如果我们要求$ \\ varphi $的每个幂在此总和中最多使用一次。即使这样，这种表现也不是唯一的。我们可以通过要求不使用具有连续指数的幂并且表示是有限的来使其独特。例如：$ 2 = \\ varphi + \\ varphi ^ { - 2} $和$ 3 = \\ varphi ^ {2} + \\ varphi ^ { - 2} $

为了表示$ \\ varphi $的这个幂的总和，我们使用一个0和1的字符串以及一个指示负指数开始位置的点。我们将其称为数字数字库中的表示。所以$ 1 = 1 *{\\ varphi} $，$ 2 = 10.01* {\\ varphi} $，$ 3 = 100.01 *{\\ varphi} $和$ 14 = 100100.001001* {\\ varphi} $。数字基数中代表1,2和14的字符串是回文，而表示3的字符串则不是。 （数字点不是中间字符）。

正数整数不超过1000，其数字表示为回文的总和为4345。

找出不超过$ 10 ^ {10} $的正整数之和，其数字表示为回文。

# --hints--

`euler473()`应该返回35856681704365。

```js
assert.strictEqual(euler473(), 35856681704365);
```

# --seed--

## --seed-contents--

```js
function euler473() {

  return true;
}

euler473();
```

# --solutions--

```js
// solution required
```

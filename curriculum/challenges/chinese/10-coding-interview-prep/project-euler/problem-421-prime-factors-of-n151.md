---
id: 5900f5131000cf542c510024
title: 问题421：n15 +1的素因子
challengeType: 5
videoUrl: ''
dashedName: problem-421-prime-factors-of-n151
---

# --description--

对于n> 1的每个整数，n15 +1形式的数字是合成的。

对于正整数n和m，将s（n，m）定义为不超过m的n15 +1个不同素数因子的总和。

例如 215 + 1 = 3×3×11×331。 因此s（2.10）= 3且s（2,1000）= 3 + 11 + 331 = 345。

同样是1015 +1 = 7×11×13×211×241×2161×9091。 因此s（10,100）= 31，而s（10,1000）= 483。 求出∑ s（n，108）为1≤n≤1011。

# --hints--

`euler421()`应该返回2304215802083466200。

```js
assert.strictEqual(euler421(), 2304215802083466200);
```

# --seed--

## --seed-contents--

```js
function euler421() {

  return true;
}

euler421();
```

# --solutions--

```js
// solution required
```

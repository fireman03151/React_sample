---
id: 5900f4031000cf542c50ff15
title: 问题150：在三角形阵列中搜索具有最小和的子三角形
challengeType: 5
videoUrl: ''
dashedName: problem-150-searching-a-triangular-array-for-a-sub-triangle-having-minimum-sum
---

# --description--

在正整数和负整数的三角形阵列中，我们希望找到一个子三角形，使得它包含的数字之和尽可能小。在下面的示例中，可以很容易地验证标记的三角形满足具有-42的总和的条件。

我们希望制作一个包含一千行的三角形数组，因此我们使用一种随机数生成器（称为线性同余生成器）生成5009个伪随机数sk，范围为±219，如下所示：t：= 0

对于k = 1到k = 500500：

t：=（615949 \* t + 797807）modulo 220 sk：= t-219因此：s1 = 273519，s2 = -153582，s3 = 450905等我们的三角形数组然后使用伪随机数形成：

s1 s2 s3 s4 s5 s6

s7 s8 s9 s10 ......

子三角形可以从数组的任何元素开始，并在我们喜欢的范围内向下延伸（从下一行直接接收它下面的两个元素，之后直接从该行下面的三个元素，依此类推）。

“三角形的总和”定义为它包含的所有元素的总和。

找到可能的最小子三角形和。

# --hints--

`euler150()`应返回-271248680。

```js
assert.strictEqual(euler150(), -271248680);
```

# --seed--

## --seed-contents--

```js
function euler150() {

  return true;
}

euler150();
```

# --solutions--

```js
// solution required
```

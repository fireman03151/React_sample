---
id: 5900f4071000cf542c50ff19
title: 问题154：探索帕斯卡的金字塔
challengeType: 5
videoUrl: ''
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

使用球形球构造三角形金字塔，使得每个球恰好位于下一个较低水平的三个球上。

然后，我们计算从顶点到每个位置的路径数量：路径从顶点开始并向下前进到当前位置正下方的三个球体中的任何一个。因此，到达某个位置的路径数是紧接在其上方的数字的总和（取决于位置，在其上方最多有三个数字）。结果是Pascal的金字塔，每个级别n的数字是三项式展开（x + y + z）n的系数。 （x + y + z）200000的扩展中有多少个系数是1012的倍数？

# --hints--

`euler154()`应该返回479742450。

```js
assert.strictEqual(euler154(), 479742450);
```

# --seed--

## --seed-contents--

```js
function euler154() {

  return true;
}

euler154();
```

# --solutions--

```js
// solution required
```

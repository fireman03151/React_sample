---
id: 5900f3ea1000cf542c50fefd
title: 问题126：长方体层
challengeType: 5
videoUrl: ''
dashedName: problem-126-cuboid-layers
---

# --description--

覆盖尺寸为3 x 2 x 1的长方体上每个可见面的最小立方体数量为22。

如果我们在这个固体上添加第二层，则需要四十六个立方体来覆盖每个可见面，第三层需要七十八个立方体，第四层需要一百一十八个立方体来覆盖每个可见面。然而，尺寸为5 x 1 x 1的长方体上的第一层也需要22个立方体;类似地，尺寸为5 x 3 x 1,7 x 2 x 1和11 x 1 x 1的长方体上的第一层都包含四十六个立方体。我们将定义C（n）来表示在其一个层中包含n个立方体的长方体的数量。因此，C（22）= 2，C（46）= 4，C（78）= 5，并且C（118）= 8.结果，154是n的最小值，其中C（n）= 10。找到n的最小值，其中C（n）= 1000。

# --hints--

`euler126()`应返回18522。

```js
assert.strictEqual(euler126(), 18522);
```

# --seed--

## --seed-contents--

```js
function euler126() {

  return true;
}

euler126();
```

# --solutions--

```js
// solution required
```

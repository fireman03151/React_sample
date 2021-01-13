---
id: 5900f5081000cf542c510019
title: 问题411：上坡路径
challengeType: 5
videoUrl: ''
dashedName: problem-411-uphill-paths
---

# --description--

设n是正整数。假设坐标（x，y）=（2i mod n，3i mod n）的站点为0≤i≤2n。我们将考虑与同一站点具有相同坐标的站点。

我们希望形成从（0,0）到（n，n）的路径，使得x和y坐标永不减少。设S（n）是路径可以通过的最大站数。

例如，如果n = 22，则有11个不同的站，并且有效路径最多可以通过5个站。因此，S（22）= 5.下面举例说明了一个最佳路径的例子：

还可以证实S（123）= 14并且S（10000）= 48。

求1Σk≤30，ΣS（k5）。

# --hints--

`euler411()`应返回9936352。

```js
assert.strictEqual(euler411(), 9936352);
```

# --seed--

## --seed-contents--

```js
function euler411() {

  return true;
}

euler411();
```

# --solutions--

```js
// solution required
```

---
id: 5900f5181000cf542c51002a
title: 问题427：n序列
challengeType: 5
videoUrl: ''
dashedName: problem-427-n-sequences
---

# --description--

整数序列S = {si}如果具有n个元素，则每个元素满足1≤si≤n，则称为n序列。 因此，总共有nn个不同的n序列。

例如，序列S = {1、5、5、10、7、7、7、2、3、7}是10个序列。

对于任何序列S，令L（S）为具有相同值的S的最长连续存在的长度。 例如，对于上面给定的序列S，由于三个连续的7，L（S）= 3。

对于所有n序列S，令f（n）= ∑ L（S）。

例如，f（3）= 45，f（7）= 1403689和f（11）= 481496895121。

找出f（7,500,000）mod 1 000 009。

# --hints--

`euler427()`应该返回97138867。

```js
assert.strictEqual(euler427(), 97138867);
```

# --seed--

## --seed-contents--

```js
function euler427() {

  return true;
}

euler427();
```

# --solutions--

```js
// solution required
```

---
id: 5900f40a1000cf542c50ff1d
title: 问题158：探索在其邻居之后只有一个字符按字典顺序出现的字符串
challengeType: 5
videoUrl: ''
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

从字母表的26个字母中取三个不同的字母，可以形成长度为3的字符串。例如'abc'，'hat'和'zyx'。当我们研究这三个例子时，我们看到对于'abc'，两个字符在其左边的邻居之后以字典方式出现。对于“帽子”，只有一个字符在其左边的邻居之后按字典顺序排列。对于'zyx'，在左边的邻居之后，字典上有零个字符。总共有10400个长度为3的字符串，其中一个字符在其左边的邻居之后按字典顺序排列。我们现在考虑字母表中n≤26个不同字符的字符串。对于每个n，p（n）是长度为n的字符串的数量，正好一个字符在其左边的邻居之后按字典顺序排列。 p（n）的最大值是多少？

# --hints--

`euler158()`应该返回409511334375。

```js
assert.strictEqual(euler158(), 409511334375);
```

# --seed--

## --seed-contents--

```js
function euler158() {

  return true;
}

euler158();
```

# --solutions--

```js
// solution required
```

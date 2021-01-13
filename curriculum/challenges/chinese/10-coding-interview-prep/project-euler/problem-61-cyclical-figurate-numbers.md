---
id: 5900f3a91000cf542c50febc
title: 问题61：循环图号
challengeType: 5
videoUrl: ''
dashedName: problem-61-cyclical-figurate-numbers
---

# --description--

三角形，正方形，五边形，六边形，七边形和八边形数字都是图形（多边形）数字，由以下公式生成：三角形

P3中，n = N（N + 1）/ 2

1,3,6,10,15 ......方形

P4 N = N2

1,4,9,16,25 ......五角形

P5，N = N（3N-1）/ 2

1,5,12,22,35 ......六角形

P6，N = N（2N-1）

1,6,15,28,45 ...... Heptagonal

P7，N = N（5N-3）/ 2

1,7,18,34,55，......八角形

P8，N = N（3N-2）

1,8,21,40,65，......三个4位数字的有序集合：8128,2882,8281，有三个有趣的属性。该集合是循环的，因为每个数字的最后两位数字是下一个数字的前两位数字（包括与第一个数字相关的最后一个数字）。每个多边形类型：三角形（P3,127 = 8128），方形（P4,91 = 8281）和五边形（P5,44 = 2882），由集合中的不同数字表示。这是具有此属性的唯一一组4位数字。求出六个循环4位数字的唯一有序集合的总和，其中每个多边形类型：三角形，正方形，五边形，六边形，七边形和八边形，由集合中的不同数字表示。

# --hints--

`euler61()`应返回28684。

```js
assert.strictEqual(euler61(), 28684);
```

# --seed--

## --seed-contents--

```js
function cyclicalFigurateNums() {

  return true;
}

cyclicalFigurateNums();
```

# --solutions--

```js
// solution required
```

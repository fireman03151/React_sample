---
id: 5900f3d61000cf542c50fee7
title: '問題 103：特殊子集和：最優'
challengeType: 1
forumTopicId: 301727
dashedName: problem-103-special-subset-sums-optimum
---

# --description--

設 $S(A)$ 是大小爲 n 的集合 A 中所有元素之和。 若任取集合 A 中任意兩個非空且沒有交集的集合 B 和 C，滿足下列兩個條件，那麼我們就稱集合 A 爲特殊的和集：

1. $S(B) ≠ S(C)$; 即任意子集所有元素的和均不相同。
2. 如果集合 B 中的元素個數多於集合 C，那麼 $S(B) > S(C)$。

對於給定的數字 n，我們稱使得 $S(A)$ 最小的集合 A 爲最優特殊和集。 下面給出前五個最優特殊和集。

$$\begin{align}   & n = 1: \\{1\\} \\\\
  & n = 2: \\{1, 2\\} \\\\   & n = 3: \\{2, 3, 4\\} \\\\
  & n = 4: \\{3, 5, 6, 7\\} \\\\   & n = 5: \\{6, 9, 11, 12, 13\\} \\\\
\end{align}$$

由上述規律可以猜測，似乎對於一個給定的最優特殊和集 $A = \\{a_1, a_2, \ldots, a_n\\}$，下一個最優特殊和集將會是 $B = \\{b, a_1 + b, a_2 + b, \ldots, a_n + b\\}$，其中 b 是集合 A 的“中間”元素。

通過上述“規則”，我們猜測當 $n = 6$ 時，最優特殊和集應爲 $A = \\{11, 17, 20, 22, 23, 24\\}$，且 $S(A) = 117$。 However, this is not the optimum set, as we have merely applied an algorithm to provide a near optimum set. The optimum set for $n = 6$ is $A = \\{11, 18, 19, 20, 22, 25\\}$, with $S(A) = 115$ and corresponding set string: `111819202225`.

Given that A is an optimum special sum set for $n = 7$, find its set string.

**Note:** This problem is related to Problem 105 and Problem 106.

# --hints--

`optimumSpecialSumSet()` should return the string `20313839404245`.

```js
assert.strictEqual(optimumSpecialSumSet(), '20313839404245');
```

# --seed--

## --seed-contents--

```js
function optimumSpecialSumSet() {

  return true;
}

optimumSpecialSumSet();
```

# --solutions--

```js
// solution required
```

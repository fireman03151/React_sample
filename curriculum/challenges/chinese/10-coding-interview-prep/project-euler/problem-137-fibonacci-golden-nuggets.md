---
id: 5900f3f51000cf542c50ff08
title: 问题137：斐波那契金块
challengeType: 5
videoUrl: ''
dashedName: problem-137-fibonacci-golden-nuggets
---

# --description--

考虑无穷多项式系列AF（x）= xF1 + x2F2 + x3F3 + ...，其中Fk是斐波纳契数列中的第k项：1,1,2,3,5,8，...;也就是说，Fk = Fk-1 + Fk-2，F1 = 1且F2 = 1.对于这个问题，我们将对x的值感兴趣，其中AF（x）是正整数。令人惊讶的是AF（1/2）=（1/2）.1 +（1/2）2.1 +（1/2）3.2 +（1/2）4.3 +（1/2）5.5 + ......

= 1/2 + 1/4 + 2/8 + 3/16 + 5/32 + ......

= 2前五个自然数的x的相应值如下所示。

xAF（x）√2-111/ 22（√13-2）/ 33（√89-5）/ 84（√34-3）/ 55

如果x是理性的，我们将AF（x）称为金块，因为它们变得越来越稀少;例如，第10个金块是74049690.找到第15个金块。

# --hints--

`euler137()`应该返回1120149658760。

```js
assert.strictEqual(euler137(), 1120149658760);
```

# --seed--

## --seed-contents--

```js
function euler137() {

  return true;
}

euler137();
```

# --solutions--

```js
// solution required
```

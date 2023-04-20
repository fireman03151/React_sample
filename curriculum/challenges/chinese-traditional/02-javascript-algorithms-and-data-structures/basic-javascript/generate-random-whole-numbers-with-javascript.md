---
id: cf1111c1c12feddfaeb1bdef
title: 使用 JavaScript 生成隨機整數
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

You can generate random decimal numbers with `Math.random()`, but sometimes you need to generate random whole numbers. The following process will give you a random whole number less than `20`:

1. Use `Math.random()` to generate a random decimal number.
2. Multiply that random decimal number by `20`.
3. Use `Math.floor()` to round this number down to its nearest whole number.

Remember that `Math.random()` can never quite return a `1`, so it's impossible to actually get `20` since you are rounding down with `Math.floor()`. This process will give you a random whole number in the range from `0` to `19`.

Putting everything together, this is what your code looks like:

```js
Math.floor(Math.random() * 20);
```

You are calling `Math.random()`, multiplying the result by 20, then passing the value to `Math.floor()` to round the value down to the nearest whole number.

# --instructions--

Use this technique to generate and return a random whole number in the range from `0` to `9`.

# --hints--

`randomWholeNum` 的結果應該是一個整數。

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

應該使用 `Math.random` 生成一個隨機數字。

```js
assert(code.match(/Math.random/g).length >= 1);
```

You should have multiplied the result of `Math.random` by 10 to make it a number in the range from zero to nine.

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

應該使用 `Math.floor` 來刪除數字的十進制部分。

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {
  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```

---
id: 56533eb9ac21ba0edf2244d8
title: 逻辑与运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

有时你需要在一次判断中做多个操作。 当且仅当<dfn>运算符</dfn>的左边和右边都是 true，<dfn>逻辑与</dfn>运算符（`&&`）才会返回 `true`。

可以通过在一个 `if` 语句中嵌套另一个 `if` 语句来实现同样的效果。

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

当 `num` 的值大于 `5` 并且小于`10`，代码会返回 `Yes`。 可以使用<dfn>逻辑 and</dfn> 操作符写出相同的逻辑。

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

请使用 `&&` 运算符把两个 if 语句合并为一个 if 语句，如果 `val` 小于或等于 `50` 并且大于或等于 `25` 时，返回 `Yes`。 否则，将返回 `No`。

# --hints--

你应该使用 `&&` 运算符一次。

```js
assert(code.match(/&&/g).length === 1);
```

你应该只有一个 `if` 表达式。

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalAnd(0)` 应该返回字符串 `No`

```js
assert(testLogicalAnd(0) === 'No');
```

`testLogicalAnd(24)` 应该返回字符串 `No`

```js
assert(testLogicalAnd(24) === 'No');
```

`testLogicalAnd(25)` 应该返回字符串 `Yes`

```js
assert(testLogicalAnd(25) === 'Yes');
```

`testLogicalAnd(30)` 应该返回字符串 `Yes`

```js
assert(testLogicalAnd(30) === 'Yes');
```

`testLogicalAnd(50)` 应该返回字符串 `Yes`

```js
assert(testLogicalAnd(50) === 'Yes');
```

`testLogicalAnd(51)` 应该返回字符串 `No`

```js
assert(testLogicalAnd(51) === 'No');
```

`testLogicalAnd(75)` 应该返回字符串 `No`

```js
assert(testLogicalAnd(75) === 'No');
```

`testLogicalAnd(80)` 应该返回字符串 `No`

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```

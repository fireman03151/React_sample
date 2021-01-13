---
id: 587d7b89367417b2b2512b4b
title: 使用解构赋值从数组中分配变量
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

在 ES6 里面，解构数组可以如同解构对象一样简单。

与数组解构不同，数组的扩展运算会将数组里的所有内容分解成一个由逗号分隔的列表。所以，你不能选择哪个元素来给变量赋值。

而对数组进行解构却可以让我们做到这一点：

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

变量`a`以及`b`分别被数组的第一、第二个元素赋值。 我们甚至能在数组解构中使用逗号分隔符，来获取任意一个想要的值：

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

# --instructions--

使用数组解构来交换变量`a`与`b`的值。使`a`、`b`能分别获得对方的值。

# --hints--

在交换后，`a`的值应该为6。

```js
assert(a === 6);
```

在交换后，`b`的值应该为8。

```js
assert(b === 8);
```

使用数组解构来交换`a`和`b`。

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// Only change code below this line
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```

---
id: 56bbb991ad1ed5201cd392cd
title: 使用 shift() 操作数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()`函数用来移出数组中最后一个元素。如果想要移出第一个元素要怎么办呢？

这就是`.shift()`的用武之地。它的工作原理就像`.pop()`，但它移除的是第一个元素，而不是最后一个。

# --instructions--

使用`.shift()`函数移出`myArray`中的第一项，并把“移出”的值赋给`removedFromMyArray`。

# --hints--

`myArray`应该等于`[["dog", 3]]`。

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

`removedFromMyArray`应该包含`["John", 23]`。

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray;
```

# --solutions--

```js
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
```

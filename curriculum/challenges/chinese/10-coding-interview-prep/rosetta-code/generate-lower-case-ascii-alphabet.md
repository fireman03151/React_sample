---
id: 5a23c84252665b21eecc7e7a
title: 生成小写ASCII字母表
challengeType: 5
videoUrl: ''
dashedName: generate-lower-case-ascii-alphabet
---

# --description--

编写一个函数以生成给定范围的小写ASCII字符数组。例如：对于范围1到4，函数应返回`['a','b','c','d']` 。

# --hints--

`lascii`应该是一个功能。

```js
assert(typeof lascii == 'function');
```

`lascii("a","d")`应该返回一个数组。

```js
assert(Array.isArray(lascii('a', 'd')));
```

`lascii("a","d")`应该返回`[ "a", "b", "c", "d" ]` 。

```js
assert.deepEqual(lascii('a', 'd'), results[0]);
```

`lascii("c","i")`应该返回`[ "c", "d", "e", "f", "g", "h", "i" ]` 。

```js
assert.deepEqual(lascii('c', 'i'), results[1]);
```

`lascii("m","q")`应该返回`[ "m", "n", "o", "p", "q" ]` 。

```js
assert.deepEqual(lascii('m', 'q'), results[2]);
```

`lascii("k","n")`应返回`[ "k", "l", "m", "n" ]` 。

```js
assert.deepEqual(lascii('k', 'n'), results[3]);
```

`lascii("t","z")`应该返回`[ "t", "u", "v", "w", "x", "y", "z" ]` 。

```js
assert.deepEqual(lascii('t', 'z'), results[4]);
```

# --seed--

## --after-user-code--

```js
let results=[
  [ 'a', 'b', 'c', 'd' ],
  [ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ],
  [ 'm', 'n', 'o', 'p', 'q' ],
  [ 'k', 'l', 'm', 'n' ],
  [ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
]
```

## --seed-contents--

```js
function lascii(cFrom, cTo) {

}
```

# --solutions--

```js
function lascii(cFrom, cTo) {

  function cRange(cFrom, cTo) {
    var iStart = cFrom.charCodeAt(0);

    return Array.apply(
      null, Array(cTo.charCodeAt(0) - iStart + 1)
    ).map(function (_, i) {

      return String.fromCharCode(iStart + i);

    });
  }

  return cRange(cFrom, cTo);

}
```

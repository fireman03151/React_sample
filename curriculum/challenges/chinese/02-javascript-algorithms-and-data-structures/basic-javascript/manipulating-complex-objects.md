---
id: 56533eb9ac21ba0edf2244cb
title: 操作复杂对象
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

有时你可能希望将数据存储在一个灵活的数据结构（<dfn>Data Structure</dfn>）中。 JavaScript 对象是一种灵活的数据结构。 它可以储存字符串（<dfn>strings</dfn>）、数字（<dfn>numbers</dfn>）、布尔值（<dfn>booleans</dfn>）、数组（<dfn>arrays</dfn>）、函数（<dfn>functions</dfn>）和对象（<dfn>objects</dfn>）以及这些值的任意组合。

这是一个复杂数据结构的示例：

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

这是一个包含一个对象的数组。 该对象有关于专辑的各种元数据（<dfn>metadata</dfn>）。 它也有一个嵌套的 `formats` 数组。 可以将专辑添加到顶级数组来增加更多的专辑记录。 对象将数据以一种键 - 值对的形式保存。 在上面的示例中，`"artist": "Daft Punk"` 有一个键位 `artist` 值为 `Daft Punk` 的属性。 [JavaScript Object Notation](http://www.json.org/) 简称 `JSON` 是可以用于存储数据的数据交换格式。

```json
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

**提示：**数组中有多个 JSON 对象的时候，对象与对象之间要用逗号隔开。

# --instructions--

添加一个新专辑到 `myMusic` 数组。 添加 `artist` 和 `title` 字符串，`release_year` 数字和 `formats` 字符串数组。

# --hints--

`myMusic` 应该是一个数组

```js
assert(Array.isArray(myMusic));
```

`myMusic` 应该至少包含两个元素

```js
assert(myMusic.length > 1);
```

`myMusic[1]` 应该是一个对象

```js
assert(typeof myMusic[1] === 'object');
```

`myMusic[1]` 至少要包含四个属性

```js
assert(Object.keys(myMusic[1]).length > 3);
```

`myMusic[1]` 应该包含一个类型为字符串的 `artist` 的属性

```js
assert(
  myMusic[1].hasOwnProperty('artist') && typeof myMusic[1].artist === 'string'
);
```

`myMusic[1]` 应该包含一个类型为字符串的 `title` 属性

```js
assert(
  myMusic[1].hasOwnProperty('title') && typeof myMusic[1].title === 'string'
);
```

`myMusic[1]` 应该包含一个类型为数字的 `release_year` 属性

```js
assert(
  myMusic[1].hasOwnProperty('release_year') &&
    typeof myMusic[1].release_year === 'number'
);
```

`myMusic[1]` 应该包含一个类型为数组的 `formats` 属性

```js
assert(
  myMusic[1].hasOwnProperty('formats') && Array.isArray(myMusic[1].formats)
);
```

`formats`应该是一个至少包含两个字符串元素的数组

```js
assert(
  myMusic[1].formats.every(function (item) {
    return typeof item === 'string';
  }) && myMusic[1].formats.length > 1
);
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add a record here
];
```

# --solutions--

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```

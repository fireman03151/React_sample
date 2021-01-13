---
id: 56533eb9ac21ba0edf2244b5
title: 转义字符串中的引号
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

定义一个字符串必须要用单引号或双引号来包裹它。那么当你的字符串里面包含：`"`或者`'`时该怎么办呢?

在 JavaScript 中，你可以通过在引号前面使用<dfn>反斜杠</dfn>（`\`）来转义引号。

`var sampleStr = "Alan said, \"Peter is learning JavaScript\".";`

有了转义符号，JavaScript 就知道这个单引号或双引号并不是字符串的结尾，而是字符串内的字符。所以，上面的字符串打印到控制台的结果为：

`Alan said, "Peter is learning JavaScript".`

# --instructions--

使用<dfn>反斜杠</dfn>将一个字符串赋值给变量`myStr`，打印到控制台，输出为：

`I am a "double quoted" string inside "double quotes".`

# --hints--

你的代码中应该包含两个双引号 (`"`) 以及四个转义的双引 (`\"`)。

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

变量 myStr 应该包含字符串`I am a "double quoted" string inside "double quotes".`。

```js
assert(myStr === 'I am a "double quoted" string inside "double quotes".');
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
var myStr = ""; // Change this line
```

# --solutions--

```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```

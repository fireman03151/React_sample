---
id: 594810f028c0303b75339ad4
title: 自动换行
challengeType: 5
videoUrl: ''
dashedName: word-wrap
---

# --description--

<p>即使在今天，使用比例字体和复杂布局，仍然存在需要在指定列处包装文本的情况。基本任务是以简单的方式包装一段文本。示例文字： </p><pre>使用更复杂的算法（如Knuth和Plass TeX算法）包装文本。
如果您的语言提供此功能，您可以获得额外的信用，
但你“必须参考文档”表明该算法
比简单的最小长度算法更好。
</pre><p>任务： </p><pre> <code>Write a function that can wrap this text to any number of characters.</code> </pre><p>例如，包装为80个字符的文本应如下所示： </p><p></p><pre>使用更复杂的算法（如Knuth和Plass TeX）包装文本
算法。如果您的语言提供此功能，您可以轻松获得额外的功劳
必须参考文档，表明该算法更好
而不是简单的最小长度算法。
</pre>

# --hints--

`wrap`是一个功能。

```js
assert.equal(typeof wrap, 'function');
```

`wrap("abc", 10)`必须返回一个字符串。

```js
assert.equal(typeof wrap('abc', 10), 'string');
```

wrap（80）必须返回4行。

```js
assert(wrapped80.split('\n').length === 4);
```

你的`wrap`函数应该返回我们期望的文本

```js
assert.equal(wrapped80.split('\n')[0], firstRow80);
```

wrap（42）必须返回7行。

```js
assert(wrapped42.split('\n').length === 7);
```

你的`wrap`函数应该返回我们期望的文本

```js
assert.equal(wrapped42.split('\n')[0], firstRow42);
```

# --seed--

## --after-user-code--

```js
const text =
`Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX algorithm.
If your language provides this, you get easy extra credit,
but you ''must reference documentation'' indicating that the algorithm
is something better than a simple minimum length algorithm.`;

const wrapped80 = wrap(text, 80);
const wrapped42 = wrap(text, 42);

const firstRow80 =
    'Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX';

const firstRow42 = 'Wrap text using a more sophisticated';
```

## --seed-contents--

```js
function wrap(text, limit) {
  return text;
}
```

# --solutions--

```js
function wrap(text, limit) {
  const noNewlines = text.replace('\n', '');
  if (noNewlines.length > limit) {
    // find the last space within limit
    const edge = noNewlines.slice(0, limit).lastIndexOf(' ');
    if (edge > 0) {
      const line = noNewlines.slice(0, edge);
      const remainder = noNewlines.slice(edge + 1);
      return line + '\n' + wrap(remainder, limit);
    }
  }
  return text;
}
```

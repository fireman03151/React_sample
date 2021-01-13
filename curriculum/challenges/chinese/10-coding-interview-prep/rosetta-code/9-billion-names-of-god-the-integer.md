---
id: 5949b579404977fbaefcd736
title: 90亿上帝的名字整数
challengeType: 5
videoUrl: ''
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

<p>这项任务是<a href='https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary' title='wp：上帝的九十亿名字#Plot_summary'>Arthur C. Clarke</a>的<a href='https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary' title='wp：上帝的九十亿名字#Plot_summary'>短篇小说改编</a> 。 </p><p> （求解者应该意识到完成这项任务的后果。） </p><p>详细说明，指定“名称”的含义： </p><p>整数1有1个名称“1”。 </p><p>整数2有2个名称“1 + 1”和“2”。 </p><p>整数3具有3个名称“1 + 1 + 1”，“2 + 1”和“3”。 </p><p>整数4具有5个名称“1 + 1 + 1 + 1”，“2 + 1 + 1”，“2 + 2”，“3 + 1”，“4”。 </p><p>整数5有7个名称“1 + 1 + 1 + 1 + 1”，“2 + 1 + 1 + 1”，“2 + 2 + 1”，“3 + 1 + 1”，“3 + 2”， “4 + 1”，“5”。 </p><p>这可以通过以下形式显示： </p><pre> 1
        1 1
      1 1 1
    1 2 1 1
  1 2 2 1 1
1 3 3 2 1 1
</pre><p>其中row $ n $对应于整数$ n $，而行$ m $中从左到右的每列$ C $对应于以$ C $开头的名称数。 </p><p> （可选）请注意$ n $ -th行$ P（n）$的总和是<a href='http://mathworld.wolfram.com/PartitionFunctionP.html' title='链接：http：//mathworld.wolfram.com/PartitionFunctionP.html'>整数分区函数</a> 。 </p>任务<p>实现一个返回$ n $ -th行之和的函数。 </p>

# --hints--

`numberOfNames`是一个函数。

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)`应该等于7。

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)`应该等于77。

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)`应该等于385。

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)`应该等于1255。

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)`应该等于53174。

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)`应该等于2552338241。

```js
assert.equal(numberOfNames(123), 2552338241);
```

# --seed--

## --seed-contents--

```js
function numberOfNames(num) {

  return true;
}
```

# --solutions--

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```

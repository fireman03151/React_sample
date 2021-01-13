---
id: a7bf700cd123b9a54eef01d5
title: 请不要重复
challengeType: 5
videoUrl: ''
dashedName: no-repeats-please
---

# --description--

返回没有重复连续字母的提供字符串的总排列数。假设提供的字符串中的所有字符都是唯一的。例如， `aab`应该返回2，因为它总共有6个排列（ `aab` ， `aab` ， `aba` ， `aba` ， `baa` ， `baa` ），但只有2个（ `aba`和`aba` ）没有相同的字母（在这种情况下为`a` ）重复。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。尝试配对程序。编写自己的代码。

# --hints--

`permAlone("aab")`应返回一个数字。

```js
assert.isNumber(permAlone('aab'));
```

`permAlone("aab")`应返回2。

```js
assert.strictEqual(permAlone('aab'), 2);
```

`permAlone("aaa")`应该返回0。

```js
assert.strictEqual(permAlone('aaa'), 0);
```

`permAlone("aabb")`应该返回8。

```js
assert.strictEqual(permAlone('aabb'), 8);
```

`permAlone("abcdefa")`应返回3600。

```js
assert.strictEqual(permAlone('abcdefa'), 3600);
```

`permAlone("abfdefa")`应返回2640。

```js
assert.strictEqual(permAlone('abfdefa'), 2640);
```

`permAlone("zzzzzzzz")`应该返回0。

```js
assert.strictEqual(permAlone('zzzzzzzz'), 0);
```

`permAlone("a")`应返回1。

```js
assert.strictEqual(permAlone('a'), 1);
```

`permAlone("aaab")`应该返回0。

```js
assert.strictEqual(permAlone('aaab'), 0);
```

`permAlone("aaabb")`应该返回12。

```js
assert.strictEqual(permAlone('aaabb'), 12);
```

# --seed--

## --seed-contents--

```js
function permAlone(str) {
  return str;
}

permAlone('aab');
```

# --solutions--

```js
function permAlone(str) {
  return permuter(str).filter(function(perm) {
    return !perm.match(/(.)\1/g);
  }).length;
}

function permuter(str) {
  // http://staff.roguecc.edu/JMiller/JavaScript/permute.html
  //permArr: Global array which holds the list of permutations
  //usedChars: Global utility array which holds a list of "currently-in-use" characters
  var permArr = [], usedChars = [];
  function permute(input) {
    //convert input into a char array (one element for each character)
    var i, ch, chars = input.split("");
    for (i = 0; i < chars.length; i++) {
      //get and remove character at index "i" from char array
      ch = chars.splice(i, 1);
      //add removed character to the end of used characters
      usedChars.push(ch);
      //when there are no more characters left in char array to add, add used chars to list of permutations
      if (chars.length === 0) permArr[permArr.length] = usedChars.join("");
      //send characters (minus the removed one from above) from char array to be permuted
      permute(chars.join(""));
      //add removed character back into char array in original position
      chars.splice(i, 0, ch);
      //remove the last character used off the end of used characters array
      usedChars.pop();
    }
  }
  permute(str);
  return permArr;
}

permAlone('aab');
```

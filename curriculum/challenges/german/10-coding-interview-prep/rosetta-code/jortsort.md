---
id: 5a23c84252665b21eecc7ec4
title: JortSort
challengeType: 1
forumTopicId: 302293
dashedName: jortsort
---

# --description--

jortSort is a sorting toolset that makes the user do the work and guarantees efficiency because you don't have to sort ever again. It was originally presented by Jenn "Moneydollars" Schiffer at the prestigious JSConf2014.

jortSort should be a function that takes a single array of comparable objects as its argument. It then sorts the array in ascending order and compares the sorted array to the originally provided array. If the arrays match (i.e. the original array was already sorted), the function returns true. If the arrays do not match (i.e. the original array was not sorted), the function returns false.

# --hints--

`jortsort` sollte eine Funktion sein.

```js
assert(typeof jortsort == 'function');
```

`jortsort([1,2,3,4,5])` sollte einen Boolean zurückgeben.

```js
assert(typeof jortsort([1, 2, 3, 4, 5]) == 'boolean');
```

`jortsort([1,2,3,4,5])` sollte `true` zurückgeben.

```js
assert.equal(jortsort([1, 2, 3, 4, 5]), true);
```

`jortsort([1,2,13,4,5])` sollte `false` zurückgeben.

```js
assert.equal(jortsort([1, 2, 13, 4, 5]), false);
```

`jortsort([12,4,51,2,4])` sollte `false` zurückgeben.

```js
assert.equal(jortsort([12, 4, 51, 2, 4]), false);
```

`jortsort([1,2])` sollte `true` zurückgeben.

```js
assert.equal(jortsort([1, 2]), true);
```

`jortsort([5,4,3,2,1])` sollte `false` zurückgeben.

```js
assert.equal(jortsort([5, 4, 3, 2, 1]), false);
```

`jortsort([1,1,1,1,1])` sollte `true` zurückgeben.

```js
assert.equal(jortsort([1, 1, 1, 1, 1]), true);
```

# --seed--

## --seed-contents--

```js
function jortsort(array) {

}
```

# --solutions--

```js
function jortsort(array) {
  // sort the array
  var originalArray = array.slice(0);
  array.sort( function(a,b){return a - b} );

  // compare to see if it was originally sorted
  for (var i = 0; i < originalArray.length; ++i) {
    if (originalArray[i] !== array[i]) return false;
  }

  return true;
};
```

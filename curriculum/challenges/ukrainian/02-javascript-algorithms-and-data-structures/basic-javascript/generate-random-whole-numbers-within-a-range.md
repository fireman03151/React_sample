---
id: cf1111c1c12feddfaeb2bdef
title: Генерація випадкових цілих чисел в межах діапазону
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

You'll call your minimum number `min` and your maximum number `max`.

This formula gives a random whole number in the range from `min` to `max`. Зробіть паузу, щоб прочитати і зрозуміти, що робить цей код:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Create a function called `randomRange` that takes a range `myMin` and `myMax` and returns a random whole number that's greater than or equal to `myMin` and less than or equal to `myMax`.

# --hints--

Найменше випадкове число, яке може згенерувати `randomRange`, повинне дорівнювати вашому мінімальному числу (`myMin`).

```js
assert(calcMin === 5);
```

Найбільше випадкове число, яке може згенерувати `randomRange`, повинне дорівнювати вашому максимальному числу (`myMax`).

```js
assert(calcMax === 15);
```

Випадкове число, згенероване за допомогою `randomRange`, повинне бути цілим, а не десятковим.

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` має використовувати `myMax` та `myMin`, і повертати випадкове число у межах вашого діапазону.

```js
assert(
  (function () {
    if (
      code.match(/myMax/g).length > 1 &&
      code.match(/myMin/g).length > 2 &&
      code.match(/Math.floor/g) &&
      code.match(/Math.random/g)
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
var calcMin = 100;
var calcMax = -100;
for(var i = 0; i < 100; i++) {
  var result = randomRange(5,15);
  calcMin = Math.min(calcMin, result);
  calcMax = Math.max(calcMax, result);
}
(function(){
  if(typeof myRandom === 'number') {
    return "myRandom = " + myRandom;
  } else {
    return "myRandom undefined";
  }
})()
```

## --seed-contents--

```js
function randomRange(myMin, myMax) {
  return 0;
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```

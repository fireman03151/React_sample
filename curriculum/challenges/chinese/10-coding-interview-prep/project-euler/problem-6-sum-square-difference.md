---
id: 5900f3721000cf542c50fe85
title: 问题6：求和方差
challengeType: 5
videoUrl: ''
dashedName: problem-6-sum-square-difference
---

# --description--

前十个自然数的平方和是，

1 

<sup>2</sup>

-   2 

<sup>2</sup>

-   ... + 10 

<sup>2</sup>

 = 385

前十个自然数之和的平方是，

（1 + 2 + ... + 10） 

<sup>2</sup>

 = 55 

<sup>2</sup>

 = 3025

因此，前十个自然数的平方和与和的平方之间的差值为3025 - 385 = 2640.求出前`n`自然数的平方和与总和的平方之间的差值。

# --hints--

`sumSquareDifference(10)`应该返回2640。

```js
assert.strictEqual(sumSquareDifference(10), 2640);
```

`sumSquareDifference(20)`应该返回41230。

```js
assert.strictEqual(sumSquareDifference(20), 41230);
```

`sumSquareDifference(100)`应该返回25164150。

```js
assert.strictEqual(sumSquareDifference(100), 25164150);
```

# --seed--

## --seed-contents--

```js
function sumSquareDifference(n) {

  return true;
}

sumSquareDifference(100);
```

# --solutions--

```js
const sumSquareDifference = (number)=>{
  let squareOfSum = Math.pow(sumOfArithmeticSeries(1,1,number),2);
  let sumOfSquare = sumOfSquareOfNumbers(number);
 return squareOfSum - sumOfSquare;
}

function sumOfArithmeticSeries(a,d,n){
  return (n/2)*(2*a+(n-1)*d);
}

function sumOfSquareOfNumbers(n){
 return (n*(n+1)*(2*n+1))/6;
}
```

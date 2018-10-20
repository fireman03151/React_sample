---
id: 5900f37d1000cf542c50fe8f
challengeType: 5
title: 'Problem 16: Power digit sum'
---

## Description
<section id='description'>
2<sup>15</sup> = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2<sup><code>exponent</code></sup>?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>powerDigitSum(15)</code> should return 26.
    testString: assert.strictEqual(powerDigitSum(15), 26, '<code>powerDigitSum(15)</code> should return 26.');
  - text: <code>powerDigitSum(128)</code> should return 166.
    testString: assert.strictEqual(powerDigitSum(128), 166, '<code>powerDigitSum(128)</code> should return 166.');
  - text: <code>powerDigitSum(1000)</code> should return 1366.
    testString: assert.strictEqual(powerDigitSum(1000), 1366, '<code>powerDigitSum(1000)</code> should return 1366.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function powerDigitSum(exponent) {
  // Good luck!
  return true;
}

powerDigitSum(15);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function powerDigitSum(exponent) {
  const bigNum = [1];
  let sum = 0;

  for (let i = 1; i <= exponent; i++) {
    let count = bigNum.length + 1;
    let overflow = 0;
    for (let j = 0; j < count; j++) {
      let digit = bigNum[j] || 0;
      digit = 2 * digit + overflow;

      if (digit > 9) {
        digit -= 10;
        overflow = 1;
      } else {
        overflow = 0;
      }

      bigNum[j] = digit;
    }
  }

  bigNum.forEach(function(num) {
    return sum += num;
  });

  return sum;
}
```

</section>

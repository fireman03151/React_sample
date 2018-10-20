---
id: 56533eb9ac21ba0edf2244d5
title: Comparison with the Greater Than Or Equal To Operator
challengeType: 1
---

## Description
<section id='description'>
The <code>greater than or equal to</code> operator (<code>&gt;=</code>) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns <code>true</code>. Otherwise, it returns <code>false</code>.
Like the equality operator, <code>greater than or equal to</code> operator will convert data types while comparing.
<strong>Examples</strong>
<blockquote> 6  >=  6  // true<br> 7  >= '3' // true<br> 2  >=  3  // false<br>'7' >=  9  // false</blockquote>
</section>

## Instructions
<section id='instructions'>
Add the <code>greater than or equal to</code> operator to the indicated lines so that the return statements make sense.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterOrEqual(0)</code> should return "Less than 10"
    testString: assert(testGreaterOrEqual(0) === "Less than 10", '<code>testGreaterOrEqual(0)</code> should return "Less than 10"');
  - text: <code>testGreaterOrEqual(9)</code> should return "Less than 10"
    testString: assert(testGreaterOrEqual(9) === "Less than 10", '<code>testGreaterOrEqual(9)</code> should return "Less than 10"');
  - text: <code>testGreaterOrEqual(10)</code> should return "10 or Over"
    testString: assert(testGreaterOrEqual(10) === "10 or Over", '<code>testGreaterOrEqual(10)</code> should return "10 or Over"');
  - text: <code>testGreaterOrEqual(11)</code> should return "10 or Over"
    testString: assert(testGreaterOrEqual(11) === "10 or Over", '<code>testGreaterOrEqual(11)</code> should return "10 or Over"');
  - text: <code>testGreaterOrEqual(19)</code> should return "10 or Over"
    testString: assert(testGreaterOrEqual(19) === "10 or Over", '<code>testGreaterOrEqual(19)</code> should return "10 or Over"');
  - text: <code>testGreaterOrEqual(100)</code> should return "20 or Over"
    testString: assert(testGreaterOrEqual(100) === "20 or Over", '<code>testGreaterOrEqual(100)</code> should return "20 or Over"');
  - text: <code>testGreaterOrEqual(21)</code> should return "20 or Over"
    testString: assert(testGreaterOrEqual(21) === "20 or Over", '<code>testGreaterOrEqual(21)</code> should return "20 or Over"');
  - text: You should use the <code>&gt;=</code> operator at least twice
    testString: assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1, 'You should use the <code>&gt;=</code> operator at least twice');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```

</section>

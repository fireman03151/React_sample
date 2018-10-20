---
id: 56533eb9ac21ba0edf2244d7
title: Comparison with the Less Than Or Equal To Operator
challengeType: 1
---

## Description
<section id='description'>
The <code>less than or equal to</code> operator (<code>&lt;=</code>) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns <code>true</code>. If the number on the left is greater than the number on the right, it returns <code>false</code>. Like the equality operator, <code>less than or equal to</code> converts data types.
<strong>Examples</strong>
<blockquote>4 &lt;= 5  // true<br>'7' &lt;= 7  // true<br>5 &lt;= 5  // true<br>3 &lt;= 2  // false<br>'8' &lt;= 4  // false</blockquote>
</section>

## Instructions
<section id='instructions'>
Add the <code>less than or equal to</code> operator to the indicated lines so that the return statements make sense.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testLessOrEqual(0)</code> should return "Smaller Than or Equal to 12"
    testString: assert(testLessOrEqual(0) === "Smaller Than or Equal to 12", '<code>testLessOrEqual(0)</code> should return "Smaller Than or Equal to 12"');
  - text: <code>testLessOrEqual(11)</code> should return "Smaller Than or Equal to 12"
    testString: assert(testLessOrEqual(11) === "Smaller Than or Equal to 12", '<code>testLessOrEqual(11)</code> should return "Smaller Than or Equal to 12"');
  - text: <code>testLessOrEqual(12)</code> should return "Smaller Than or Equal to 12"
    testString: assert(testLessOrEqual(12) === "Smaller Than or Equal to 12", '<code>testLessOrEqual(12)</code> should return "Smaller Than or Equal to 12"');
  - text: <code>testLessOrEqual(23)</code> should return "Smaller Than or Equal to 24"
    testString: assert(testLessOrEqual(23) === "Smaller Than or Equal to 24", '<code>testLessOrEqual(23)</code> should return "Smaller Than or Equal to 24"');
  - text: <code>testLessOrEqual(24)</code> should return "Smaller Than or Equal to 24"
    testString: assert(testLessOrEqual(24) === "Smaller Than or Equal to 24", '<code>testLessOrEqual(24)</code> should return "Smaller Than or Equal to 24"');
  - text: <code>testLessOrEqual(25)</code> should return "More Than 24"
    testString: assert(testLessOrEqual(25) === "More Than 24", '<code>testLessOrEqual(25)</code> should return "More Than 24"');
  - text: <code>testLessOrEqual(55)</code> should return "More Than 24"
    testString: assert(testLessOrEqual(55) === "More Than 24", '<code>testLessOrEqual(55)</code> should return "More Than 24"');
  - text: You should use the <code>&lt;=</code> operator at least twice
    testString: assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1, 'You should use the <code>&lt;=</code> operator at least twice');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```

</section>

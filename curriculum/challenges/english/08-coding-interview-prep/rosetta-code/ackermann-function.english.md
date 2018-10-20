---
title: Ackermann function
id: 594810f028c0303b75339acf
challengeType: 5
---

## Description
<section id='description'>
<p>The Ackermann function is a classic example of a recursive function, notable especially because it is not a primitive recursive function. It grows very quickly in value, as does the size of its call tree.</p>
<p>The Ackermann function is usually defined as follows:</p>
$$A(m, n) =
 \begin{cases}
 n+1 & \mbox{if } m = 0 \\
 A(m-1, 1) & \mbox{if } m > 0 \mbox{ and } n = 0 \\
 A(m-1, A(m, n-1)) & \mbox{if } m > 0 \mbox{ and } n > 0.
 \end{cases}$$
<p>Its arguments are never negative and it always terminates. Write a function which returns the value of $A(m, n)$. Arbitrary precision is preferred (since the function grows so quickly), but not required.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ack</code> is a function.
    testString: assert(typeof ack === 'function', '<code>ack</code> is a function.');
  - text: <code>ack(0, 0)</code> should return 1.
    testString: assert(ack(0, 0) === 1, '<code>ack(0, 0)</code> should return 1.');
  - text: <code>ack(1, 1)</code> should return 3.
    testString: assert(ack(1, 1) === 3, '<code>ack(1, 1)</code> should return 3.');
  - text: <code>ack(2, 5)</code> should return 13.
    testString: assert(ack(2, 5) === 13, '<code>ack(2, 5)</code> should return 13.');
  - text: <code>ack(3, 3)</code> should return 61.
    testString: assert(ack(3, 3) === 61, '<code>ack(3, 3)</code> should return 61.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function ack (m, n) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function ack (m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}

```

</section>

---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 6
---

## Description
<section id='description'>
By default, scales use the identity relationship - the input value maps to the output value. But scales can be much more flexible and interesting.
Say a data set has values ranging from 50 to 480. This is the input information for a scale, and is also known as the domain.
You want to map those points along the <code>x</code> axis on the SVG canvas, between 10 units and 500 units. This is the output information, which is also known as the range.
The <code>domain()</code> and <code>range()</code> methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:

```js
// Set a domain
// The domain covers the set of input values
scale.domain([50, 480]);
// Set a range
// The range covers the set of output values
scale.range([10, 500]);
scale(50) // Returns 10
scale(480) // Returns 500
scale(325) // Returns 323.37
scale(750) // Returns 807.67
d3.scaleLinear()
```

Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.
</section>

## Instructions
<section id='instructions'>
Create a scale and set its domain to <code>[250, 500]</code> and range to <code>[10, 150]</code>.
<strong>Note</strong><br>You can chain the <code>domain()</code> and <code>range()</code> methods onto the <code>scale</code> variable.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>domain()</code> method.
    testString: assert(code.match(/\.domain/g), 'Your code should use the <code>domain()</code> method.');
  - text: The <code>domain()</code> of the scale should be set to <code>[250, 500]</code>.
    testString: assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]), 'The <code>domain()</code> of the scale should be set to <code>[250, 500]</code>.');
  - text: Your code should use the <code>range()</code> method.
    testString: assert(code.match(/\.range/g), 'Your code should use the <code>range()</code> method.');
  - text: The <code>range()</code> of the scale should be set to <code>[10, 150]</code>.
    testString: assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]), 'The <code>range()</code> of the scale should be set to <code>[10, 150]</code>.');
  - text: The text in the <code>h2</code> should be -102.
    testString: assert($('h2').text() == '-102', 'The text in the <code>h2</code> should be -102.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

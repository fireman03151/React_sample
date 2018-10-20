---
id: 587d7faa367417b2b2512bd4
title: Add a Hover Effect to a D3 Element
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js'
challengeType: 6
---

## Description
<section id='description'>
It's possible to add effects that highlight a bar when the user hovers over it with the mouse. So far, the styling for the rectangles is applied with the built-in D3 and SVG methods, but you can use CSS as well.
You set the CSS class on the SVG elements with the <code>attr()</code> method. Then the <code>:hover</code> pseudo-class for your new class holds the style rules for any hover effects.
</section>

## Instructions
<section id='instructions'>
Use the <code>attr()</code> method to add a class of <code>bar</code> to all the <code>rect</code> elements. This changes the <code>fill</code> color of the bar to brown when you mouse over it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>rect</code> elements should have a class of <code>bar</code>.
    testString: assert($('rect').attr('class') == "bar", 'Your <code>rect</code> elements should have a class of <code>bar</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

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

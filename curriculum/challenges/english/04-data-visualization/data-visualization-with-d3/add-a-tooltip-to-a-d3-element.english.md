---
id: 587d7faa367417b2b2512bd6
title: Add a Tooltip to a D3 Element
challengeType: 6
---

## Description
<section id='description'>
A tooltip shows more information about an item on a page when the user hovers over that item. There are several ways to add a tooltip to a visualization, this challenge uses the SVG <code>title</code> element.
<code>title</code> pairs with the <code>text()</code> method to dynamically add data to the bars.
</section>

## Instructions
<section id='instructions'>
Append a <code>title</code> element under each <code>rect</code> node. Then call the <code>text()</code> method with a callback function so the text displays the data value.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have 9 <code>title</code> elements.
    testString: assert($('title').length == 9, 'Your code should have 9 <code>title</code> elements.');
  - text: The first <code>title</code> element should have tooltip text of 12.
    testString: assert($('title').eq(0).text() == '12', 'The first <code>title</code> element should have tooltip text of 12.');
  - text: The second <code>title</code> element should have tooltip text of 31.
    testString: assert($('title').eq(1).text() == '31', 'The second <code>title</code> element should have tooltip text of 31.');
  - text: The third <code>title</code> element should have tooltip text of 22.
    testString: assert($('title').eq(2).text() == '22', 'The third <code>title</code> element should have tooltip text of 22.');
  - text: The fourth <code>title</code> element should have tooltip text of 17.
    testString: assert($('title').eq(3).text() == '17', 'The fourth <code>title</code> element should have tooltip text of 17.');
  - text: The fifth <code>title</code> element should have tooltip text of 25.
    testString: assert($('title').eq(4).text() == '25', 'The fifth <code>title</code> element should have tooltip text of 25.');
  - text: The sixth <code>title</code> element should have tooltip text of 18.
    testString: assert($('title').eq(5).text() == '18', 'The sixth <code>title</code> element should have tooltip text of 18.');
  - text: The seventh <code>title</code> element should have tooltip text of 29.
    testString: assert($('title').eq(6).text() == '29', 'The seventh <code>title</code> element should have tooltip text of 29.');
  - text: The eighth <code>title</code> element should have tooltip text of 14.
    testString: assert($('title').eq(7).text() == '14', 'The eighth <code>title</code> element should have tooltip text of 14.');
  - text: The ninth <code>title</code> element should have tooltip text of 9.
    testString: assert($('title').eq(8).text() == '9', 'The ninth <code>title</code> element should have tooltip text of 9.');

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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

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

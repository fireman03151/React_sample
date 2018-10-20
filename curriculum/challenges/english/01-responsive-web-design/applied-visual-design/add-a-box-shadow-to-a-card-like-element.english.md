---
id: 587d781b367417b2b2512abe
title: Add a box-shadow to a Card-like Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZdUd'
---

## Description
<section id='description'>
The <code>box-shadow</code> property applies one or more shadows to an element.
The <code>box-shadow</code> property takes values for <code>offset-x</code> (how far to push the shadow horizontally from the element), <code>offset-y</code> (how far to push the shadow vertically from the element), <code>blur-radius</code>, <code>spread-radius</code> and a color value, in that order. The <code>blur-radius</code> and <code>spread-radius</code> values are optional.
Here's an example of the CSS to create multiple shadows with some blur, at mostly-transparent black colors:
<blockquote>box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);</blockquote>
</section>

## Instructions
<section id='instructions'>
The element now has an id of <code>thumbnail</code>. With this selector, use the example CSS values above to place a <code>box-shadow</code> on the card.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add a <code>box-shadow</code> property for the <code>thumbnail</code> id.
    testString: assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g), 'Your code should add a <code>box-shadow</code> property for the <code>thumbnail</code> id.');
  - text: You should use the given CSS for the <code>box-shadow</code> value.
    testString: assert(code.match(/box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\),\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi), 'You should use the given CSS for the <code>box-shadow</code> value.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }



  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "#thumbnail {box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);}"
```

</section>

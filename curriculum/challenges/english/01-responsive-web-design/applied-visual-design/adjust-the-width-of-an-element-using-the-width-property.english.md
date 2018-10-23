---
id: 587d7791367417b2b2512ab4
title: Adjust the Width of an Element Using the width Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVLPtN'
---

## Description
<section id='description'>
You can specify the width of an element using the <code>width</code> property in CSS. Values can be given in relative length units (such as em), absolute length units (such as px), or as a percentage of its containing parent element. Here's an example that changes the width of an image to 220px:
<blockquote>img {<br>&nbsp;&nbsp;width: 220px;<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Add a <code>width</code> property to the entire card and set it to an absolute value of 245px. Use the <code>fullCard</code> class to select the element.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should change the <code>width</code> property of the card to 245 pixels by using the <code>fullCard</code> class selector.
    testString: assert(code.match(/.fullCard\s*{[\s\S][^}]*\n*^\s*width\s*:\s*245px\s*;/gm), 'Your code should change the <code>width</code> property of the card to 245 pixels by using the <code>fullCard</code> class selector.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {

    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
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
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</section>

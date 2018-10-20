---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
---

## Description
<section id='description'>
After creating an areas template for your grid container, as shown in the previous challenge, you can place an item in your custom area by referencing the name you gave it. To do this, you use the <code>grid-area</code> property on an item like this:
<blockquote>.item1 { grid-area: header; }</blockquote>
This lets the grid know that you want the <code>item1</code> class to go in the area named <code>header</code>. In this case, the item will use the entire top row because that whole row is named as the header area.
</section>

## Instructions
<section id='instructions'>
Place an element with the <code>item5</code> class in the <code>footer</code> area using the <code>grid-area</code> property.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>footer</code>.
    testString: assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi), '<code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>footer</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = ".item5 {grid-area: footer;}"
```

</section>

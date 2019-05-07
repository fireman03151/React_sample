---
id: 5a90373638fddaf9a66b5d39
title: Use grid-row to Control Spacing
challengeType: 0
videoUrl: ''
localeTitle: 使用网格行控制间距
---

## Description
<section id="description">当然，像网格列一样，您也可以使一个项目同时占据多个网格行。您可以使用<code>grid-row</code>属性来定义项目开始和结束的网格行。 </section>

## Instructions
<section id="instructions">让带有<code>item5</code>class选择器的元素占有最后两排网格行。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code>class应该有一个具有<code>2 / 4</code>值属性的<code>grid-row</code>.
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-row\s*?:\s*?2\s*?\/\s*?4\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-row</code> property that has the value of <code>2 / 4</code>.");'

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
    grid-column: 2 / 4;
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
// solution required
```
</section>

---
id: bad87fee1348bd9aec908856
title: Label Bootstrap Buttons
challengeType: 0
---

## Description
<section id='description'>
Just like we labeled our wells, we want to label our buttons.
Give each of your <code>button</code> elements text that corresponds to its <code>id</code>'s selector.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Give your <code>button</code> element with the id <code>target1</code> the text <code>#target1</code>.
    testString: assert(new RegExp("#target1","gi").test($("#target1").text()), 'Give your <code>button</code> element with the id <code>target1</code> the text <code>#target1</code>.');
  - text: Give your <code>button</code> element with the id <code>target2</code> the text <code>#target2</code>.
    testString: assert(new RegExp("#target2","gi").test($("#target2").text()), 'Give your <code>button</code> element with the id <code>target2</code> the text <code>#target2</code>.');
  - text: Give your <code>button</code> element with the id <code>target3</code> the text <code>#target3</code>.
    testString: assert(new RegExp("#target3","gi").test($("#target3").text()), 'Give your <code>button</code> element with the id <code>target3</code> the text <code>#target3</code>.');
  - text: Give your <code>button</code> element with the id <code>target4</code> the text <code>#target4</code>.
    testString: assert(new RegExp("#target4","gi").test($("#target4").text()), 'Give your <code>button</code> element with the id <code>target4</code> the text <code>#target4</code>.');
  - text: Give your <code>button</code> element with the id <code>target5</code> the text <code>#target5</code>.
    testString: assert(new RegExp("#target5","gi").test($("#target5").text()), 'Give your <code>button</code> element with the id <code>target5</code> the text <code>#target5</code>.');
  - text: Give your <code>button</code> element with the id <code>target6</code> the text <code>#target6</code>.
    testString: assert(new RegExp("#target6","gi").test($("#target6").text()), 'Give your <code>button</code> element with the id <code>target6</code> the text <code>#target6</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
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

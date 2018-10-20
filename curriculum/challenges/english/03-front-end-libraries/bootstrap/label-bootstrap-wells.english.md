---
id: bad87fee1348bd9aec908854
title: Label Bootstrap Wells
challengeType: 0
---

## Description
<section id='description'>
For the sake of clarity, let's label both of our wells with their ids.
Above your left-well, inside its <code>col-xs-6</code> <code>div</code> element, add a <code>h4</code> element with the text <code>#left-well</code>.
Above your right-well, inside its <code>col-xs-6</code> <code>div</code> element, add a <code>h4</code> element with the text <code>#right-well</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Add an <code>h4</code> element to each of your <code>&#60;div class="col-xs-6"&#62;</code> elements.
    testString: assert($(".col-xs-6").children("h4") && $(".col-xs-6").children("h4").length > 1, 'Add an <code>h4</code> element to each of your <code>&#60;div class="col-xs-6"&#62;</code> elements.');
  - text: One <code>h4</code> element should have the text <code>#left-well</code>.
    testString: assert(new RegExp("#left-well","gi").test($("h4").text()), 'One <code>h4</code> element should have the text <code>#left-well</code>.');
  - text: One <code>h4</code> element should have the text <code>#right-well</code>.
    testString: assert(new RegExp("#right-well","gi").test($("h4").text()), 'One <code>h4</code> element should have the text <code>#right-well</code>.');
  - text: Make sure all your <code>h4</code> elements have closing tags.
    testString: assert(code.match(/<\/h4>/g) && code.match(/<h4/g) && code.match(/<\/h4>/g).length === code.match(/<h4/g).length, 'Make sure all your <code>h4</code> elements have closing tags.');

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

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
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

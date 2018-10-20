---
id: bad87fee1348bd9aec908848
title: Create Bootstrap Wells
challengeType: 0
---

## Description
<section id='description'>
Bootstrap has a class called <code>well</code> that can create a visual sense of depth for your columns.
Nest one <code>div</code> element with the class <code>well</code> within each of your <code>col-xs-6</code> <code>div</code> elements.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Add a <code>div</code> element with the class <code>well</code> inside each of your <code>div</code> elements with the class <code>"col-xs-6"</code>
    testString: assert($("div.col-xs-6").not(":has(>div.well)").length < 1, 'Add a <code>div</code> element with the class <code>well</code> inside each of your <code>div</code> elements with the class <code>"col-xs-6"</code>');
  - text: Nest both of your <code>div</code> elements with the class <code>"col-xs-6"</code> within your <code>div</code> element with the class <code>"row"</code>.
    testString: assert($("div.row > div.col-xs-6").length > 1, 'Nest both of your <code>div</code> elements with the class <code>"col-xs-6"</code> within your <code>div</code> element with the class <code>"row"</code>.');
  - text: Make sure all your <code>div</code> elements have closing tags.
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'Make sure all your <code>div</code> elements have closing tags.');

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

    </div>
    <div class="col-xs-6">

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

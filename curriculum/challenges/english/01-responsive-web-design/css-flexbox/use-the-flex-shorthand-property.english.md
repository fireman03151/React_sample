---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
---

## Description
<section id='description'>
There is a shortcut available to set several flex properties at once. The <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code> properties can all be set together by using the <code>flex</code> property.
For example, <code>flex: 1 0 10px;</code> will set the item to <code>flex-grow: 1;</code>, <code>flex-shrink: 0;</code>, and <code>flex-basis: 10px;</code>.
The default property settings are <code>flex: 0 1 auto;</code>.
</section>

## Instructions
<section id='instructions'>
Add the CSS property <code>flex</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> the values so its <code>flex-grow</code> is 2, its <code>flex-shrink</code> is 2, and its <code>flex-basis</code> is 150px. Give <code>#box-2</code> the values so its <code>flex-grow</code> is 1, its <code>flex-shrink</code> is 1, and its <code>flex-basis</code> is 150px.
These values will cause <code>#box-1</code> to grow to fill the extra space at twice the rate of <code>#box-2</code> when the container is greater than 300px and shrink at twice the rate of <code>#box-2</code> when the container is less than 300px. 300px is the combined size of the <code>flex-basis</code> values of the two boxes.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-1</code> element should have the <code>flex</code> property set to a value of 2 2 150px.
    testString: assert($('#box-1').css('flex-grow') == '2' && $('#box-1').css('flex-shrink') == '2' && $('#box-1').css('flex-basis') == '150px', 'The <code>#box-1</code> element should have the <code>flex</code> property set to a value of 2 2 150px.');
  - text: The <code>#box-2</code> element should have the <code>flex</code> property set to a value of 1 1 150px.
    testString: assert($('#box-2').css('flex-grow') == '1' && $('#box-2').css('flex-shrink') == '1' && $('#box-2').css('flex-basis') == '150px', 'The <code>#box-2</code> element should have the <code>flex</code> property set to a value of 1 1 150px.');
  - text: Your code should use the <code>flex</code> property for <code>#box-1</code> and <code>#box-2</code>.
    testString: assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2, 'Your code should use the <code>flex</code> property for <code>#box-1</code> and <code>#box-2</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
</section>

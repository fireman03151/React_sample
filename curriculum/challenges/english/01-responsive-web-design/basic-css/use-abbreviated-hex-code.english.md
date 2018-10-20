---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
---

## Description
<section id='description'>
Many people feel overwhelmed by the possibilities of more than 16 million colors. And it's difficult to remember hex code. Fortunately, you can shorten it.
For example, red's hex code <code>#FF0000</code> can be shortened to <code>#F00</code>. This shortened form gives one digit for red, one digit for green, and one digit for blue.
This reduces the total number of possible colors to around 4,000. But browsers will interpret <code>#FF0000</code> and <code>#F00</code> as exactly the same color.
</section>

## Instructions
<section id='instructions'>
Go ahead, try using the abbreviated hex codes to color the correct elements.
<table class='table table-striped'><tr><th>Color</th><th>Short Hex Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Green</td><td><code>#0F0</code></td></tr><tr><td>Red</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></table>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.
    testString: assert($('.red-text').css('color') === 'rgb(255, 0, 0)', 'Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.');
  - text: Use the abbreviate <code>hex code</code> for the color red instead of the hex code <code>#FF0000</code>.
    testString: assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi), 'Use the abbreviate <code>hex code</code> for the color red instead of the hex code <code>#FF0000</code>.');
  - text: Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.
    testString: assert($('.green-text').css('color') === 'rgb(0, 255, 0)', 'Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.');
  - text: Use the abbreviated <code>hex code</code> for the color green instead of the hex code <code>#00FF00</code>.
    testString: assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi), 'Use the abbreviated <code>hex code</code> for the color green instead of the hex code <code>#00FF00</code>.');
  - text: Give your <code>h1</code> element with the text <code>I am cyan!</code> the <code>color</code> cyan.
    testString: assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)', 'Give your <code>h1</code> element with the text <code>I am cyan!</code> the <code>color</code> cyan.');
  - text: Use the abbreviated <code>hex code</code> for the color cyan instead of the hex code <code>#00FFFF</code>.
    testString: assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi), 'Use the abbreviated <code>hex code</code> for the color cyan instead of the hex code <code>#00FFFF</code>.');
  - text: Give your <code>h1</code> element with the text <code>I am fuchsia!</code> the <code>color</code> fuchsia.
    testString: assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)', 'Give your <code>h1</code> element with the text <code>I am fuchsia!</code> the <code>color</code> fuchsia.');
  - text: Use the abbreviated <code>hex code</code> for the color fuchsia instead of the hex code <code>#FF00FF</code>.
    testString: assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi), 'Use the abbreviated <code>hex code</code> for the color fuchsia instead of the hex code <code>#FF00FF</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

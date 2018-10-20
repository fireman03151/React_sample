---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
---

## Description
<section id='description'>
Another way you can represent colors in CSS is by using <code>RGB</code> values.
The RGB value for black looks like this:
<code>rgb(0, 0, 0)</code>
The RGB value for white looks like this:
<code>rgb(255, 255, 255)</code>
Instead of using six hexadecimal digits like you do with hex code, with <code>RGB</code> you specify the brightness of each color with a number between 0 and 255.
If you do the math, the two digits for one color equal 16 times 16, which gives us 256 total values. So <code>RGB</code>, which starts counting from zero, has the exact same number of possible values as hex code.
Here's an example of how you'd change the body background to orange using its RGB code.
<blockquote>body {<br>&nbsp;&nbsp;background-color: rgb(255, 165, 0);<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Let's replace the hex code in our <code>body</code> element's background color with the RGB value for black: <code>rgb(0, 0, 0)</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>body</code> element should have a black background.
    testString: assert($("body").css("background-color") === "rgb(0, 0, 0)", 'Your <code>body</code> element should have a black background.');
  - text: Use <code>rgb</code> to give your <code>body</code> element a color of black.
    testString: assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/ig), 'Use <code>rgb</code> to give your <code>body</code> element a color of black.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

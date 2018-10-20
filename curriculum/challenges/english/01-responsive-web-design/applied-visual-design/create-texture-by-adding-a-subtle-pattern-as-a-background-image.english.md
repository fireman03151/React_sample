---
id: 587d78a5367417b2b2512ad8
title: Create Texture by Adding a Subtle Pattern as a Background Image
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
---

## Description
<section id='description'>
One way to add texture and interest to a background and have it stand out more is to add a subtle pattern. The key is balance, as you don't want the background to stand out too much, and take away from the foreground. The <code>background</code> property supports the <code>url()</code> function in order to link to an image of the chosen texture or pattern. The link address is wrapped in quotes inside the parentheses.
</section>

## Instructions
<section id='instructions'>
Using the url of <code>https://i.imgur.com/MJAkxbh.png</code>, set the <code>background</code> of the whole page with the <code>body</code> selector.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>body</code> element should have a <code>background</code> property set to a <code>url()</code> with the given link.
    testString: assert(code.match(/background:\s*?url\(\s*("|'|)https:\/\/i\.imgur\.com\/MJAkxbh\.png\1\s*\)/gi), 'Your <code>body</code> element should have a <code>background</code> property set to a <code>url()</code> with the given link.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {

  }
</style>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "body {background: url('https://i.imgur.com/MJAkxbh.png')}"
```

</section>

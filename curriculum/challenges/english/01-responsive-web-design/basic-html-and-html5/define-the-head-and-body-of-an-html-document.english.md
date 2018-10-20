---
id: 587d78aa367417b2b2512aec
title: Define the Head and Body of an HTML Document
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra9bfP'
---

## Description
<section id='description'>
You can add another level of organization in your HTML document within the <code>html</code> tags with the <code>head</code> and <code>body</code> elements. Any markup with information about your page would go into the <code>head</code> tag. Then any markup with the content of the page (what displays for a user) would go into the <code>body</code> tag.
Metadata elements, such as <code>link</code>, <code>meta</code>, <code>title</code>, and <code>style</code>, typically go inside the <code>head</code> element.
Here's an example of a page's layout:
<blockquote>&lt;!DOCTYPE html&gt;<br>&lt;html&gt;<br>&nbsp;&nbsp;&lt;head&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- metadata elements --&gt;<br>&nbsp;&nbsp;&lt;/head&gt;<br>&nbsp;&nbsp;&lt;body&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- page contents --&gt;<br>&nbsp;&nbsp;&lt;/body&gt;<br>&lt;/html&gt;</blockquote>
</section>

## Instructions
<section id='instructions'>
Edit the markup so there's a <code>head</code> and a <code>body</code>. The <code>head</code> element should only include the <code>title</code>, and the <code>body</code> element should only include the <code>h1</code> and <code>p</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be only one <code>head</code> element on the page.
    testString: assert($('head').length == 1, 'There should be only one <code>head</code> element on the page.');
  - text: There should be only one <code>body</code> element on the page.
    testString: assert($('body').length == 1, 'There should be only one <code>body</code> element on the page.');
  - text: The <code>head</code> element should be a child of the <code>html</code> element.
    testString: assert($('html').children('head').length == 1, 'The <code>head</code> element should be a child of the <code>html</code> element.');
  - text: The <code>body</code> element should be a child of the <code>html</code> element.
    testString: assert($('html').children('body').length == 1, 'The <code>body</code> element should be a child of the <code>html</code> element.');
  - text: The <code>head</code> element should wrap around the <code>title</code> element.
    testString: assert(code.match(/<head>\s*?<title>\s*?.*?\s*?<\/title>\s*?<\/head>/gi), 'The <code>head</code> element should wrap around the <code>title</code> element.');
  - text: The <code>body</code> element should wrap around both the <code>h1</code> and <code>p</code> elements.
    testString: assert($('body').children('h1').length == 1 && $('body').children('p').length == 1, 'The <code>body</code> element should wrap around both the <code>h1</code> and <code>p</code> elements.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

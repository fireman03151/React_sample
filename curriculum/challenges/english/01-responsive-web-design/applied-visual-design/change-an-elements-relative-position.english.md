---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
---

## Description
<section id='description'>
CSS treats each HTML element as its own box, which is usually referred to as the <code>CSS Box Model</code>. Block-level items automatically start on a new line (think headings, paragraphs, and divs) while inline items sit within surrounding content (like images or spans). The default layout of elements in this way is called the <code>normal flow</code> of a document, but CSS offers the position property to override it.
When the position of an element is set to <code>relative</code>, it allows you to specify how CSS should move it <i>relative</i> to its current position in the normal flow of the page. It pairs with the CSS offset properties of <code>left</code> or <code>right</code>, and <code>top</code> or <code>bottom</code>. These say how many pixels, percentages, or ems to move the item <i>away</i> from where it is normally positioned. The following example moves the paragraph 10 pixels away from the bottom:
<blockquote>p {<br>&nbsp;&nbsp;position: relative;<br>&nbsp;&nbsp;bottom: 10px;<br>}</blockquote>
Changing an element's position to relative does not remove it from the normal flow - other elements around it still behave as if that item were in its default position.
<strong>Note</strong><br>Positioning gives you a lot of flexibility and power over the visual layout of a page. It's good to remember that no matter the position of elements, the underlying HTML markup should be organized and make sense when read from top to bottom. This is how users with visual impairments (who rely on assistive devices like screen readers) access your content.
</section>

## Instructions
<section id='instructions'>
Change the <code>position</code> of the <code>h2</code> to <code>relative</code>, and use a CSS offset to move it 15 pixels away from the <code>top</code> of where it sits in the normal flow. Notice there is no impact on the positions of the surrounding h1 and p elements.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>h2</code> element should have a <code>position</code> property set to <code>relative</code>.
    testString: assert($('h2').css('position') == 'relative', 'The <code>h2</code> element should have a <code>position</code> property set to <code>relative</code>.');
  - text: Your code should use a CSS offset to relatively position the <code>h2</code> 15px away from the <code>top</code> of where it normally sits.
    testString: assert($('h2').css('top') == '15px', 'Your code should use a CSS offset to relatively position the <code>h2</code> 15px away from the <code>top</code> of where it normally sits.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d78a7367417b2b2512ae1
title: Create Movement Using CSS Animation
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
---

## Description
<section id='description'>
When elements have a specified <code>position</code>, such as <code>fixed</code> or <code>relative</code>, the CSS offset properties <code>right</code>, <code>left</code>, <code>top</code>, and <code>bottom</code> can be used in animation rules to create movement.
As shown in the example below, you can push the item downwards then upwards by setting the <code>top</code> property of the <code>50%</code> keyframe to 50px, but having it set to 0px for the first (<code>0%</code>) and the last (<code>100%</code>) keyframe.
<blockquote>@keyframes rainbow {<br>&nbsp;&nbsp;0% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: blue;<br>&nbsp;&nbsp;&nbsp;&nbsp;top: 0px;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;50% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: green;<br>&nbsp;&nbsp;&nbsp;&nbsp;top: 50px;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;100% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: yellow;<br>&nbsp;&nbsp;&nbsp;&nbsp;top: 0px;<br>&nbsp;&nbsp;}<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Add a horizontal motion to the <code>div</code> animation. Using the <code>left</code> offset property, add to the <code>@keyframes</code> rule so rainbow starts at 0 pixels at <code>0%</code>, moves to 25 pixels at <code>50%</code>, and ends at -25 pixels at <code>100%</code>. Don't replace the <code>top</code> property in the editor - the animation should have both vertical and horizontal motion.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>@keyframes</code> rule for <code>0%</code> should use the <code>left</code> offset of 0px.
    testString: assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?top:\s*?0(px)?;\s*?left:\s*?0(px)?;\s*?}/gi), 'The <code>@keyframes</code> rule for <code>0%</code> should use the <code>left</code> offset of 0px.');
  - text: The <code>@keyframes</code> rule for <code>50%</code> should use the <code>left</code> offset of 25px.
    testString: assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?top:\s*?50px;\s*?left:\s*?25px;\s*?}/gi), 'The <code>@keyframes</code> rule for <code>50%</code> should use the <code>left</code> offset of 25px.');
  - text: The <code>@keyframes</code> rule for <code>100%</code> should use the <code>left</code> offset of -25px.
    testString: assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?top:\s*?0(px)?;\s*?left:\s*?-25px;\s*?}/gi), 'The <code>@keyframes</code> rule for <code>100%</code> should use the <code>left</code> offset of -25px.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

#rect {
  animation-name: rainbow;
  animation-duration: 4s;
}

@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;

  }
  50% {
    background-color: green;
    top: 50px;

  }
  100% {
    background-color: yellow;
    top: 0px;

  }
}
</style>

<div id="rect"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "@keyframes rainbow {0% {background-color: blue; top: 0px; left: 0px;} 50% {background-color: green; top: 50px; left: 25px;} 100% {background-color: yellow; top: 0px; left:-25px;}}"
```

</section>

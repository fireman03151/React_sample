---
id: bd7123c9c441eddfaeb4bdef
title: Comment Your JavaScript Code
challengeType: 1
---

## Description
<section id='description'>
Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.
There are two ways to write comments in JavaScript:
Using <code>//</code> will tell JavaScript to ignore the remainder of the text on the current line:
<blockquote>// This is an in-line comment.</blockquote>
You can make a multi-line comment beginning with <code>/*</code> and ending with <code>*/</code>:
<blockquote>/* This is a<br>multi-line comment */</blockquote>
<strong>Best Practice</strong><br>As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code&mdash;both for others <em>and</em> for your future self.
</section>

## Instructions
<section id='instructions'>
Try creating one of each type of comment.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Create a <code>//</code> style comment that contains at least five letters.
    testString: assert(code.match(/(\/\/)...../g), 'Create a <code>//</code> style comment that contains at least five letters.');
  - text: Create a <code>/* */</code> style comment that contains at least five letters.
    testString: assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm), 'Create a <code>/* */</code> style comment that contains at least five letters.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>


```js
// Fake Comment
/* Another Comment */
```

</section>

---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1
---

## Description
<section id='description'>
You learned about searching for whitespace using <code>\s</code>, with a lowercase <code>s</code>. You can also search for everything except whitespace.
Search for non-whitespace using <code>\S</code>, which is an uppercase <code>s</code>. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class <code>[^ \r\t\f\n\v]</code>.
<blockquote>let whiteSpace = "Whitespace. Whitespace everywhere!"<br>let nonSpaceRegex = /\S/g;<br>whiteSpace.match(nonSpaceRegex).length; // Returns 32</blockquote>
</section>

## Instructions
<section id='instructions'>
Change the regex <code>countNonWhiteSpace</code> to look for multiple non-whitespace characters in a string.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use the global flag.
    testString: assert(countNonWhiteSpace.global, 'Your regex should use the global flag.');
  - text: Your regex should use the shorthand character
    testString: assert(/\\S/.test(countNonWhiteSpace.source), 'Your regex should use the shorthand character <code>\S/code> to match all non-whitespace characters.');
  - text: Your regex should find 35 non-spaces in <code>"Men are from Mars and women are from Venus."</code>
    testString: assert("Men are from Mars and women are from Venus.".match(countNonWhiteSpace).length == 35, 'Your regex should find 35 non-spaces in <code>"Men are from Mars and women are from Venus."</code>');
  - text: 'Your regex should find 23 non-spaces in <code>"Space: the final frontier."</code>'
    testString: 'assert("Space: the final frontier.".match(countNonWhiteSpace).length == 23, ''Your regex should find 23 non-spaces in <code>"Space: the final frontier."</code>'');'
  - text: Your regex should find 21 non-spaces in <code>"MindYourPersonalSpace"</code>
    testString: assert("MindYourPersonalSpace".match(countNonWhiteSpace).length == 21, 'Your regex should find 21 non-spaces in <code>"MindYourPersonalSpace"</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

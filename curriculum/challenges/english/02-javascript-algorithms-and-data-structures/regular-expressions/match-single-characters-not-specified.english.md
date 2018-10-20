---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
challengeType: 1
---

## Description
<section id='description'>
So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called <code>negated character sets</code>.
To create a <code>negated character set</code>, you place a <code>caret</code> character (<code>^</code>) after the opening bracket and before the characters you do not want to match.
For example, <code>/[^aeiou]/gi</code> matches all characters that are not a vowel. Note that characters like <code>.</code>, <code>!</code>, <code>[</code>, <code>@</code>, <code>/</code> and white space are matched - the negated vowel character set only excludes the vowel characters.
</section>

## Instructions
<section id='instructions'>
Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>myRegex</code> should match 9 items.
    testString: assert(result.length == 9, 'Your regex <code>myRegex</code> should match 9 items.');
  - text: Your regex <code>myRegex</code> should use the global flag.
    testString: assert(myRegex.flags.match(/g/).length == 1, 'Your regex <code>myRegex</code> should use the global flag.');
  - text: Your regex <code>myRegex</code> should use the case insensitive flag.
    testString: assert(myRegex.flags.match(/i/).length == 1, 'Your regex <code>myRegex</code> should use the case insensitive flag.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

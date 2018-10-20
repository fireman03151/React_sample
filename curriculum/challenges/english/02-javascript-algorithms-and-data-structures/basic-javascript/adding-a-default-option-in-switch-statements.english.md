---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
guideUrl: 'https://www.freecodecamp.org/guide/certificates/adding-a-default-option-in-switch-statements'
---

## Description
<section id='description'>
In a <code>switch</code> statement you may not be able to specify all possible values as <code>case</code> statements. Instead, you can add the <code>default</code> statement which will be executed if no matching <code>case</code> statements are found. Think of it like the final <code>else</code> statement in an <code>if/else</code> chain.
A <code>default</code> statement should be the last case.
<blockquote>switch (num) {<br>&nbsp;&nbsp;case value1:<br>&nbsp;&nbsp;&nbsp;&nbsp;statement1;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case value2:<br>&nbsp;&nbsp;&nbsp;&nbsp;statement2;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>...<br>&nbsp;&nbsp;default:<br>&nbsp;&nbsp;&nbsp;&nbsp;defaultStatement;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Write a switch statement to set <code>answer</code> for the following conditions:<br><code>"a"</code> - "apple"<br><code>"b"</code> - "bird"<br><code>"c"</code> - "cat"<br><code>default</code> - "stuff"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>switchOfStuff("a")</code> should have a value of "apple"
    testString: assert(switchOfStuff("a") === "apple", '<code>switchOfStuff("a")</code> should have a value of "apple"');
  - text: <code>switchOfStuff("b")</code> should have a value of "bird"
    testString: assert(switchOfStuff("b") === "bird", '<code>switchOfStuff("b")</code> should have a value of "bird"');
  - text: <code>switchOfStuff("c")</code> should have a value of "cat"
    testString: assert(switchOfStuff("c") === "cat", '<code>switchOfStuff("c")</code> should have a value of "cat"');
  - text: <code>switchOfStuff("d")</code> should have a value of "stuff"
    testString: assert(switchOfStuff("d") === "stuff", '<code>switchOfStuff("d")</code> should have a value of "stuff"');
  - text: <code>switchOfStuff(4)</code> should have a value of "stuff"
    testString: assert(switchOfStuff(4) === "stuff", '<code>switchOfStuff(4)</code> should have a value of "stuff"');
  - text: You should not use any <code>if</code> or <code>else</code> statements
    testString: assert(!/else/g.test(code) || !/if/g.test(code), 'You should not use any <code>if</code> or <code>else</code> statements');
  - text: You should use a <code>default</code> statement
    testString: assert(switchOfStuff("string-to-trigger-default-case") === "stuff", 'You should use a <code>default</code> statement');
  - text: You should have at least 3 <code>break</code> statements
    testString: assert(code.match(/break/g).length > 2, 'You should have at least 3 <code>break</code> statements');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function switchOfStuff(val) {
  var answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
```

</section>

---
id: cf1111c1c12feddfaeb3bdef
title: Use Conditional Logic with If Statements
challengeType: 1
---

## Description
<section id='description'>
<code>If</code> statements are used to make decisions in code. The keyword <code>if</code> tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as <code>Boolean</code> conditions and they may only be <code>true</code> or <code>false</code>.
When the condition evaluates to <code>true</code>, the program executes the statement inside the curly braces. When the Boolean condition evaluates to <code>false</code>, the statement inside the curly braces will not execute.
<strong>Pseudocode</strong>
<blockquote>if (<i>condition is true</i>) {<br>&nbsp;&nbsp;<i>statement is executed</i><br>}</blockquote>
<strong>Example</strong>
<blockquote>function test (myCondition) {<br>&nbsp;&nbsp;if (myCondition) {<br>&nbsp;&nbsp;&nbsp;&nbsp; return "It was true";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return "It was false";<br>}<br>test(true);  // returns "It was true"<br>test(false); // returns "It was false"</blockquote>
When <code>test</code> is called with a value of <code>true</code>, the <code>if</code> statement evaluates <code>myCondition</code> to see if it is <code>true</code> or not. Since it is <code>true</code>, the function returns <code>"It was true"</code>. When we call <code>test</code> with a value of <code>false</code>, <code>myCondition</code> is <em>not</em> <code>true</code> and the statement in the curly braces is not executed and the function returns <code>"It was false"</code>.
</section>

## Instructions
<section id='instructions'>
Create an <code>if</code> statement inside the function to return <code>"Yes, that was true"</code> if the parameter <code>wasThatTrue</code> is <code>true</code> and return <code>"No, that was false"</code> otherwise.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>trueOrFalse</code> should be a function
    testString: assert(typeof trueOrFalse === "function", '<code>trueOrFalse</code> should be a function');
  - text: <code>trueOrFalse(true)</code> should return a string
    testString: assert(typeof trueOrFalse(true) === "string", '<code>trueOrFalse(true)</code> should return a string');
  - text: <code>trueOrFalse(false)</code> should return a string
    testString: assert(typeof trueOrFalse(false) === "string", '<code>trueOrFalse(false)</code> should return a string');
  - text: <code>trueOrFalse(true)</code> should return "Yes, that was true"
    testString: assert(trueOrFalse(true) === "Yes, that was true", '<code>trueOrFalse(true)</code> should return "Yes, that was true"');
  - text: <code>trueOrFalse(false)</code> should return "No, that was false"
    testString: assert(trueOrFalse(false) === "No, that was false", '<code>trueOrFalse(false)</code> should return "No, that was false"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.



  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```

</section>

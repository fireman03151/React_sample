---
id: 56533eb9ac21ba0edf2244ed
title: Appending Variables to Strings
challengeType: 1
guideUrl: 'https://www.freecodecamp.org/guide/certificates/appending-variables-to-strings'
---

## Description
<section id='description'>
Just as we can build a string over multiple lines out of string <dfn>literals</dfn>, we can also append variables to a string using the plus equals (<code>+=</code>) operator.
</section>

## Instructions
<section id='instructions'>
Set <code>someAdjective</code> and append it to <code>myStr</code> using the <code>+=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>someAdjective</code> should be set to a string at least 3 characters long
    testString: assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2, '<code>someAdjective</code> should be set to a string at least 3 characters long');
  - text: Append <code>someAdjective</code> to <code>myStr</code> using the <code>+=</code> operator
    testString: assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0, 'Append <code>someAdjective</code> to <code>myStr</code> using the <code>+=</code> operator');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective;
var myStr = "Learning to code is ";

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "neat";
var myStr = "Learning to code is ";
myStr += someAdjective;
```

</section>

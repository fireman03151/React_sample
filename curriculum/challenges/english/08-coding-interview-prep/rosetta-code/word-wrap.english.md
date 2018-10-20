---
title: Word wrap
id: 594810f028c0303b75339ad4
challengeType: 5
---

## Description
<section id='description'>
<p>
Even today, with proportional fonts and complex layouts, there are still
cases where you need to wrap text at a specified
column.  The basic task is to wrap a paragraph of text in a simple way.
Example text:
</p>
<pre>
Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX algorithm.
If your language provides this, you get easy extra credit,
but you ''must reference documentation'' indicating that the algorithm
is something better than a simple minimimum length algorithm.
</pre>
<p>
Task:

    Write a function that can wrap this text to any number of characters.

As an example, the text wrapped to 80 characters should look like the following:
</p>
<pre>
Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX
algorithm. If your language provides this, you get easy extra credit, but you
must reference documentation indicating that the algorithm is something better
than a simple minimimum length algorithm.
</pre>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: wrap must be a function.
    testString: assert.equal(typeof wrap, 'function', 'wrap must be a function.');
  - text: wrap must return a string.
    testString: assert.equal(typeof wrap('abc', 10), 'string', 'wrap must return a string.');
  - text: wrap(80) must return 4 lines.
    testString: assert(wrapped80.split('\n').length === 4, 'wrap(80) must return 4 lines.');
  - text: Your <code>wrap</code> function should return our expected text
    testString: assert.equal(wrapped80.split('\n')[0], firstRow80, 'Your <code>wrap</code> function should return our expected text');
  - text: wrap(42) must return 7 lines.
    testString: assert(wrapped42.split('\n').length === 7, 'wrap(42) must return 7 lines.');
  - text: Your <code>wrap</code> function should return our expected text
    testString: assert.equal(wrapped42.split('\n')[0], firstRow42, 'Your <code>wrap</code> function should return our expected text');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wrap (text, limit) {
  return text;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const text =
`Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX algorithm.
If your language provides this, you get easy extra credit,
but you ''must reference documentation'' indicating that the algorithm
is something better than a simple minimimum length algorithm.`;

const wrapped80 = wrap(text, 80);
const wrapped42 = wrap(text, 42);

const firstRow80 =
    'Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX';

const firstRow42 = 'Wrap text using a more sophisticated';
```

</div>

</section>

## Solution
<section id='solution'>


```js
function wrap (text, limit) {
  const noNewlines = text.replace('\n', '');
  if (noNewlines.length > limit) {
    // find the last space within limit
    const edge = noNewlines.slice(0, limit).lastIndexOf(' ');
    if (edge > 0) {
      const line = noNewlines.slice(0, edge);
      const remainder = noNewlines.slice(edge + 1);
      return line + '\n' + wrap(remainder, limit);
    }
  }
  return text;
}

```

</section>

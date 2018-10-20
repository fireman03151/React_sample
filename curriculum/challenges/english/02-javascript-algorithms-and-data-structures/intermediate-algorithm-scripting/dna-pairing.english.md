---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
<a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">Base pairs</a> are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pairElement("ATCGA")</code> should return <code>[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]</code>.
    testString: assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]], '<code>pairElement("ATCGA")</code> should return <code>[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]</code>.');
  - text: <code>pairElement("TTGAG")</code> should return <code>[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]</code>.
    testString: assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]], '<code>pairElement("TTGAG")</code> should return <code>[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]</code>.');
  - text: <code>pairElement("CTCTA")</code> should return <code>[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]</code>.
    testString: assert.deepEqual(pairElement("CTCTA"),[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]], '<code>pairElement("CTCTA")</code> should return <code>[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pairElement(str) {
  return str;
}

pairElement("GCG");
```

</div>



</section>

## Solution
<section id='solution'>


```js
var lookup = Object.create(null);
lookup.A = 'T';
lookup.T = 'A';
lookup.C = 'G';
lookup.G = 'C';

function pairElement(str) {
 return str.split('').map(function(p) {return [p, lookup[p]];});
}
```

</section>

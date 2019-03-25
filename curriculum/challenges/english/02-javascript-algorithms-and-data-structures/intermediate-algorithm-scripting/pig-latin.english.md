---
id: aa7697ea2477d1316795783b
title: Pig Latin
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Translate the provided string to pig latin.
<a href="http://en.wikipedia.org/wiki/Pig_Latin" target="_blank">Pig Latin</a> takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
If a word does not contain a vowel, just add "ay" to the end.
Input strings are guaranteed to be English words in all lowercase.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>translatePigLatin("california")</code> should return "aliforniacay".
    testString: assert.deepEqual(translatePigLatin("california"), "aliforniacay", '<code>translatePigLatin("california")</code> should return "aliforniacay".');
  - text: <code>translatePigLatin("paragraphs")</code> should return "aragraphspay".
    testString: assert.deepEqual(translatePigLatin("paragraphs"), "aragraphspay", '<code>translatePigLatin("paragraphs")</code> should return "aragraphspay".');
  - text: <code>translatePigLatin("glove")</code> should return "oveglay".
    testString: assert.deepEqual(translatePigLatin("glove"), "oveglay", '<code>translatePigLatin("glove")</code> should return "oveglay".');
  - text: <code>translatePigLatin("algorithm")</code> should return "algorithmway".
    testString: assert.deepEqual(translatePigLatin("algorithm"), "algorithmway", '<code>translatePigLatin("algorithm")</code> should return "algorithmway".');
  - text: <code>translatePigLatin("eight")</code> should return "eightway".
    testString: assert.deepEqual(translatePigLatin("eight"), "eightway", '<code>translatePigLatin("eight")</code> should return "eightway".');
  - text: Should handle words where the first vowel comes in the middle of the word.  <code>translatePigLatin("schwartz")</code> should return "artzschway". 
    testString: assert.deepEqual(translatePigLatin("schwartz"), "artzschway", 'Should handle words where the first vowel comes in the end of the word.');
  - text: Should handle words without vowels. <code>translatePigLatin("rhythm")</code> should return "rhythmay".
    testString: assert.deepEqual(translatePigLatin("rhythm"), "rhythmay");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) return str + "way";
  var front = [];
  str = str.split('');
  while (str.length && !isVowel(str[0])) {
    front.push(str.shift());
  }
  return [].concat(str, front).join('') + 'ay';
}

function isVowel(c) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
```

</section>

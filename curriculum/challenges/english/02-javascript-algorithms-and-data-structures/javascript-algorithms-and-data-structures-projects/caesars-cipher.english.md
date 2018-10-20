---
id: 56533eb9ac21ba0edf2244e2
title: Caesars Cipher
challengeType: 5
isRequired: true
---

## Description
<section id='description'>
One of the simplest and most widely known <dfn>ciphers</dfn> is a <code>Caesar cipher</code>, also known as a <code>shift cipher</code>. In a <code>shift cipher</code> the meanings of the letters are shifted by some set amount.
A common modern use is the <a href="https://en.wikipedia.org/wiki/ROT13" target='_blank'>ROT13</a> cipher, where the values of the letters are shifted by 13 places. Thus 'A' &harr; 'N', 'B' &harr;  'O' and so on.
Write a function which takes a <a href="https://en.wikipedia.org/wiki/ROT13" target='_blank'>ROT13</a> encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>rot13("SERR PBQR PNZC")</code> should decode to <code>FREE CODE CAMP</code>
    testString: assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP", '<code>rot13("SERR PBQR PNZC")</code> should decode to <code>FREE CODE CAMP</code>');
  - text: <code>rot13("SERR CVMMN!")</code> should decode to <code>FREE PIZZA!</code>
    testString: assert(rot13("SERR CVMMN!") === "FREE PIZZA!", '<code>rot13("SERR CVMMN!")</code> should decode to <code>FREE PIZZA!</code>');
  - text: <code>rot13("SERR YBIR?")</code> should decode to <code>FREE LOVE?</code>
    testString: assert(rot13("SERR YBIR?") === "FREE LOVE?", '<code>rot13("SERR YBIR?")</code> should decode to <code>FREE LOVE?</code>');
  - text: <code>rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")</code> should decode to <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>
    testString: assert(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", '<code>rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")</code> should decode to <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function rot13(str) { // LBH QVQ VG!

  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
```

</div>



</section>

## Solution
<section id='solution'>


```js
var lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line

  decodedArr = codeArr.map(function(letter) {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}
```

</section>

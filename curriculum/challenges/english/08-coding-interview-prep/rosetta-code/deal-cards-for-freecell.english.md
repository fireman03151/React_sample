---
title: Deal cards for FreeCell
id: 59694356a6e7011f7f1c5f4e
challengeType: 5
isHidden: false
forumTopicId: 302246
---

## Description
<section id='description'>
<i>FreeCell</i> is the solitaire card game that Paul Alfille introduced to the PLATO system in 1978. Jim Horne, at Microsoft, changed the name to FreeCell and reimplemented the game for <a href="https://rosettacode.org/wiki/DOS" title="DOS" target="_blank">DOS</a>, then <a href="https://rosettacode.org/wiki/Windows" title="Windows" target="_blank">Windows</a>. This version introduced 32000 numbered deals.
As the game became popular, Jim Horne disclosed the algorithm, and other implementations of FreeCell began to reproduce the Microsoft deals. These deals are numbered from 1 to 32000. Newer versions from Microsoft have 1 million deals, numbered from 1 to 1000000; some implementations allow numbers outside that range.
The algorithm uses this <a href="https://rosettacode.org/wiki/linear congruential generator" title="linear congruential generator" target="_blank">linear congruential generator</a> from Microsoft C:
<ul>
  <li>$state_{n + 1} \equiv 214013 \times state_n + 2531011 \pmod{2^{31}}$</li>
  <li>$rand_n = state_n \div 2^{16}$</li>
  <li>$rand_n$ is in range 0 to 32767.</li>
</ul>
The algorithm follows:
<ol>
  <li>Seed the RNG with the number of the deal.
  <li>Create an <a href="https://rosettacode.org/wiki/array" title="array" target="_blank">array</a> of 52 cards: Ace of Clubs, Ace of Diamonds, Ace of Hearts, Ace of Spades, 2 of Clubs, 2 of Diamonds, and so on through the ranks: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King. The array indexes are 0 to 51, with Ace of Clubs at 0, and King of Spades at 51.</li>
  <li>Until the array is empty:</li>
  <li>Choose a random card at index &equiv; next random number (mod array length).</li>
    <ul>
      <li>Swap this random card with the last card of the array.</li>
      <li>Remove this random card from the array. (Array length goes down by 1.)</li>
      <li>Deal this random card.</li>
    </ul>
  <li>Deal all 52 cards, face up, across 8 columns. The first 8 cards go in 8 columns, the next 8 cards go on the first 8 cards, and so on.</li>
</ol>
<strong>Example:</strong>
<strong>Order to deal cards</strong>
<pre> 1  2  3  4  5  6  7  8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52</pre>
<strong>Game #1</strong>

```js
[
  ['JD', '2D', '9H', 'JC', '5D', '7H', '7C', '5H'],
  ['KD', 'KC', '9S', '5S', 'AD', 'QC', 'KH', '3H'],
  ['2S', 'KS', '9D', 'QD', 'JS', 'AS', 'AH', '3C'],
  ['4C', '5C', 'TS', 'QH', '4H', 'AC', '4D', '7S'],
  ['3S', 'TD', '4S', 'TH', '8H', '2C', 'JH', '7D'],
  ['6D', '8S', '8D', 'QS', '6C', '3D', '8C', 'TC'],
  ['6S', '9C', '2H', '6H']
]
```

<strong>Game #617</strong>

```js
[
  ['7D', 'AD', '5C', '3S', '5S', '8C', '2D', 'AH'],
  ['TD', '7S', 'QD', 'AC', '6D', '8H', 'AS', 'KH'],
  ['TH', 'QC', '3H', '9D', '6S', '8D', '3D', 'TC'],
  ['KD', '5H', '9S', '3C', '8S', '7H', '4D', 'JS'],
  ['4C', 'QS', '9C', '9H', '7C', '6H', '2C', '2S'],
  ['4S', 'TS', '2H', '5D', 'JC', '6C', 'JH', 'QH'],
  ['JD', 'KS', 'KC', '4H']
]
```

</section>

## Instructions
<section id='instructions'>
Write a function to take a deal number and deal cards in the same order as this algorithm. The function must return a two dimensional array representing the FreeCell board.
Deals can also be checked against <a href="https://freecellgamesolutions.com/" target="_blank">FreeCell solutions to 1000000 games</a>. (Summon a video solution, and it displays the initial deal.)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dealFreeCell</code> should be a function.
    testString: assert(typeof dealFreeCell === 'function');
  - text: <code>dealFreeCell(seed)</code> should return an object.
    testString: assert(typeof dealFreeCell(1) === 'object');
  - text: <code>dealFreeCell(seed)</code> should return an array of length 7.
    testString: assert(dealFreeCell(1).length === 7);
  - text: "<code>dealFreeCell(1)</code> should return an array identical to example \"Game #1\""
    testString: "assert.deepEqual(dealFreeCell(1), game1);"
  - text: "<code>dealFreeCell(617)</code> should return an array identical to example \"Game #617\""
    testString: "assert.deepEqual(dealFreeCell(617), game617);"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dealFreeCell(seed) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const replaceThis = 3;
const game1 = [
  ['JD', '2D', '9H', 'JC', '5D', '7H', '7C', '5H'],
  ['KD', 'KC', '9S', '5S', 'AD', 'QC', 'KH', '3H'],
  ['2S', 'KS', '9D', 'QD', 'JS', 'AS', 'AH', '3C'],
  ['4C', '5C', 'TS', 'QH', '4H', 'AC', '4D', '7S'],
  ['3S', 'TD', '4S', 'TH', '8H', '2C', 'JH', '7D'],
  ['6D', '8S', '8D', 'QS', '6C', '3D', '8C', 'TC'],
  ['6S', '9C', '2H', '6H']
];
const game617 = [
  ['7D', 'AD', '5C', '3S', '5S', '8C', '2D', 'AH'],
  ['TD', '7S', 'QD', 'AC', '6D', '8H', 'AS', 'KH'],
  ['TH', 'QC', '3H', '9D', '6S', '8D', '3D', 'TC'],
  ['KD', '5H', '9S', '3C', '8S', '7H', '4D', 'JS'],
  ['4C', 'QS', '9C', '9H', '7C', '6H', '2C', '2S'],
  ['4S', 'TS', '2H', '5D', 'JC', '6C', 'JH', 'QH'],
  ['JD', 'KS', 'KC', '4H']
];
```

</div>

</section>

## Solution
<section id='solution'>


```js
// RNG
function FreeCellRNG(seed) {
  return {
    lastNum: seed,
    next() {
      this.lastNum = ((214013 * this.lastNum) + 2531011) % (Math.pow(2, 31));
      return this.lastNum >> 16;
    }
  };
}
// Get cards
function getDeck() {
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
  const suits = ['C', 'D', 'H', 'S'];
  const cards = [];
  for (let i = 0; i < ranks.length; i += 1) {
    for (let j = 0; j < suits.length; j += 1) {
      cards.push(`${ranks[i]}${suits[j]}`);
    }
  }
  return cards;
}
function dealFreeCell(seed) {
  const rng = FreeCellRNG(seed);
  const deck = getDeck();

  const deltCards = [[], [], [], [], [], [], []];
  let currentColumn = 0;
  let currentRow = 0;

  let rand;
  let temp;
  let card;
  while (deck.length > 0) {
    // Choose a random card
    rand = rng.next() % deck.length;

    // Swap this random card with the last card in the array
    temp = deck[deck.length - 1];
    deck[deck.length - 1] = deck[rand];
    deck[rand] = temp;

    // Remove this card from the array
    card = deck.pop();

    // Deal this card
    deltCards[currentRow].push(card);
    currentColumn += 1;
    if (currentColumn === 8) {
      currentColumn = 0;
      currentRow += 1;
    }
  }

  return deltCards;
}

```

</section>

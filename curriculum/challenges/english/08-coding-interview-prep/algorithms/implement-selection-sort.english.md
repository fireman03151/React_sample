---
id: 587d8259367417b2b2512c85
title: Implement Selection Sort
challengeType: 1
---

## Description
<section id='description'>
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.
<strong>Instructions</strong>: Write a function <code>selectionSort</code> which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
<strong>Note:</strong><br>We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging <code>array</code> to see your sorting algorithm in action!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>selectionSort</code> is a function.
    testString: assert(typeof selectionSort == 'function', '<code>selectionSort</code> is a function.');
  - text: <code>selectionSort</code> returns a sorted array (least to greatest).
    testString: assert(isSorted(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), '<code>selectionSort</code> returns a sorted array (least to greatest).');
  - text: <code>selectionSort</code> returns an array that is unchanged except for order.
    testString: assert.sameMembers(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], '<code>selectionSort</code> returns an array that is unchanged except for order.');
  - text: <code>selectionSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert.strictEqual(code.search(/\.sort\(/), -1, '<code>selectionSort</code> should not use the built-in <code>.sort()</code> method.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function selectionSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
```

</div>


### After Test
<div id='js-teardown'>

```js
function isSorted(arr) {
  var check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
  return check(0);
};
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

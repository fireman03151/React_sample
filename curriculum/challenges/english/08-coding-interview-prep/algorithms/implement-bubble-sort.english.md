---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
forumTopicId: 301612
---

## Description
<section id='description'>
This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.
Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.
This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.
<strong>Instructions:</strong> Write a function <code>bubbleSort</code> which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
<strong>Note:</strong><br>We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging <code>array</code> to see your sorting algorithm in action!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>bubbleSort</code> should be a function.
    testString: assert(typeof bubbleSort == 'function');
  - text: <code>bubbleSort</code> should return a sorted array (least to greatest).
    testString: assert(isSorted(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>bubbleSort</code> should return an array that is unchanged except for order.
    testString: assert.sameMembers(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>bubbleSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert.strictEqual(code.search(/\.sort\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bubbleSort(array) {
  // change code below this line
  return array;
  // change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
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
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j-1];
        array[j-1] =  array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return array;
}
```

</section>

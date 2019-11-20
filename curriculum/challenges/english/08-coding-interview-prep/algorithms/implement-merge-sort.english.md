---
id: 587d825c367417b2b2512c8f
title: Implement Merge Sort
challengeType: 1
forumTopicId: 301614
---

## Description
<section id='description'>
Another common intermediate sorting algorithm is merge sort. Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:
<strong>1)</strong> Recursively split the input array in half until a sub-array with only one element is produced.
<strong>2)</strong> Merge each sorted sub-array together to produce the final sorted array.
Merge sort is an efficient sorting method, with time complexity of <i>O(nlog(n))</i>. This algorithm is popular because it is performant and relatively easy to implement.
As an aside, this will be the last sorting algorithm we cover here. However, later in the section on tree data structures we will describe heap sort, another efficient sorting method that requires a binary heap in its implementation.
<strong>Instructions:</strong> Write a function <code>mergeSort</code> which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance <code>merge</code>, which is responsible for merging two sorted arrays, and another function, for instance <code>mergeSort</code>, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!
<strong>Note:</strong><br>We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging <code>array</code> to see your sorting algorithm in action!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mergeSort</code> should be a function.
    testString: assert(typeof mergeSort == 'function');
  - text: <code>mergeSort</code> should return a sorted array (least to greatest).
    testString: assert(isSorted(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>mergeSort</code> should return an array that is unchanged except for order.
    testString: assert.sameMembers(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>mergeSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert.strictEqual(code.search(/\.sort\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mergeSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
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

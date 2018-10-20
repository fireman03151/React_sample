---
id: a39963a4c10bc8b4d4f06d7e
title: Seek and Destroy
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
<strong>Note</strong><br> You have to use the <code>arguments</code> object.
Remember to use <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code> should return <code>[1, 1]</code>.
    testString: assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], '<code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code> should return <code>[1, 1]</code>.');
  - text: <code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code> should return <code>[1, 5, 1]</code>.
    testString: assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], '<code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code> should return <code>[1, 5, 1]</code>.');
  - text: <code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code> should return <code>[1]</code>.
    testString: assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], '<code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code> should return <code>[1]</code>.');
  - text: <code>destroyer([2, 3, 2, 3], 2, 3)</code> should return <code>[]</code>.
    testString: assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], '<code>destroyer([2, 3, 2, 3], 2, 3)</code> should return <code>[]</code>.');
  - text: <code>destroyer(["tree", "hamburger", 53], "tree", 53)</code> should return <code>["hamburger"]</code>.
    testString: assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"], '<code>destroyer(["tree", "hamburger", 53], "tree", 53)</code> should return <code>["hamburger"]</code>.');
  - text: <code>destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")</code> should return <code>[12,92,65]</code>.
    testString: assert.deepEqual(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"), [12,92,65], '<code>destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")</code> should return <code>[12,92,65]</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function destroyer(arr) {
  var hash = Object.create(null);
  [].slice.call(arguments, 1).forEach(function(e) {
    hash[e] = true;
  });
  // Remove all the values
  return arr.filter(function(e) { return !(e in hash);});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

```

</section>

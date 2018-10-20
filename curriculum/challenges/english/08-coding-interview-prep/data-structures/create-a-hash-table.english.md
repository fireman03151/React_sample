---
id: 587d825b367417b2b2512c8e
title: Create a Hash Table
challengeType: 1
---

## Description
<section id='description'>
In this challenge we will learn about hash tables. A Hash table is used to implement associative arrays, or mappings of key-value pairs, like the objects and Maps we have just been studying. A JavaScript object could be implemented as a hash table, for instance (its actual implementation will depend on the environment it's running in). The way a hash table works is that it takes a key input and hashes this key in a deterministic way to some numerical value. This numerical value is then used as the actual key the associated value is stored by. Then, if you try to access the same key again, the hashing function will process the key, return the same numerical result, which will then be used to look up the associated value. This provides very efficient O(n) lookup time on average.
Hash tables can be implemented as arrays with hash functions producing array indices within a specified range. In this method, the choice of the array size is important, as is the hashing function. For instance, what if the hashing function produces the same value for two different keys? This is called a collision. One way to handle collisions is to just store both key-value pairs at that index. Then, upon lookup of either, you would have to iterate through the bucket of items to find the key you are looking for. A good hashing function will minimize collisions to maintain efficient search time.
Here, we won't be concerned with the details of hashing or hash table implementation, we will just try to get a general sense of how they work.
Instructions: Let's create the basic functionality of a hash table. We've created a naive hashing function for you to use. You can pass a string value to the function hash and it will return a hashed value you can use as a key for storage. Store items based on this hashed value in the this.collection object. Create these three methods: add, remove, and lookup. The first should accept a key value pair to add to the hash table. The second should remove a key-value pair when passed a key. The third should accept a key and return the associated value or null if the key is not present.
Be sure to write your code to account for collisions!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The HashTable data structure exists.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return (typeof test === 'object')})(), 'The HashTable data structure exists.');
  - text: The HashTable has an add method.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.add) === 'function')})(), 'The HashTable has an add method.');
  - text: The HashTable has an remove method.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.remove) === 'function')})(), 'The HashTable has an remove method.');
  - text: The HashTable has an lookup method.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.lookup) === 'function')})(), 'The HashTable has an lookup method.');
  - text: The add method adds key value pairs and the lookup method returns the values associated with a given key.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); return (test.lookup('key') === 'value')})(), 'The add method adds key value pairs and the lookup method returns the values associated with a given key.');
  - text: The remove method accepts a key as input and removes the associated key value pair.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); test.remove('key'); return (test.lookup('key') === null)})(), 'The remove method accepts a key as input and removes the associated key value pair.');
  - text: Items are added using the hash function.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('key2','value2'); test.add('key3','value3'); return (called === 3)})(), 'Items are added using the hash function.');
  - text: The hash table handles collisions.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('1key','value2'); test.add('ke1y','value3'); return (test.lookup('key1') === 'value1' && test.lookup('1key') == 'value2' && test.lookup('ke1y') == 'value3')})(), 'The hash table handles collisions.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};
```

</div>

### Before Test
<div id='js-setup'>

```js
  var called = 0;
    var hash = (string) => {
     called++;
      var hash = 0;
      for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); };
      return hash;
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

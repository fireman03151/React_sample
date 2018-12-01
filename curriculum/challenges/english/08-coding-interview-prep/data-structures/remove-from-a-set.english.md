---
id: 587d8253367417b2b2512c6b
title: Remove from a Set
challengeType: 1
---

## Description
<section id='description'>
In this exercises we are going to create a delete function for our set.
</section>

## Instructions
<section id='instructions'>
The function should be named <code>this.remove</code>. This function should accept a value and check if it exists in the set. If it does, remove that value from the set, and return <code>true</code>. Otherwise, return <code>false</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have a <code>remove</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.remove === 'function')}()), 'Your <code>Set</code> class should have a <code>remove</code> method.');
  - text: Your <code>remove</code> method should only remove items that are present in the set.
    testString: assert.deepEqual((function(){var test = new Set(); test.add('a');test.add('b');test.remove('c'); return test.values(); })(), ['a', 'b'], 'Your <code>remove</code> method should only remove items that are present in the set.');
  - text: Your <code>remove</code> method should remove the given item from the set.
    testString: assert((function(){var test = new Set(); test.add('a');test.add('b');test.remove('a'); var vals = test.values(); return (vals[0] === 'b' && vals.length === 1)}()), 'Your <code>remove</code> method should remove the given item from the set.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // change code below this line
    // change code above this line
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Set() {
    var collection = [];
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    this.values = function() {
        return collection;
    };
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    this.remove = function(element){
        if (this.has(element)){
            collection.splice(collection.indexOf(element), 1);
            return true;
        }
        return false;
    }
}
```

</section>

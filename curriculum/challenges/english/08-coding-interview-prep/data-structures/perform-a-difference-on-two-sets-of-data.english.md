---
id: 587d8254367417b2b2512c6e
title: Perform a Difference on Two Sets of Data
challengeType: 1
---

## Description
<section id='description'>
In this exercise we are going to perform a difference on 2 sets of data. We will create a method on our <code>Set</code> data structure called <code>difference</code>. A difference of sets should compare two sets and return the items present in the first set that are absent in the second. This method should take another <code>Set</code> as an argument and return the <code>difference</code> of the two sets.
For example, if <code>setA = ['a','b','c']</code> and <code>setB = ['a','b','d','e']</code>, then the difference of setA and setB is: <code>setA.difference(setB) = ['c']</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have a <code>difference</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.difference === 'function')})());
  - text: Your <code>difference</code> method should return the proper collection.
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setA.add('c'); setB.add('c'); setB.add('d'); var differenceSetAB = setA.difference(setB); return (differenceSetAB.size() === 2) && DeepEqual(differenceSetAB.values(), [ 'a', 'b' ])})());

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
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
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
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }
}
```

</section>

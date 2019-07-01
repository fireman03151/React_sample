---
title: Test if a Variable or Function is Defined
---
## Test if a Variable or Function is Defined

To begin, locate the file "tests/1_unit_tests.js".

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 2 */``` pass.

## Hint 1

The lines in the test should be changed from `assert.fail()` to either `assert.isDefined()` or `assert.isUndefined()`.

## Solution
```js
/** 2 - Use assert.isDefined() or assert.isUndefined() to make the tests pass. **/
test('#isDefined, #isUndefined', function(){
  assert.isDefined( null, 'null is not undefined');
  assert.isUndefined( undefined, 'undefined IS undefined');
  assert.isDefined( 'hello', 'a string is not undefined' );
});
```
---
id: 5a24c314108439a4d403615a
title: Remove an Item from an Array
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
Time to practice removing items from an array. The spread operator can be used here as well. Other useful JavaScript methods include <code>slice()</code> and <code>concat()</code>.
</section>

## Instructions
<section id='instructions'>
The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The Redux store should exist and initialize with a state equal to <code>[0,1,2,3,4,5]</code>
    testString: assert((function() { const initialState = store.getState(); return (Array.isArray(initialState) === true && DeepEqual(initialState, [0, 1, 2, 3, 4, 5])); })(), 'The Redux store should exist and initialize with a state equal to <code>[0,1,2,3,4,5]</code>');
  - text: <code>removeItem</code> and <code>immutableReducer</code> both should be functions.
    testString: assert(typeof removeItem === 'function' && typeof immutableReducer === 'function', '<code>removeItem</code> and <code>immutableReducer</code> both should be functions.');
  - text: Dispatching the <code>removeItem</code> action creator should remove items from the state and should NOT mutate state.
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(removeItem(3)); const state_1 = store.getState(); store.dispatch(removeItem(2)); const state_2 = store.getState(); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); const state_3 = store.getState(); return isFrozen && DeepEqual(state_1, [0, 1, 2, 4, 5]) && DeepEqual(state_2, [0, 1, 4, 5]) && DeepEqual(state_3, [5]); })(), 'Dispatching the <code>removeItem</code> action creator should remove items from the state and should NOT mutate state.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```

</section>

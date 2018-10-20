---
id: 5a24c314108439a4d403614e
title: Define an Action Creator
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.
</section>

## Instructions
<section id='instructions'>
Define a function named <code>actionCreator()</code> that returns the <code>action</code> object when called.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The function <code>actionCreator</code> should exist.
    testString: assert(typeof actionCreator === 'function', 'The function <code>actionCreator</code> should exist.');
  - text: Running the <code>actionCreator</code> function should return the action object.
    testString: assert(typeof action === 'object', 'Running the <code>actionCreator</code> function should return the action object.');
  - text: The returned action should have a key property type with value <code>LOGIN</code>.
    testString: assert(action.type === 'LOGIN', 'The returned action should have a key property type with value <code>LOGIN</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const action = {
  type: 'LOGIN'
}
// Define an action creator here:

```

</div>



</section>

## Solution
<section id='solution'>


```js
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
const actionCreator = () => {
  return action;
};
```

</section>

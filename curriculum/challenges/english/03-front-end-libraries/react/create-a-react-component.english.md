---
id: 5a24c314108439a4d4036163
title: Create a React Component
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
The other way to define a React component is with the ES6 <code>class</code> syntax. In the following example, <code>Kitten</code> extends <code>React.Component</code>:
<blockquote>class Kitten extends React.Component {<br>&nbsp;&nbsp;constructor(props) {<br>&nbsp;&nbsp;&nbsp;&nbsp;super(props);<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;render() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return (<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hi&lt;/h1&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;);<br>&nbsp;&nbsp;}<br>}</blockquote>
This creates an ES6 class <code>Kitten</code> which extends the <code>React.Component</code> class. So the <code>Kitten</code> class now has access to many useful React features, such as local state and lifecycle hooks. Don't worry if you aren't familiar with these terms yet, they will be covered in greater detail in later challenges.
Also notice the <code>Kitten</code> class has a <code>constructor</code> defined within it that calls <code>super()</code>. It uses <code>super()</code> to call the constructor of the parent class, in this case <code>React.Component</code>. The constructor is a special method used during the initialization of objects that are created with the <code>class</code> keyword. It is best practice to call a component's <code>constructor</code> with <code>super</code>, and pass <code>props</code> to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the constructor as well as <code>props</code>.
</section>

## Instructions
<section id='instructions'>
<code>MyComponent</code> is defined in the code editor using class syntax. Finish writing the <code>render</code> method so it returns a <code>div</code> element that contains an <code>h1</code> with the text <code>Hello React!</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The React component should return a <code>div</code> element.
    testString: assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div', 'The React component should return a <code>div</code> element.');
  - text: The returned <code>div</code> should render an <code>h1</code> header within it.
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.shallow(React.createElement(MyComponent)).html()), 'The returned <code>div</code> should render an <code>h1</code> header within it.');
  - text: The <code>h1</code> header should contain the string <code>Hello React!</code>.
    testString: assert(Enzyme.shallow(React.createElement(MyComponent)).html() === '<div><h1>Hello React!</h1></div>', 'The <code>h1</code> header should contain the string <code>Hello React!</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line



    // change code above this line
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};
```

</section>

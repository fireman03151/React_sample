---
title: Components
---
## Components

Components are the building blocks of React. They help you divide the functionality of the UI into several pieces which can be reused throughout the application. You can inject value into props as given below:

```jsx

// 1. Define our Welcome component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 2. Create our "app"
const element = <Welcome name="Faisal Arkan" />;

// 3. Render the app in the browser window
ReactDOM.render(
  element,
  document.getElementById('root')
);

```
First, we define our Component (this is a functional, stateless component). It takes a single argument, `props`, and from this object, only the value `name` is ever used. We could replace this with a `firstName` and `lastName` if we wanted. But we don't right now.

Second, the Welcome component is called with the value ```name="Faisal Arkan"```. This will be assigned to ```{props.name}``` in our component. The Welcome component called with this name returns the element ```<h1>Hello, Faisal Arkan</h1>```. We save this into the const variable ```element```. 

The value `name="Faisal Arkan"` will be assigned to `{props.name}` from `function Welcome(props)` and returns a component `<h1>Hello, Faisal Arkan</h1>` which is saved into the const variable `element`. The component can then be rendered via `ReactDOM.render(element, document.getElementById('root'));`. `document.getElementById('root')` in this case is the target location you would like the `element` component to be rendered.

##### Important note:
User defined components (stateful or stateless) must always start with a capital letter as React considers components starting with lowercase letters as DOM tags. For example, ```<Foo />``` will be considered a user defined component but ```<foo />``` will be considered DOM tags similar to  ```<div />```, ```<span />``` or ```<p />``` tags. This is explaned in detail [here](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)

### Other ways to declare components

There are many ways to declare components when using React.js, but there are two kinds of components, ***stateless*** components and ***stateful*** components.

Briefly, stateful components are clever. They can hold their own information (in the `state` object) *and* inherit `props` (as seen above) from parents. Stateless components can *only* inherit `props`, so if they need to update they have to be told by their parent.

See the below examples of af Cat component. The stateful Cat component is aware of its feeling, the stateless one is not.

### Stateful

#### Class Type Components

```jsx

class Cat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      humor: 'happy'
    }
  }
  render() {
    return(
      <div>
        <h1>Hi, my name is {this.props.name}</h1>
        <p>
          I'm a {this.props.color} cat
        </p>
        <p>
          I am a {this.state.humor} cat.
        </p>
      </div>
    );
  }
}

```

### Stateless Components

#### Functional Components (Arrow Function from ES6)

```jsx

const Cat = props => {
  return (
    <div>
      <h1>Hi, my name is {props.name}</h1>
      <p>I am a {props.color} cat</p>
      <p>Sadly, I can't tell you how I feel, because I have no state.</p>
    </div>;
  );
};

```

#### Implicit Return Components

If all your component does is render something (i.e. no computing), you can omit the 'return'.

```jsx

const Cat = props =>
  <div>
    <h1>{props.name}</h1>
    <p>{props.color}</p>
     <p>Sadly, I can't tell you how I feel, because I have no state.</p>
  </div>;

```

### Pure Components

This type of component was added in React 16 and can be used to declare stateless non-functional components.
These components work like normal stateful components (class-based component) but with `shouldComponentUpdate()` pre-defined.
They are the fastest components and make the render cycle much cleaner and leaner.

```jsx
class Cat extends React.PureComponent {
  render() {
      return(
        <div>
          <h1>{this.props.name}</h1>
          <p>{props.color}</p>
        </div>
      );
    }
}

```

This component will only render if there is a change in its props; not when the parent re-renders.

### More Information:
- [Components and Props](https://reactjs.org/docs/components-and-props.html)

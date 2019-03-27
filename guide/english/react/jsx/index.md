---
title: JSX
---

# JSX

> JSX is short for JavaScript XML.

JSX is an expression which uses valid HTML statements within JavaScript. You can assign this expression to a variable and use it elsewhere. You can combine other valid JavaScript expressions and JSX within these HTML statements by placing them within braces (`{}`). Babel further compiles JSX into an object of type `React.createElement()`.

### Single-line & Multi-line expressions
Single-line expression are simple to use.

```jsx
const one = <h1>Hello World!</h1>;
```

When you need to use multiple lines in a single JSX expression, write the code within a single parenthesis.

```jsx
const two = (
  <ul>
    <li>Once</li>
    <li>Twice</li>
  </ul>
);
```

### Using only HTML tags

```jsx
const greet = <h1>Hello World!</h1>;
```

### Combining JavaScript expression with HTML tags
We can use JavaScript variables within braces.

```jsx
const who = "Quincy Larson";
const greet = <h1>Hello {who}!</h1>;
```

We can also call other JavaScript functions within braces.

```jsx
function who() {
  return "World";
}
const greet = <h1>Hello {who()}!</h1>;
```
### Only a single parent tag is allowed
A valid JSX expression can only have one tag at the highest level. However, the tag at the highest level, or the parent, can have as many child tags as you wish. If you run into a situation where you need to create a JSX expression with two tags at the same level, they must be wrapped in a an enclosing tag.

```jsx
// This is invalid.
const tags = (
  <h1>Hello World!</h1>
  <h3>This is my special list:</h3>
  <ul>
    <li>Once</li>
    <li>Twice</li>
  </ul>
);

// This is valid.
const tags = (
  <div>
    <h1>Hello World!</h1>
    <h3>This is my special list:</h3>
    <ul>
      <li>Once</li>
      <li>Twice</li>
    </ul>
  </div>
);
```

### All Tags Must Be Closed

In HTML, there are self-closing tags such as `img`, `br`, `input`, and `hr`. 

This means that either of these methods are valid:

```html
<!-- no closing / -->
<input type="text" name="city">
<!-- with closing / -->
<input type="text" name="city" />
```

Self-closing (sometimes referred to as **void**) tags can be rendered with or without a closing forward slash.

However, with JSX, _all_ tags must be closed.

The following JSX is invalid:

```javascript
const email = <input type="email">;
```

Closing the `input` tag will make the JSX valid:


```javascript
const email = <input type="email" />;
```

### JSX Map Functionality

You can use the built-in Javascript map functionality in JSX. This will allow you to iterate over a given list in your React application. 

```javascript
const list = [
  {
  title: 'Harry Potter and The Goblet of Fire',
  author: 'JK Rowling',
  genre: 'Fiction, Fantasy',
  },
  {
  title: 'Extreme Ownership: How US Navy Seals Lead and Win',
  author: 'Jocko Willink, Leif Babin',
  genre: 'Biography, Personal Narrative',
  },
];

class Example extends Component {
  // component info here
};
```
We use the curly braces to encapsulate our JSX:
```javascript
class Example extends Component {
  render(){
    return (
      <div className="Example">
        {list.map(function(item) {
          return <div> {item.title} </div>;
         })}
      </div>
  }
};

export default Example;
```
There you got it! We used JSX's map to convert a list of book details to HTML elements to the page. See more information on how to use maps below.

### More Information

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [See JSX and HTML Equivalent Side-By-Side](https://babeljs.io/repl)
- [More Info On Using Maps](https://reactjs.org/docs/lists-and-keys.html)

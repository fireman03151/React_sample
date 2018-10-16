---
title: Render State in the User Interface Another Way
localeTitle: Показывать состояние в пользовательском интерфейсе другим способом
---
## Показывать состояние в пользовательском интерфейсе другим способом

#### Подсказка 1:

```JSX
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'freeCodeCamp' 
    } 
  } 
  render() { 
    // change code below this line 
            // Remember that how you can access the property of a state. 
    // change code above this line 
    return ( 
      <div> 
        { /* change code below this line */ } 
            // Just use the const "name" inside the h1 tag. 
            // Dont forget to use JSX syntax "{ curly braces for JavaScript }". 
        { /* change code above this line */ } 
      </div> 
    ); 
  } 
 }; 
```

## Решение

```JSX
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'freeCodeCamp' 
    } 
  } 
  render() { 
    // change code below this line 
    const name = this.state.name; 
    // change code above this line 
    return ( 
      <div> 
        { /* change code below this line */ } 
          <h1>{name}</h1> 
        { /* change code above this line */ } 
      </div> 
    ); 
  } 
 }; 

```
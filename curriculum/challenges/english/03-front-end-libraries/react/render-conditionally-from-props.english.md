---
id: 5a24c314108439a4d4036188
title: Render Conditionally from Props
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
So far, you've seen how to use <code>if/else</code>, <code>&&,</code> <code>null</code> and the ternary operator (<code>condition ? expressionIfTrue : expressionIfFalse</code>) to make conditional decisions about what to render and when. However, there's one important topic left to discuss that lets you combine any or all of these concepts with another powerful React feature: props. Using props to conditionally render code is very common with React developers &mdash; that is, they use the value of a given prop to automatically make decisions about what to render.
In this challenge, you'll set up a child component to make rendering decisions based on props. You'll also use the ternary operator, but you can see how several of the other concepts that were covered in the last few challenges might be just as useful in this context.
</section>

## Instructions
<section id='instructions'>
The code editor has two components that are partially defined for you: a parent called <code>GameOfChance</code>, and a child called <code>Results</code>. They are used to create a simple game where the user presses a button to see if they win or lose.
First, you'll need a simple expression that randomly returns a different value every time it is run. You can use <code>Math.random()</code>. This method returns a value between <code>0</code> (inclusive) and <code>1</code> (exclusive) each time it is called. So for 50/50 odds, use <code>Math.random() > .5</code> in your expression. Statistically speaking, this expression will return <code>true</code> 50% of the time, and <code>false</code> the other 50%. On line 30, replace the comment with this expression to complete the variable declaration.
Now you have an expression that you can use to make a randomized decision in the code. Next you need to implement this. Render the <code>Results</code> component as a child of <code>GameOfChance</code>, and pass in <code>expression</code> as a prop called <code>fiftyFifty</code>. In the <code>Results</code> component, write a ternary expression to render the text <code>"You win!"</code> or <code>"You lose!"</code> based on the <code>fiftyFifty</code> prop that's being passed in from <code>GameOfChance</code>. Finally, make sure the <code>handleClick()</code> method is correctly counting each turn so the user knows how many times they've played. This also serves to let the user know the component has actually updated in case they win or lose twice in a row.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>GameOfChance</code> component should exist and render to the page.
    testString: assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length, 1, 'The <code>GameOfChance</code> component should exist and render to the page.');
  - text: <code>GameOfChance</code> should return a single <code>button</code> element.
    testString: assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find('button').length, 1, '<code>GameOfChance</code> should return a single <code>button</code> element.');
  - text: <code>GameOfChance</code> should return a single instance of the <code>Results</code> component, which has a prop called <code>fiftyFifty</code>.
    testString: assert(Enzyme.mount(React.createElement(GameOfChance)).find('Results').length === 1 && Enzyme.mount(React.createElement(GameOfChance)).find('Results').props().hasOwnProperty('fiftyFifty') === true, '<code>GameOfChance</code> should return a single instance of the <code>Results</code> component, which has a prop called <code>fiftyFifty</code>.');
  - text: <code>GameOfChance</code> state should be initialized with a property of <code>counter</code> set to a value of <code>1</code>.
    testString: assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).state().counter, 1, '<code>GameOfChance</code> state should be initialized with a property of <code>counter</code> set to a value of <code>1</code>.');
  - text: 'When the <code>GameOfChance</code> component is first rendered to the DOM, a <code>p</code> element should be returned with the inner text of <code>Turn: 1</code>.'
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find(''p'').text(), ''Turn: 1'', ''When the <code>GameOfChance</code> component is first rendered to the DOM, a <code>p</code> element should be returned with the inner text of <code>Turn: 1</code>.'');'
  - text: 'Each time the button is clicked, the counter state should be incremented by a value of 1, and a single <code>p</code> element should be rendered to the DOM that contains the text "Turn: N", where N is the value of the counter state.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(GameOfChance)); const simulate = () => { comp.find(''button'').simulate(''click''); };const result = () => ({ count: comp.state(''counter''), text: comp.find(''p'').text() });const _1 = () => { simulate(); return waitForIt(() => result())}; const _2 = () => { simulate(); return waitForIt(() => result())}; const _3 = () => { simulate(); return waitForIt(() => result())}; const _4 = () => { simulate(); return waitForIt(() => result())}; const _5 = () => { simulate(); return waitForIt(() => result())}; const _1_val = await _1(); const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); assert(_1_val.count === 2 && _1_val.text === ''Turn: 2'' && _2_val.count === 3 && _2_val.text === ''Turn: 3'' && _3_val.count === 4 && _3_val.text === ''Turn: 4'' && _4_val.count === 5 && _4_val.text === ''Turn: 5'' && _5_val.count === 6 && _5_val.text === ''Turn: 6'', ''Each time the button is clicked, the counter state should be incremented by a value of 1, and a single <code>p</code> element should be rendered to the DOM that contains the text "Turn: N", where N is the value of the counter state.''); }; '
  - text: When the <code>GameOfChance</code> component is first mounted to the DOM and each time the button is clicked thereafter, a single <code>h1</code> element should be returned that randomly renders either <code>You Win!</code> or <code>You Lose!</code>.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(GameOfChance)); const simulate = () => { comp.find(''button'').simulate(''click''); };const result = () => ({ h1: comp.find(''h1'').length, text: comp.find(''h1'').text() });const _1 = result(); const _2 = () => { simulate(); return waitForIt(() => result())}; const _3 = () => { simulate(); return waitForIt(() => result())}; const _4 = () => { simulate(); return waitForIt(() => result())}; const _5 = () => { simulate(); return waitForIt(() => result())}; const _6 = () => { simulate(); return waitForIt(() => result())}; const _7 = () => { simulate(); return waitForIt(() => result())}; const _8 = () => { simulate(); return waitForIt(() => result())}; const _9 = () => { simulate(); return waitForIt(() => result())}; const _10 = () => { simulate(); return waitForIt(() => result())}; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); const _6_val = await _6(); const _7_val = await _7(); const _8_val = await _8(); const _9_val = await _9(); const _10_val = await _10(); const __text = new Set([_1.text, _2_val.text, _3_val.text, _4_val.text, _5_val.text, _6_val.text, _7_val.text, _8_val.text, _9_val.text, _10_val.text]); const __h1 = new Set([_1.h1, _2_val.h1, _3_val.h1, _4_val.h1, _5_val.h1, _6_val.h1, _7_val.h1, _8_val.h1, _9_val.h1, _10_val.h1]); assert(__text.size === 2 && __h1.size === 1, ''When the <code>GameOfChance</code> component is first mounted to the DOM and each time the button is clicked thereafter, a single <code>h1</code> element should be returned that randomly renders either <code>You Win!</code> or <code>You Lose!</code>.''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        /* change code here */
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: 0 // change code here
    });
  }
  render() {
    let expression = null; // change code here
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }

        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<GameOfChance />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        this.props.fiftyFifty ?
        'You Win!' :
        'You Lose!'
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    const expression = Math.random() > .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
```

</section>

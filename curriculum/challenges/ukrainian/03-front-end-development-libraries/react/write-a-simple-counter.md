---
id: 5a24c314108439a4d4036177
title: Введення простого лічильника
challengeType: 6
forumTopicId: 301425
dashedName: write-a-simple-counter
---

# --description--

Ви можете створити більш складний компонент, що зберігає стан, комбінуючи поняття, розглянуті раніше. Вони включають ініціалізацію `state`, методи запису, які встановлюють `state`, та призначення обробників кліків для запуску цих методів.

# --instructions--

Компонент `Counter` відстежує значення `count` в `state`. Існує дві кнопки для виклику методів `increment()` та `decrement()`. Напишіть ці методи так, щоб значення лічильника було збільшено або зменшено на 1 при натисканні відповідної кнопки. Крім того, створіть метод `reset()` так, щоб при натисканні кнопки рахунок дорівнював 0.

**Примітка:** Переконайтеся, що ви не змінили `className` кнопок. Також не забудьте додати необхідні прив'язки для новостворених методів в конструктор.

# --hints--

`Counter` повинен повертатися як елемент `div`, який містить три кнопки з текстовим вмістом у такому порядку: `Increment!`, `Decrement!`, `Reset`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Counter));
    return (
      mockedComponent.find('.inc').text() === 'Increment!' &&
      mockedComponent.find('.dec').text() === 'Decrement!' &&
      mockedComponent.find('.reset').text() === 'Reset'
    );
  })()
);
```

Стан `Counter` має ініціалізуватись за допомогою властивості `count` з заданим значенням `0`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
assert(mockedComponent.find('h1').text() === 'Current Count: 0');
```

Після натискання кнопки збільшення, рахунок має збільшитись на `1`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.inc').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: 1');
```

Після натискання кнопки зменшення, рахунок має зменшитись на `1`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.dec').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: -1');
```

Після натискання кнопки перезапуску рахунок дорівнюватиме `0`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.setState({ count: 5 });
const currentCountElement = mockedComponent.find('h1');
assert(currentCountElement.text() === 'Current Count: 5');
mockedComponent.find('.reset').simulate('click');
assert(currentCountElement.text() === 'Current Count: 0');
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Counter />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  this.increment = this.increment.bind(this);
 this.decrement = this.decrement.bind(this);
 this.reset = this.reset.bind(this);
 }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

---
id: 5a24c314108439a4d4036165
title: Використання React для рендерингу вкладених компонентів
challengeType: 6
forumTopicId: 301420
dashedName: use-react-to-render-nested-components
---

# --description--

В останньому завданні представлено простий спосіб складання компонентів, та за допомогою React їх можна складати по-іншому.

Композиція компонентів - одна з потужних функцій React. У роботі з React важливо сприймати інтерфейс користувача у вигляді її компонентів, таких як App з останнього завдання. Розбийте ІК на основні структурні блоки, ці частини і будуть компонентами. Це допоможе відокремити код, що відповідає за ІК, від коду, що відповідає за обчислення логіки програми. Так можна значно спростити розробку і обслуговування складних проєктів.

# --instructions--

У редакторі коду є два функціональні компоненти - `TypesOfFruit` та `Fruits`. Візьміть компонент `TypesOfFruit` та вкладіть або *nest* його у компонент `Fruits`. Потім візьміть компонент `Fruits` та вкладіть його у компонент `TypesOfFood`. У результаті має вийти дочірній компонент, вкладений у батьківський компонент, що вкладений у власний батьківській компонент!

# --hints--

Компонент `TypesOfFood` повинен відображати одинарний елемент `div`.

```js
assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
```

Компонент `TypesOfFood` повинен відображати компонент `Fruits`.

```js
assert(
  Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type
    .name === 'Fruits'
);
```

Компонент `Fruits` повинен відображати компонент `TypesOfFruit`.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() ===
    '<h2>Fruits:</h2>'
);
```

Компонент `TypesOfFruit` повинен відображати елементи `h2` та `ul`.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() ===
    'ApplesBlueberriesStrawberriesBananas'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }

      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

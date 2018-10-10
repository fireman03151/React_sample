---
id: 5a24c314108439a4d4036172
title: Render State in the User Interface Another Way
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Показывать состояние в пользовательском интерфейсе другим способом
---

## Description
<section id="description"> Существует еще один способ доступа к <code>state</code> в компоненте. В методе <code>render()</code> перед оператором <code>return</code> вы можете напрямую писать JavaScript. Например, вы можете объявлять функции, получать доступ к данным из <code>state</code> или <code>props</code> , выполнять вычисления по этим данным и т. Д. Затем вы можете назначить любые данные переменным, к которым у вас есть доступ в операторе <code>return</code> . </section>

## Instructions
<section id="instructions"> В <code>MyComponent</code> метода отрисовки, определит <code>const</code> называется <code>name</code> и установите его равным значению имени в компоненте <code>state</code> . Поскольку вы можете писать JavaScript непосредственно в этой части кода, вам не нужно вставлять эту ссылку в фигурные скобки. Затем в возвращаемом выражении выведите это значение в тег <code>h1</code> используя <code>name</code> переменной. Помните, что в операторе return вам нужно использовать синтаксис JSX (фигурные скобки для JavaScript). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> должен иметь ключевое <code>name</code> со значением <code>freeCodeCamp</code> сохраненным в его состоянии.
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "freeCodeCamp", "<code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.");'
  - text: <code>MyComponent</code> должен отображать заголовок <code>h1</code> заключенный в один <code>div</code> .
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()), "<code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.");'
  - text: 'Представленный тег <code>h1</code> должен содержать ссылку на <code>{name}</code> .'
    testString: 'getUserInput => assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput("index")), "The rendered <code>h1</code> tag should include a reference to <code>{name}</code>.");'
  - text: 'Представленный <code>h1</code> заголовок должен содержать текст, отображаемый из состояния компонента.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === "<div><h1>TestName</h1></div>", "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state."); };'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line

    // change code above this line
    return (
      <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
      </div>
    );
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 5a24c314108439a4d4036150
title: Handle an Action in the Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Обработка действия в хранилище
---

## Description
<section id="description"> После того, как действие создано и отправлено, хранилище Redux должно знать, как реагировать на это действие. Это задача функции <code>reducer</code> . Редукторы в Redux отвечают за изменения состояния, которые происходят в ответ на действия. <code>reducer</code> принимает <code>state</code> и <code>action</code> в качестве аргументов и всегда возвращает новое <code>state</code> . Важно видеть, что это <strong>единственная</strong> роль редуктора. Он не имеет побочных эффектов - он никогда не вызывает конечную точку API (API endpoint) и никогда не имеет никаких скрытых сюрпризов. Редуктор - это просто чистая функция, которая принимает состояние и действие, а затем возвращает новое состояние. Другим ключевым принципом в Redux является то, что <code>state</code> доступно только для чтения. Другими словами, функция <code>reducer</code> должна <strong>всегда</strong> возвращать новую копию <code>state</code> и никогда не изменять состояние напрямую. Redux не обеспечивает неизменность состояния, однако вы несете ответственность за его выполнение в коде своих функций редуктора. Вы будете практиковать это в следующих упражнениях. </section>

## Instructions
<section id="instructions"> В редакторе кода записан предыдущий пример, а также каркас функции <code>reducer</code> для вас. Заполните тело функции <code>reducer</code> так, чтобы, если она получает действие типа <code>&#39;LOGIN&#39;</code> она возвращает объект состояния с <code>login</code> , установленным в <code>true</code> . В противном случае он возвращает текущее <code>state</code> . Обратите внимание, что текущее <code>state</code> и отправленное <code>action</code> передаются в редуктор, поэтому вы можете напрямую обращаться к типу действия с помощью <code>action.type</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Вызов функции <code>loginAction</code> должен возвращать объект со свойством type, установленным в строку <code>LOGIN</code> .'
    testString: 'assert(loginAction().type === "LOGIN", "Calling the function <code>loginAction</code> should return an object with type property set to the string <code>LOGIN</code>.");'
  - text: Хранилище должно быть инициализировано объектом с идентификатором <code>login</code> , установленным в значение <code>false</code> .
    testString: 'assert(store.getState().login === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: 'Отправка <code>loginAction</code> должна обновлять свойство <code>login</code> в состоянии хранилища на <code>true</code> .'
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginAction()); const afterState = store.getState(); return initialState.login === false && afterState.login === true })(), "Dispatching <code>loginAction</code> should update the <code>login</code> property in the store state to <code>true</code>.");'
  - text: 'Если действие не типа <code>LOGIN</code> , то хранилище должно вернуть текущее состояние.'
    testString: 'assert((function() { store.dispatch({type: "__TEST__ACTION__"}); let afterTest = store.getState(); return typeof afterTest === "object" && afterTest.hasOwnProperty("login") })(), "If the action is not of type <code>LOGIN</code>, the store should return the current state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // изменить код ниже этой линии

  // измените код выше этой линии
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

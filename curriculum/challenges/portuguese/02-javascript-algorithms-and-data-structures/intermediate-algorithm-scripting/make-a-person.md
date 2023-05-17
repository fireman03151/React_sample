---
id: a2f1d72d9b908d0bd72bb9f6
title: Fazer uma pessoa
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

Preencha o construtor do objeto com os seguintes métodos abaixo:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

Execute os testes para ver a saída esperada para cada método. Os métodos que recebem um argumento têm de aceitar apenas um argumento e tem de ser uma string. Estes métodos devem constituir o único meio de interação com o objeto.

# --hints--

Nenhuma propriedade deve ser adicionada. `Object.keys(bob).length` deve sempre retornar 6.

```js
assert.strictEqual(
  Object.keys((function () {
    let bob = new Person('Bob Ross');
    bob.setFirstName('Haskell');
    bob.setLastName('Curry');
    bob.setFullName('John Smith');
    return bob;
  })()).length,
  6
 );
```

`bob instanceof Pessoa` deve retornar `true`.

```js
assert.deepEqual(_test_bob instanceof Person, true);
```

`bob.firstName` deve retornar `undefined`.

```js
assert.deepEqual(_test_bob.firstName, undefined);
```

`bob.lastName` deve retornar `undefined`.

```js
assert.deepEqual(_test_bob.lastName, undefined);
```

`bob.getFirstName()` deve retornar a string `Bob`.

```js
assert.deepEqual(_test_bob.getFirstName(), 'Bob');
```

`bob.getLastName()` deve retornar a string `Ross`.

```js
assert.deepEqual(_test_bob.getLastName(), 'Ross');
```

`bob.getFullName()` deve retornar a string `Bob Ross`.

```js
assert.deepEqual(_test_bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` deve retornar a string `Haskell Ross` após `bob.setFirstName("Haskell")`.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFirstName('Haskell');
    return _test_bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` deve retornar a string `Haskell Curry` após `bob.setLastName("Curry")`.

```js
assert.strictEqual(
  (function () {
    var _bob = new Person('Haskell Ross');
    _bob.setLastName('Curry');
    return _bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFullName()` deve retornar a string `Haskell Curry` após `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFullName('Haskell Curry');
    return _test_bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` deve retornar a string `Haskell` após `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFullName('Haskell Curry');
    return _test_bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` deve retornar a string `Curry` após `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFullName('Haskell Curry');
    return _test_bob.getLastName();
  })(),
  'Curry'
);
```

# --seed--

## --after-user-code--

```js
const _test_bob = new Person('Bob Ross');
```

## --seed-contents--

```js
const Person = function(firstAndLast) {
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
```

# --solutions--

```js
const Person = function(firstAndLast) {

  let firstName, lastName;

  function updateName(str) {
    firstName = str.split(" ")[0];
    lastName = str.split(" ")[1];
  }

  updateName(firstAndLast);

  this.getFirstName = function(){
    return firstName;
  };

  this.getLastName = function(){
    return lastName;
  };

  this.getFullName = function(){
    return firstName + " " + lastName;
  };

  this.setFirstName = function(str){
    firstName = str;
  };


  this.setLastName = function(str){
    lastName = str;
  };

  this.setFullName = function(str){
    updateName(str);
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();
```

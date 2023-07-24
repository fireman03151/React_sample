---
id: 587d7dad367417b2b2512b75
title: Створення методу для об’єкта
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

Об’єкти можуть мати особливі типи властивостей, які називають <dfn>методами</dfn>.

Методи — це властивості, що є функціями. Вони додають об’єктам іншу поведінку. Ось приклад об’єкта `duck` із методом:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

У прикладі додається метод `sayName`, який є функцією, що повертає речення із назвою об’єкта `duck`. Зверніть увагу, що метод отримує доступ до властивості `name` в інструкції return за допомогою `duck.name`. У наступному завданні буде розглянуто інший спосіб це зробити.

# --instructions--

Створіть метод `sayLegs` для об’єкта `dog`. Метод має повернути речення `This dog has 4 legs.`

# --hints--

`dog.sayLegs()` має бути функцією.

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` має повернути заданий рядок, зберігаючи пунктуацію та відступи.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```

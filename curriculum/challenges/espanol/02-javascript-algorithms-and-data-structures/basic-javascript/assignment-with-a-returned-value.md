---
id: 56533eb9ac21ba0edf2244c3
title: Asignación con un valor devuelto
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

Si recuerda nuestra discusión sobre <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">el almacenamiento de valores con el operador de asignación</a>, todo lo que está a la derecha del signo de igualdad se resuelve antes de asignar el valor. Esto significa que podemos tomar el valor devuelto de una función y asignarlo a una variable.

Supongamos que hemos definido una función `sum` que suma dos números.

```js
ourSum = sum(5, 12);
```

Llamar a la función `sum` con los argumentos `5` y `12` produce un valor de retorno de `17`. Este valor de retorno se asigna a la variable `ourSum`.

# --instructions--

Llama la función `processArg` con un argumento de `7` y asigna su valor de retorno a la variable `processed`.

# --hints--

`processed` debe tener un valor de `2`

```js
assert(processed === 2);
```

Debes asignar `processArg` para `processed`

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```

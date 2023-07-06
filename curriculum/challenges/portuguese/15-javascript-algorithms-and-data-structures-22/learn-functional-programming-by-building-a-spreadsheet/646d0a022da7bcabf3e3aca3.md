---
id: 646d0a022da7bcabf3e3aca3
title: Passo 44
challengeType: 0
dashedName: step-44
---

# --description--

O conceito de retorno de uma função dentro de outra função é chamado de <dfn>currying</dfn>. Essa abordagem permite que você crie uma variável que contém uma função para ser chamada mais tarde, mas com uma referência aos parâmetros da chamada da função externa.

Por exemplo:

```js
const innerOne = elemValue(1);
const final = innerOne("A");
```

`innerOne` seria a função `inner` (interna), com `num` definido como `1` e `final` teria o valor da célula com o `id` `A1`. Isso é possível porque as funções têm acesso a todas as variáveis declaradas no momento de sua criação. Isso é chamado de <dfn>closure</dfn>.

Você terá mais prática com isso. Declare uma função chamada `addCharacters`, que receba um parâmetro `character1`.

# --hints--

Você deve declarar uma variável `addCharacters`.

```js
assert.match(code, /const\s*evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*\(?\s*id\s*\)?\s*=>\s*cells\.find\(\s*\(?\s*cell\s*\)?\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig);?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\);?\s*const\s+elemValue\s*=\s*\(?\s*num\s*\)?\s*=>\s*\{\s*const\s+inner\s*=\s*\(?\s*character\s*\)?\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\);?\s*};?\s*return\s+inner;?\s*\}\s*(?:var|let|const)\s+addCharacters/);
```

Você deve usar `const` para declarar a variável `addCharacters`.

```js
assert.match(code, /const\s*evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*\(?\s*id\s*\)?\s*=>\s*cells\.find\(\s*\(?\s*cell\s*\)?\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig);?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\);?\s*const\s+elemValue\s*=\s*\(?\s*num\s*\)?\s*=>\s*\{\s*const\s+inner\s*=\s*\(?\s*character\s*\)?\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\);?\s*};?\s*return\s+inner;?\s*\}\s*const\s+addCharacters/);
```

A variável `addCharacters` deve ser uma arrow function.

```js
assert.match(code, /const\s*evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*\(?\s*id\s*\)?\s*=>\s*cells\.find\(\s*\(?\s*cell\s*\)?\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig);?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\);?\s*const\s+elemValue\s*=\s*\(?\s*num\s*\)?\s*=>\s*\{\s*const\s+inner\s*=\s*\(?\s*character\s*\)?\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\);?\s*};?\s*return\s+inner;?\s*\}\s*const\s+addCharacters\s*=\s*\(?.*\)?\s*=>/);
```

A função `addCharacters` não deve usar um retorno implícito.

```js
assert.match(code, /const\s*evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*\(?\s*id\s*\)?\s*=>\s*cells\.find\(\s*\(?\s*cell\s*\)?\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig);?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\);?\s*const\s+elemValue\s*=\s*\(?\s*num\s*\)?\s*=>\s*\{\s*const\s+inner\s*=\s*\(?\s*character\s*\)?\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\);?\s*};?\s*return\s+inner;?\s*\}\s*const\s+addCharacters\s*=\s*\(?.*\)?\s*=>\s*\{/);
```

A função `addCharacters` deve ter um parâmetro `character1`.

```js
assert.match(code, /const\s*evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*\(?\s*id\s*\)?\s*=>\s*cells\.find\(\s*\(?\s*cell\s*\)?\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig);?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\);?\s*const\s+elemValue\s*=\s*\(?\s*num\s*\)?\s*=>\s*\{\s*const\s+inner\s*=\s*\(?\s*character\s*\)?\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\);?\s*};?\s*return\s+inner;?\s*\}\s*const\s+addCharacters\s*=\s*\(?\s*character1\s*\)?\s*=>/);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Functional Programming Spreadsheet</title>
  </head>
  <body>
    <div id="container">
      <div></div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

```css
#container {
  display: grid;
  grid-template-columns: 50px repeat(10, 200px);
  grid-template-rows: repeat(11, 30px);
}

.label {
  background-color: lightgray;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
}
```

```js
const isEven = num => num % 2 === 0;
const sum = nums => nums.reduce((acc, el) => acc + el, 0);
const average = nums => sum(nums) / nums.length;

const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
}

const spreadsheetFunctions = {
  sum,
  average,
  median
}

const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));

--fcc-editable-region--
const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => {
    const inner = character => {
      return idToText(character + num);
    }
    return inner;
  }

}
--fcc-editable-region--

window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  }
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach(number => {
    createLabel(number);
    letters.forEach(letter => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      input.onchange = update;
      container.appendChild(input);
    })
  })
}

const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith('=')) {

  }
}
```

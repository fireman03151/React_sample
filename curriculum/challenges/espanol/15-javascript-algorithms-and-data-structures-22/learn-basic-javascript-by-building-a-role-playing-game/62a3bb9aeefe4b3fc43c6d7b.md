---
id: 62a3bb9aeefe4b3fc43c6d7b
title: Paso 31
challengeType: 0
dashedName: step-31
---

# --description--

`button1` is a variable that is not going to be reassigned. If you are not going to assign a new value to a variable, it is best practice to use the `const` keyword to declare it instead of the `let` keyword. This will tell JavaScript to throw an error if you accidentally reassign it.

Change your `button1` variable to be declared with the `const` keyword.

# --hints--

Your `button1` variable should be declared with `const`.

```js
assert.match(code, /const button1/);
```

Your `button1` variable should still have the value of your `#button1` element.

```js
assert.deepEqual(button1, document.querySelector("#button1"));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./styles.css">
    <title>RPG - Dragon Repeller</title>
</head>
<body>
    <div id="game">
        <div id="stats">
            <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
            <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
            <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
        </div>
        <div id="controls">
            <button id="button1">Go to store</button>
            <button id="button2">Go to cave</button>
            <button id="button3">Fight dragon</button>
        </div>
        <div id="monsterStats">
            <span class="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
            <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
        </div>
        <div id="text">
            Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```

```css
body {
    background-color: darkblue;
}

#text {
    background-color: black;
    color: white;
    padding: 10px;
}

#game {
    max-width: 500px;
    max-height: 400px;
    background-color: lightgray;
    color: white;
    margin: 0 auto;
    padding: 10px;
}

#controls, #stats {
    border: 1px solid black;
    padding: 5px;
    color: black;
}

#monsterStats {
    display: none;
    border: 1px solid black;
    padding: 5px;
    color: white;
    background-color: red;
}

.stat {
    padding-right: 10px;
}
```

```js
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

--fcc-editable-region--
let button1 = document.querySelector("#button1");
--fcc-editable-region--
```

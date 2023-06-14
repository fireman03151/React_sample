---
id: 612eaf56b7ba3257fdbfb0db
title: Hatua ya 21
challengeType: 0
dashedName: step-21
---

# --description--

Piano inahitaji nembo ya freeCodeCamp ili kuifanya iwe rasmi.

Ongeza kipengele cha `img` kabla ya kipengele chako cha `.keys`. Ipe `img` `class` ya `logo`, na uweke `src` kuwa `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`. Ipe maandishi ya `alt` ya `freeCodeCamp Logo`.

# --hints--

Unapaswa kuongeza kipengele kipya cha `img`.

```js
assert(document.querySelectorAll('img')?.length === 1);
```

Kipengele chako cha `img` kinapaswa kuja kabla ya kipengele chako cha kwanza cha `.key`.

```js
const img = document.querySelector('img');
assert(img?.nextElementSibling?.className === 'keys');
assert(img?.previousElementSibling === null);
```

Kipengee chako kipya cha `img` kinapaswa kuwa na `class` ya `logo`.

```js
const img = document.querySelector('img');
assert(img?.className === 'logo');
```

Kipengee chako cha `img` kinapaswa kuwa na `src` iliyowekwa kuwa `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`.

```js
const img = document.querySelector('img');
assert(img?.getAttribute('src') === 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg');
```

Kipengee chako cha `img` kinapaswa kuwa na sifa ya `alt` iliyowekwa kuwa `freeCodeCamp Logo`.

```js
assert(document.querySelector('img')?.getAttribute('alt')?.toLowerCase() === 'freecodecamp logo');
```

Kumbuka kuwa tahajia na uandishi sahihi ni muhimu.

```js
assert(document.querySelector('img')?.getAttribute('alt') === 'freeCodeCamp Logo');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    --fcc-editable-region--
    <div id="piano">
      <div class="keys">
    --fcc-editable-region--
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
      </div>
    </div>
  </body>
</html>
```

```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

#piano {
  background-color: #00471b;
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
}

.keys {
  background-color: #040404;
  width: 949px;
  height: 180px;
  padding-left: 2px;
}

.key {
  background-color: #ffffff;
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
}

.key.black--key::after {
  background-color: #1d1e22;
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
}
```

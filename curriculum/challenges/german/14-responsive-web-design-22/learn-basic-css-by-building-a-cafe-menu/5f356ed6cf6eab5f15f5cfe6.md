---
id: 5f356ed6cf6eab5f15f5cfe6
title: Schritt 20
challengeType: 0
dashedName: step-20
---

# --description--

Das `div`-Element wird im Gegensatz zu anderen Inhaltselementen, die du bisher verwendet hast, hauptsächlich für Layoutzwecke verwendet. Füge ein `div`-Element im `body`-Element hinzu und verschiebe dann alle anderen Elemente innerhalb des neuen `div`.

Inside the opening `div` tag, add the `id` attribute with a value of `menu`.

# --hints--

Your opening `<div>` tag should have an `id` attribute set to `menu`.

```js
const div = $('div')[0];
assert(div.id === 'menu');
```

You should have a closing `</div>` tag.

```js
assert(code.match(/<\/div>/i));
```

You should not change your existing `body` element. Make sure you did not delete the closing tag.

```js
assert($('body').length === 1);
```

Your `div` tag should be nested in the `body`.

```js
const div = $('div')[0];
assert(div.parentElement.tagName === 'BODY');
```


# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cafe Menu</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
--fcc-editable-region--
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```


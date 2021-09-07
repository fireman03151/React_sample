---
id: 60b69a66b6ddb80858c51579
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

Within your `head` element, add a `meta` tag with the `charset` attribute set to `utf-8`. Also add a `title` element with the text `freeCodeCamp Picasso Painting`.

# --hints--

You should add exactly one `meta` element.

```js
assert(document.querySelectorAll('meta').length === 1);
```

Your `meta` element should have a `charset` attribute.

```js
assert(document.querySelector('meta')?.getAttribute('charset'));
```

Your `charset` attribute should be set to `utf-8`.

```js
assert(document.querySelector('meta')?.getAttribute('charset') === 'utf-8');
```

You should add exactly one `title` element.

```js
assert(document.querySelectorAll('title').length === 1);
```

Your `title` element should have the text `freeCodeCamp Picasso Painting`. Note that spelling and casing matter.

```js
assert(document.querySelector('title')?.innerText === 'freeCodeCamp Picasso Painting');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
  --fcc-editable-region--

  --fcc-editable-region--
  </head>
  <body>
  </body>
</html>
```  

```css

```

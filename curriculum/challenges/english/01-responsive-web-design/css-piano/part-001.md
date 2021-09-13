---
id: 612e6afc009b450a437940a1
title: Part 1
challengeType: 0
dashedName: part-1
---

# --description--

Begin with the basic HTML structure. Add a `DOCTYPE` declaration and `html`, `head`, `body`, and `title` elements. Set the `title` to `Responsive Web Design Piano`.

# --hints--

Your code should contain the `DOCTYPE` reference.

```js
assert(code.match(/<!DOCTYPE/gi));
```

You should include a space after the `DOCTYPE` reference.

```js
assert(code.match(/<!DOCTYPE\s+/gi));
```

You should define the document type to be `html`.

```js
assert(code.match(/<!DOCTYPE\s+html/gi));
```

You should close the `DOCTYPE` declaration with a `>` after the type.

```js
assert(code.match(/<!DOCTYPE\s+html\s*>/gi));
```

Your `html` element should have an opening tag.

```js
assert(code.match(/<html\s*>/gi));
```

Your `html` element should have a closing tag.

```js
assert(code.match(/<\/html\s*>/));
```

Your `html` element should be below the `DOCTYPE` declaration.

```js
assert(code.match(/(?<!<html\s*>)<!DOCTYPE\s+html\s*>/gi));
```

You should have an opening `head` tag.

```js
assert(code.match(/<head\s*>/i));
```

You should have a closing `head` tag.

```js
assert(code.match(/<\/head\s*>/i));
```

You should have an opening `body` tag.

```js
assert(code.match(/<body\s*>/i));
```

You should have a closing `body` tag.

```js
assert(code.match(/<\/body\s*>/i));
```

The `head` and `body` elements should be siblings.

```js
assert(document.querySelector('head')?.nextElementSibling?.localName === 'body');
```

The `head` element should be within the `html` element.

```js
assert([...document.querySelector('html')?.children].some(x => x?.localName === 'head'));
```

The `body` element should be within the `html` element.

```js
assert([...document.querySelector('html')?.children].some(x => x?.localName === 'body'));
```

Your code should have a `title` element.

```js
const title = document.querySelector('title');
assert.exists(title);
```

Your project should have a title of `Responsive Web Design Piano`.

```js
const title = document.querySelector('title');
assert.equal(title?.text?.trim()?.toLowerCase(), 'responsive web design piano')
```

Remember, the casing and spelling matter for the title.

```js
const title = document.querySelector('title');
assert.equal(title?.text?.trim(), 'Responsive Web Design Piano');
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--

--fcc-editable-region--
```

```css

```

---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cb6k8Cb'
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

You can nest links within other text elements.

```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```

Let's break down the example: Normal text is wrapped in the `p` element:  
`<p> Here's a ... for you to follow. </p>` Next is the *anchor* element `<a>` (which requires a closing tag `</a>`):  
`<a> ... </a>` `target` is an anchor tag attribute that specifies where to open the link and the value `"_blank"` specifies to open the link in a new tab `href` is an anchor tag attribute that contains the URL address of the link:  
`<a href="http://freecodecamp.org"> ... </a>` The text, **"link to freecodecamp.org"**, within the `a` element called `anchor text`, will display a link to click:  
`<a href=" ... ">link to freecodecamp.org</a>` The final output of the example will look like this:  

Here's a [link to freecodecamp.org](http://freecodecamp.org) for you to follow.

# --instructions--

Nest the existing `a` element within a new `p` element. The new paragraph should have text that says "View more cat photos", where "cat photos" is a link, and the rest is plain text.

# --hints--

You should have an `a` element that links to "`https://freecatphotoapp.com`".

```js
assert(
  $('a[href="https://freecatphotoapp.com"]').length > 0 ||
    $('a[href="http://www.freecatphotoapp.com"]').length > 0
);
```

Your `a` element should have the anchor text of "cat photos"

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

You should create a new `p` element around your `a` element. There should be at least 3 total `p` tags in your HTML code.

```js
assert($('p') && $('p').length > 2);
```

Your `a` element should be nested within your new `p` element.

```js
assert(
  $('a[href="https://freecatphotoapp.com"]').parent().is('p') ||
    $('a[href="http://www.freecatphotoapp.com"]').parent().is('p')
);
```

Your `p` element should have the text "View more " (with a space after it).

```js
assert(
  $('a[href="https://freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi) ||
    $('a[href="http://www.freecatphotoapp.com"]')
      .parent()
      .text()
      .match(/View\smore\s/gi)
);
```

Your `a` element should <em>not</em> have the text "View more".

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

Each of your `p` elements should have a closing tag.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Each of your `a` elements should have a closing tag.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a></p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

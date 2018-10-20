---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c4Ep9Am'
---

## Description
<section id='description'>
HTML5 introduces more descriptive HTML tags. These include <code>header</code>, <code>footer</code>, <code>nav</code>, <code>video</code>, <code>article</code>, <code>section</code> and others.
These tags make your HTML easier to read, and also help with Search Engine Optimization (SEO) and accessibility.
The <code>main</code> HTML5 tag helps search engines and other developers find the main content of your page.
<strong>Note</strong><br>Many of the new HTML5 tags and their benefits are covered in the Applied Accessibility section.
</section>

## Instructions
<section id='instructions'>
Create a second <code>p</code> element after the existing <code>p</code> element with the following kitty ipsum text: <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code>
Wrap the paragraphs with an opening and closing <code>main</code> tag.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You need 2 <code>p</code> elements with Kitty Ipsum text.
    testString: assert($("p").length > 1, 'You need 2 <code>p</code> elements with Kitty Ipsum text.');
  - text: Make sure each of your <code>p</code> elements has a closing tag.
    testString: assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, 'Make sure each of your <code>p</code> elements has a closing tag.');
  - text: Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.
    testString: assert.isTrue((/Purr\s+jump\s+eat/gi).test($("p").text()), 'Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.');
  - text: Your code should have one <code>main</code> element.
    testString: assert($('main').length === 1, 'Your code should have one <code>main</code> element.');
  - text: The <code>main</code> element should have two paragraph elements as children.
    testString: assert($("main").children("p").length === 2, 'The <code>main</code> element should have two paragraph elements as children.');
  - text: The opening <code>main</code> tag should come before the first paragraph tag.
    testString: assert(code.match(/<main>\s*?<p>/g), 'The opening <code>main</code> tag should come before the first paragraph tag.');
  - text: The closing <code>main</code> tag should come after the second closing paragraph tag.
    testString: assert(code.match(/<\/p>\s*?<\/main>/g), 'The closing <code>main</code> tag should come after the second closing paragraph tag.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

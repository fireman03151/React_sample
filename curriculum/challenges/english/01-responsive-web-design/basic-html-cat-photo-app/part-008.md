---
id: 5dc24073f86c76b9248c6ebb
title: Part 8
challengeType: 0
---

## Description
<section id='description'>

HTML <dfn>attributes</dfn> are special words used inside the opening tag of an element to control the element's behavior. The `src` attribute in an `img` element specifies the image's URL (where the image is located). An example of an `img` element using an `src` attribute: `<img src="https://www.your-image-source.com/your-image.jpg">`.

Add an `src` attribute to the existing `img` element that is set to the following URL: `https://bit.ly/fcc-relaxing-cat`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have an `img` element. You may have removed the `img` element or you have not surrounded the `src` attribute's value with quotes.
    testString: assert( document.querySelector('img') );
  - text: Your `img` element should have an `src` attribute. You have either omitted the attribute or have a typo. Make sure there is a space between the element name and the attribute name.
    testString: assert( document.querySelector('img').src );
  - text: Your `img` element's `src` attribute should be set to 'https://bit.ly/fcc-relaxing-cat'. You have either omitted the URL or have a typo. The case of the URL is important.
    testString: assert( document.querySelector('img').src === 'https://bit.ly/fcc-relaxing-cat' );
  - text: Although you have set the `img` element's `src` to the correct URL, it is recommended to always surround the value of an attribute with quotation marks.
    testString: assert( !/\<img\s+src\s*=\s*https:\/\/bit\.ly\/fcc-relaxing-cat/.test(code) );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
      --fcc-editable-region--
      <img>
      --fcc-editable-region--
    </main>
  </body>
</html>
```

</div>
</section>

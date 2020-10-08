---
id: 5efb23e70dc218d6c85f89b1
title: Part 37
challengeType: 0
---

## Description
<section id='description'>

There are many kinds of inputs you can create using the `type` attribute. You can easily create a password field, reset button, or a control to let users select a file from their computer.

Create a text field to get text input from a user by adding the `type` attribute with the value `text` to the `input` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You have either deleted your `input` element or it has invalid syntax. If you have added an attributes, make sure their values are surrounded by quotation marks.
    testString: assert( $('input').length );
  - text: Your `form` element should only contain the `input` element. Remove any extra HTML elements or text between the `form` element's tags.
    testString: assert( $('form')[0].children.length === 1 && $('form')[0].innerText.trim().length === 0 );
  - text: Your `input` element does not have a `type` attribute. with the value `text`. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( $('input')[0].hasAttribute('type') );
  - text: Your `input` element should have a `type` attribute with the value `text`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: assert( $('input')[0].getAttribute('type').replace(/\s+/g, ' ').match(/^text$/i) );
  - text: Although you have set the `input` element's `type` attribute to the `text`, it is recommended to always surround the value of an attribute with quotation marks.
    testString: assert( !/\<input\s+type\s*=\s*text/.test(code) );

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
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
        <a href="https://freecatphotoapp.com"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://bit.ly/fcc-lasagna" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        <figure>
          <img src="https://bit.ly/fcc-cats" alt="Five cats looking around a field.">
          <figcaption>Cats <strong>hate</strong> other cats.</figcaption>  
        </figure>
      </section>
      <section>
        <h2>Cat Form</h2>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
          --fcc-editable-region--
          <input>
          --fcc-editable-region--
        </form>
      </section>
    </main>
  </body>
</html>
```

</div>
</section>

---
id: bad87fee1348bd9aedf08845
title: Use a span to Target Inline Elements
challengeType: 0
---

## Description
<section id='description'>
You can use spans to create inline elements. Remember when we used the <code>btn-block</code> class to make the button fill the entire row?
<button class='btn' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>normal button</button>
<button class='btn btn-block' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>btn-block button</button>
That illustrates the difference between an "inline" element and a "block" element.
By using the inline <code>span</code> element, you can put several elements on the same line, and even style different parts of the same line differently.
Nest the word "love" in your "Things cats love" element below within a <code>span</code> element. Then give that <code>span</code> the class <code>text-danger</code> to make the text red.
Here's how you would do this with the "Top 3 things cats hate" element:
<code>&#60;p&#62;Top 3 things cats &#60;span class="text-danger"&#62;hate:&#60;/span&#62;&#60;/p&#62;</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>span</code> element should be inside your <code>p</code> element.
    testString: assert($("p span") && $("p span").length > 0, 'Your <code>span</code> element should be inside your <code>p</code> element.');
  - text: Your <code>span</code> element should have just the text <code>love</code>.
    testString: assert($("p span") && $("p span").text().match(/love/i) && !$("p span").text().match(/Things cats/i), 'Your <code>span</code> element should have just the text <code>love</code>.');
  - text: Your <code>span</code> element should have class <code>text-danger</code>.
    testString: assert($("span").hasClass("text-danger"), 'Your <code>span</code> element should have class <code>text-danger</code>.');
  - text: Make sure your <code>span</code> element has a closing tag.
    testString: assert(code.match(/<\/span>/g) && code.match(/<span/g) && code.match(/<\/span>/g).length === code.match(/<span/g).length, 'Make sure your <code>span</code> element has a closing tag.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love</span>:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```
</section>

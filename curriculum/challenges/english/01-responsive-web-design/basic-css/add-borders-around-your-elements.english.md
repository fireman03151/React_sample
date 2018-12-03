---
id: bad87fee1348bd9bedf08813
title: Add Borders Around Your Elements
challengeType: 0
guideUrl: 'https://www.freecodecamp.org/guide/certificates/add-borders-around-your-elements'
videoUrl: 'https://scrimba.com/c/c2MvnHZ'
---

## Description
<section id='description'>
CSS borders have properties like <code>style</code>, <code>color</code> and <code>width</code>.
For example, if we wanted to create a red, 5 pixel border around an HTML element, we could use this class:
<blockquote>&#60;style&#62;<br>&nbsp;&nbsp;.thin-red-border {<br>&nbsp;&nbsp;&nbsp;&nbsp;border-color: red;<br>&nbsp;&nbsp;&nbsp;&nbsp;border-width: 5px;<br>&nbsp;&nbsp;&nbsp;&nbsp;border-style: solid;<br>&nbsp;&nbsp;}<br>&#60;/style&#62;</blockquote>
</section>

## Instructions
<section id='instructions'>
Create a class called <code>thick-green-border</code>. This class should add a 10px, solid, green border around an HTML element. Apply the class to your cat photo.
Remember that you can apply multiple classes to an element using its <code>class</code> attribute, by separating each class name with a space. For example:
<code>&lt;img class="class1 class2"&gt;</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> element should have the class <code>smaller-image</code>.
    testString: assert($("img").hasClass("smaller-image"), 'Your <code>img</code> element should have the class <code>smaller-image</code>.');
  - text: Your <code>img</code> element should have the class <code>thick-green-border</code>.
    testString: assert($("img").hasClass("thick-green-border"), 'Your <code>img</code> element should have the class <code>thick-green-border</code>.');
  - text: Give your image a border width of <code>10px</code>.
    testString: assert($("img").hasClass("thick-green-border") && parseInt($("img").css("border-top-width"), 10) >= 8 && parseInt($("img").css("border-top-width"), 10) <= 12, 'Give your image a border width of <code>10px</code>.');
  - text: Give your image a border style of <code>solid</code>.
    testString: assert($("img").css("border-right-style") === "solid", 'Give your image a border style of <code>solid</code>.');
  - text: The border around your <code>img</code> element should be green.
    testString: assert($("img").css("border-left-color") === "rgb(0, 128, 0)", 'The border around your <code>img</code> element should be green.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</div>

</section>

## Solution
<section id='solution'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .smaller-image {
    width: 100px;
  }

  .thick-green-border {
    border-width: 10px;
    border-color: green;
    border-style: solid;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>

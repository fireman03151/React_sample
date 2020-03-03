---
id: bad87fee1348bd9aec908845
title: Line up Form Elements Responsively with Bootstrap
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: 使用Bootstrap响应表单元素
---

## Description
<section id="description">现在让我们将您的表单<code>input</code>和提交<code>button</code>放在同一行。我们将做到这一点，我们以前有相同的方式：通过使用<code>div</code>元素带班<code>row</code> ，和其他<code>div</code>使用中它的元素<code>col-xs-*</code>类。将表单的文本<code>input</code>和提交<code>button</code>嵌套在具有类<code>row</code>的<code>div</code> 。将表单的文本<code>input</code>嵌套在具有<code>col-xs-7</code>类的div中。将表单的提交<code>button</code> <code>div</code>具有类<code>col-xs-5</code>的<code>div</code> 。这是我们目前为Cat Photo App所做的最后一项挑战。我们希望您喜欢学习Font Awesome，Bootstrap和响应式设计！ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将表单提交按钮和文本输入嵌套在带有类<code>row</code>的div中。
    testString: assert($("div.row:has(input[type=\"text\"])").length > 0 &&  $("div.row:has(button[type=\"submit\"])").length > 0);
  - text: 将表单文本输入嵌套在具有类<code>col-xs-7</code>的div中。
    testString: assert($("div.col-xs-7:has(input[type=\"text\"])").length > 0);
  - text: 将表单提交按钮嵌套在具有类<code>col-xs-5</code>的div中。
    testString: assert($("div.col-xs-5:has(button[type=\"submit\"])").length > 0);
  - text: 确保每个<code>div</code>元素都有一个结束标记。
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);

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
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
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
    <div class="row">
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
      </div>
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Loving</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Lazy</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Crazy</label>
      </div>
    </div>
    <input type="text" class="form-control" placeholder="cat photo URL" required>
    <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
  </form>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: bad87fee1348bd9aec908854
title: Позначення Bootstrap Wells
challengeType: 0
forumTopicId: 18223
dashedName: label-bootstrap-wells
---

# --description--

Задля ясності, позначте обидва wells їхніми id.

Над елементом left-well, усередині його елементу `col-xs-6` `div`, додайте елемент `h4` з текстом `#left-well`.

Над елементом right-well, усередині його елементу `col-xs-6` `div`, додайте елемент `h4` з текстом `#right-well`.

# --hints--

Необхідно додати елемент `h4` до кожного з елементів `<div class="col-xs-6">`.

```js
assert(
  $('.col-xs-6').children('h4') && $('.col-xs-6').children('h4').length > 1
);
```

Один елемент `h4` повинен містити текст `#left-well`.

```js
assert(new RegExp('#left-well', 'gi').test($('h4').text()));
```

Один елемент `h4` повинен містити текст `#right-well`.

```js
assert(new RegExp('#right-well', 'gi').test($('h4').text()));
```

Усі елементи `h4` повинні містити кінцеві теґи.

```js
assert(
  code.match(/<\/h4>/g) &&
    code.match(/<h4/g) &&
    code.match(/<\/h4>/g).length === code.match(/<h4/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

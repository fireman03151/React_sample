---
id: bad87fee1348bd9bedc08826
title: 使用 jQuery 配合元素选择器选择元素
challengeType: 6
forumTopicId: 18319
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-html-elements-with-selectors-using-jquery
---

# --description--

接下来我们学习`document ready function`。

首先，我们完成第一个 jQuery 语句。所有的 jQuery 函数以`$`开头，这个符号通常被称为`美元符号（dollar sign operator）`或`bling`。

jQuery 通常选取并操作带有`选择器（selector）`的 HTML 标签。

例如，如果要所有`button`有弹性的动画效果，只需在`document ready function`中添加如下代码即可：

`$("button").addClass("animated bounce");`

请注意，为了能在编辑器里直接使用，我们已经为你在后台引入了 jQuery 库和 Animate.css 库。因此，你只需要通过 jQuery 给`button`元素添加`bounce`类就可以了。

# --hints--

用 jQuery 的`addClass()`方法给`button`标签添加`animated`和`bounce`类。

```js
assert($('button').hasClass('animated') && $('button').hasClass('bounce'));
```

仅用 jQuery 给标签添加颜色。

```js
assert(!code.match(/class.*animated/g));
```

jQuery 代码应该放在`$(document).ready();`函数里。

```js
assert(
  code.match(
    /\$\(document\)\.ready\(function.*(\s|\n)*.*button.*.addClass.*\);/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {

  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

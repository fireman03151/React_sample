---
id: 5a9036ee38fddaf9a66b5d37
title: 使用 grid-gap 为网格添加间距
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 1301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` 属性是前两个挑战中出现的 `grid-row-gap` 和 `grid-column-gap` 的简写属性，它更方便使用。如果 `grid-gap` 只有一个值，那么这个值表示行与行之间、列与列之间的间距均为这个值。如果 `grid-gap` 有两个值，那么第一个值表示行间距，第二个值表示列间距。

# --instructions--

请使用 `grid-gap` 属性设置行间距为 `10px`、列间距为 `20px`。

# --hints--

class 为 `container` 的元素应具有 `grid-gap` 属性，并将行间距设置为 `10px`，列间距设置为 `20px`。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>
<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-gap: 10px 20px;}</style>
```

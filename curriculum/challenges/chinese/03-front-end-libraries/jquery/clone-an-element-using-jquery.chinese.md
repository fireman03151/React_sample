---
id: bad87fee1348bd9aed508826
title: Clone an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery克隆元素
---

## Description
<section id="description">除了移动元素，您还可以将它们从一个地方复制到另一个地方。 jQuery有一个名为<code>clone()</code>的函数，它可以复制一个元素。例如，如果我们想将<code>target2</code>从我们的<code>left-well</code>复制到<code>right-well</code> ，我们将使用： <code>$(&quot;#target2&quot;).clone().appendTo(&quot;#right-well&quot;);</code>您是否注意到这涉及将两个jQuery函数粘在一起？这称为<code>function chaining</code> ，它是使用jQuery完成任务的便捷方式。克隆你的<code>target5</code>元素并将其附加到你的<code>left-well</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>target5</code>元素应该在你的<code>right-well</code> 。
    testString: assert($("#right-well").children("#target5").length > 0);
  - text: 您的<code>target5</code>元素的副本也应该在您的<code>left-well</code> 。
    testString: assert($("#left-well").children("#target5").length > 0);
  - text: 只使用jQuery来移动这些元素。
    testString: assert(!code.match(/class.*animated/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");

  });
</script>

<!-- Only change code above this line. -->

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

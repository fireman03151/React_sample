---
id: bd7168d8c242eddfaeb5bd13
title: 用条形图可视化数据
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**目标：** 在 [CodePen.io](https://codepen.io) 上实现一个功能类似 <https://codepen.io/freeCodeCamp/full/GrZVaM> 的 App。

在满足以下[需求](https://en.wikipedia.org/wiki/User_story)并能通过所有测试的前提下，你可以根据自己的喜好来美化你的 app。

你可以使用 HTML、JavaScript、CSS、以及基于 svg 的 D3 可视化库来完成这个挑战。该任务需要使用 D3 的坐标轴属性生成坐标轴，这个属性会自动生成沿轴的刻度。这些刻度是通过 D3 测试所必需的，因为它们的位置是用来确定图表元素的对齐方式。你可以在这里 <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> 获取关于生成坐标轴的信息。每次测试查询的元素都必须是非虚拟 DOM。 如果你使用了前端框架（例如 Vue），那么对于动态的内容测试结果可能不准确。我们希望最终能够兼容这些框架，但 D3 项目目前还不支持它们。

**需求 #1：** 我的图表应该有一个具有`id="title"`属性的标题。

**需求 #2：** 我的图表应该有一个`g`元素作为 x 轴，并具有`id="x-axis"`属性。

**需求 #3：** 我的图表应该有一个`g`元素作为 y 轴，并具有`id="y-axis"`属性。

**需求 #4：** 两个轴都应包含多个刻度标签，每个标签具有`class="tick"`属性

**需求 #5：** 在我的图表里，每个数据点都应该有一个具有`class="bar"`属性的`rect`元素来展示数据。

**需求 #6：** 每一栏应该具有包含日期的`data-date`属性以及包含 GDP 值的`data-gdp`属性。

**需求 #7：** 条形元素的`data-date`属性应与提供的数据的顺序相匹配。

**需求 #8：** 条形元素的`data-gdp`属性应与提供的数据的顺序相匹配。

**需求 #9：** 每个条形元素的高度应准确地表示其数据所对应的 GDP 值。

**需求 #10：** `data-date`属性和它对应的条形元素应与 x 轴上的相应的值对齐。

**需求 #11：** `data-gdp`属性和它对应的条形元素应与 y 轴上的相应的值对齐。

**需求 #12：** 我可以将鼠标悬停在某个区域上，并查看具有`id="tooltip"`属性的提示框，它会显示有关该区域的更多信息。

**需求 #13：** 我的提示框应该有一个`data-date`属性，它对应了当前激活区域的`data-date`属性。

以下是完成此项目所需的数据：`https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

你可以 fork [这个 CodePen pen 项目](https://codepen.io/freeCodeCamp/pen/MJjpwO)来构建你的项目。或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://gitcdn.link/repo/freeCodeCamp/testable-projects-fcc/master/build/bundle.js`.

一旦你完成了本项目并且该项目所有测试运行通过，请提交项目的 URL。

# --solutions--

```js
// solution required
```

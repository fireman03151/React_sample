---
title: CSS3 Backgrounds
---
## CSS3 Backgrounds

The CSS `background` shorthand property is used to define multiple properties like :

`background-color`, `background-image`, `background-repeat`, `background-attachment` and `background-position`

### Background Color

The `background-color` property specifies the background color of an element.

```css
  background-color : #F00;
```

### Background Image

The `background-image` property specifies an image to use as background of an element.

By default, the image repeats itself to cover the entire surface of the element.

```css
 background-image: url("GitHub-Mark.png");
```

### Background Image - Repetition

By default, the `background-image` property repeats on the X and Y axis, to cover the area of its container.
If you want to set an axis, like X axis, use `background-repeat` property type:

```css
  background-image: url("GitHub-Mark.png");
  background-repeat: repeat-x;
```

But sometimes you don't want to have your background image cover the whole surface, so you've to specify it by typing:

```css
  background-image: url("GitHub-Mark.png");
  background-repeat: no-repeat;
```

### Background Image - Position

You can specify the position of the background by typing :

```css
  background-image: url("GitHub-Mark.png");
  background-repeat: no-repeat;
  background-position : left bottom;
```

It will set your background image at the bottom left of the element.

### Background Image - Fixed Position

If you do not want the background image to scroll with the rest of the page, use the `background-attachement` property:

```css
  background-image: url("GitHub-Mark.png");
  background-repeat: no-repeat;
  background-position: left bottom;
  background-attachment: fixed;
```

### Background Attachment

The background-attachment property sets whether a background image will scroll with the rest of the page, or would remain fixed.

```css
   background-image: url("GitHub-Mark.png");
   background-repeat: no-repeat;
   background-attachment: fixed;
```

Valid Property Values: scroll, fixed, initial, local, inherit


### Shorthand property

You can pass all the properties in one super-property:

```css
  background: #F00 url("GitHub-Mark.png") no-repeat fixed left bottom;
```

When you use this shorthand property, it must be in this order:

1. Background color
2. Background image
3. Background repeat
4. Background attachment
5. Background position

It doesn't matter if one property is missing, so long as the order is maintained:

```css
  background: url("GitHub-Mark.png") no-repeat left bottom;
```

This will work even if the color and the attachment are missing.


### Multiple Backgrounds

You can pass in multple background images and set their properties simultaneously.

```css
   background-image: url("firstimage.jpg"), url("secondimage.jpg");
   background-repeat: no-repeat, repeat;
   background-position: left bottom, right bottom;
```

You can add individual properties to individual images in their respective order.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background' target='_blank' rel='nofollow'>MDN</a>

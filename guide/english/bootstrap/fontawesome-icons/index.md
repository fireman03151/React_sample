---
title: Font Awesome Icons For Bootstrap
---
## Font Awesome Icons For Bootstrap

Bootstrap (from version 4 onwards) have dropped Glyphicon icons font in their latest release. 
Font Awesome Icons provide you with over 675 icons and they come in font format.

#### How To Use:

In the `<head>` of your html include a reference to Font Awesome. 
```html
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
```

You can also use Font Awesome's own CDN.
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/fontawesome.css" integrity="sha384-BzCy2fixOYd0HObpx3GMefNqdbA7Qjcc91RgYeDjrHTIEXqiF00jKvgQG0+zY/7I" crossorigin="anonymous">
```

Additionally, the Font Awesome CDN can supply the brand and regular logos independently.

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/brands.css" integrity="sha384-Px1uYmw7+bCkOsNAiAV5nxGKJ0Ixn5nChyW8lCK1Li1ic9nbO5pC/iXaq27X5ENt" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/fontawesome.css" integrity="sha384-BzCy2fixOYd0HObpx3GMefNqdbA7Qjcc91RgYeDjrHTIEXqiF00jKvgQG0+zY/7I" crossorigin="anonymous">
```
Using Font Awesome is same as using Glyphicon. 


Simply create `<i>` or `<span>` tag and apply the CSS Prefix `fa` and the icon's name.  A code example has been provided below.

**Code Example:**

`<i class="fa fa-twitter" aria-hidden="true"></i>`

<i class="fa fa-twitter" aria-hidden="true"></i>

`<span class="fa fa-free-code-camp" aria-hidden="true"></span>`

<span class="fa fa-free-code-camp" aria-hidden="true"></span>

Icons inherit the `font-size` of their parent container by default, but sizing can be modified by adding `.fa-*` classes, where `*` is one of `xs, sm, md, lg or [1-5]x`.

#### Fontawesome Icon List:
Complete list of icons provided by fontawesome is available [here](http://fontawesome.io/cheatsheet/)

`.fa fa-align-left` This is Font Awesome align left icon.

<span class="fa fa-align-left" aria-hidden="true"></span>

`.fa fa-heart` This is Font Awesome heart icon.

<span class="fa fa-heart" aria-hidden="true"></span>

_Note: Do not include the dot in the HTML Class Attribute, referring to the classes with a dot is only used when adjusting the classes in CSS._

#### More Information
[Font Awesome Cheatsheet](http://fontawesome.io/cheatsheet/)


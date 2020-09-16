---
id: 5ddb965c65d27e1512d44da3
title: Part 10
challengeType: 0
isBeta: true
---

## Description

<section id='description'>

Create a variable named `meal` and set it equal to the first index of `total` (`total[0]`). This would be the input for Breakfast on the form.

</section>

## Instructions

<section id='instructions'>
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert(/const\s*meal\s*=\s*total\[0\]/.test(code));
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;

  function calculate(e) {
    e.preventDefault();
    const total = Array.from(document.getElementsByClassName('cal-control'));
  }
</script>
```

</div>

### Before Test

<div id='html-setup'>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <form id="calorie-form">
        <h2 class="center">Calorie Counter</h2>
        <div class="grid">
          <legend>Sex</legend>
          <div>
            <input type="radio" name="sex" id="female" value="F" checked />
            <label for="female">
              Female (2,000 calories)
            </label>

            <div>
              <input type="radio" name="sex" id="male" value="M" />
              <label for="male">
                Male (2,500 calories)
              </label>
            </div>
          </div>
        </div>
        <div class="grid" id="entries">
          Breakfast
          <input
            type="number"
            min="0"
            class="cal-control"
            id="breakfast"
          /><br />
          Lunch
          <input type="number" min="0" class="cal-control" id="lunch" /><br />
          Dinner <input type="number" min="0" class="cal-control" id="dinner" />
        </div>
        <button type="button" class="btn-add" id="add">
          Add Entry
        </button>
        <button type="submit" class="btn-solid" id="calculate">
          Calculate
        </button>
        <button type="button" class="btn-outline" id="clear">
          Clear
        </button>
      </form>
      <div id="output"></div>
    </div>
  </body>
</html>
```

</div>

### After Test

<div id='html-teardown'>

```html
  </body>
</html>
```

</div>

</section>

## Solution

<section id='solution'>

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;

  function calculate(e) {
    e.preventDefault();
    const total = Array.from(document.getElementsByClassName('cal-control'));
    const meal = total[0];
  }
</script>
```

</section>

---
id: 5a23c84252665b21eecc7edc
title: Last Friday of each month
challengeType: 1
forumTopicId: 302299
dashedName: last-friday-of-each-month
---

# --description--

Write a function that returns the date of the last Friday of a given month for a given year.

# --hints--

`lastFriday` sollte eine Funktion sein.

```js
assert(typeof lastFriday == 'function');
```

`lastFriday(2018, 1)` sollte eine Zahl zurückgeben.

```js
assert(typeof lastFriday(2018, 1) == 'number');
```

`lastFriday(2018, 1)` sollte `26` zurückgeben.

```js
assert.equal(lastFriday(2018, 1), 26);
```

`lastFriday(2017, 2)` sollte `24` zurückgeben.

```js
assert.equal(lastFriday(2017, 2), 24);
```

`lastFriday(2012, 3)` sollte `30` zurückgeben.

```js
assert.equal(lastFriday(2012, 3), 30);
```

.`lastFriday(1900, 4)` sollte `27` zurückgeben.

```js
assert.equal(lastFriday(1900, 4), 27);
```

`lastFriday(2000, 5)` sollte `26` zurückgeben.

```js
assert.equal(lastFriday(2000, 5), 26);
```

`lastFriday(2006, 6)` sollte `30` zurückgeben.

```js
assert.equal(lastFriday(2006, 6), 30);
```

`lastFriday(2010, 7)` sollte `30` zurückgeben.

```js
assert.equal(lastFriday(2010, 7), 30);
```

`lastFriday(2005, 8)` sollte `26` zurückgeben.

```js
assert.equal(lastFriday(2005, 8), 26);
```

# --seed--

## --seed-contents--

```js
function lastFriday(year, month) {

}
```

# --solutions--

```js
function lastFriday(year, month) {
  var i, last_day;
  i = 0;
  while (true) {
    last_day = new Date(year, month, i);
    if (last_day.getDay() === 5) {
      return last_day.getDate();
    }
    i -= 1;
  }
}
```

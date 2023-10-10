---
id: 56533eb9ac21ba0edf2244b6
title: Escape-Sequenzen in Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Anführungszeichen sind nicht die einzigen Zeichen, die innerhalb eines Strings <dfn>ausgelassen</dfn> werden können. Escape-Sequenzen ermöglichen es dir, Zeichen zu verwenden, die du sonst nicht in einem String verwenden könntest.

<table><thead><tr><th>Code</th><th>Ausgabe</th></tr></thead><tbody><tr><td><code>\'</code></td><td>Einzelnes Anführungszeichen</td></tr><tr><td><code>\"</code></td><td>Doppeltes Anführungszeichen</td></tr><tr><td><code>\\</code></td><td>Backslash</td></tr><tr><td><code>\n</code></td><td>Zeilenumbruch</td></tr><tr><td><code>\t</code></td><td>Tabulator</td></tr><tr><td><code>\r</code></td><td>Wagenrücklauf (Carriage Return)</td></tr><tr><td><code>\b</code></td><td>Backspace</td></tr><tr><td><code>\f</code></td><td>Seitenvorschub (Formfeed)</td></tr></tbody></table>

*Bitte beachte, dass das Backslash selbst mit einem Escape-Zeichen versehen werden muss, um als Backslash angezeigt zu werden.*

# --instructions--

Weise die folgenden drei Textzeilen der einzelnen Variablen `myStr` mit Hilfe von Escape-Sequenzen zu.

<pre>
FirstLine
  \SecondLine
ThirdLine
</pre>

Um Sonderzeichen korrekt einzufügen, musst du Escape-Sequenzen verwenden. Du musst auch die Abstände so einhalten, wie sie oben aussehen, ohne Leerzeichen zwischen Escape-Sequenzen oder Wörtern.

**Hinweis:** Die Einrückung für `SecondLine` wird mit dem Tabulator-Escape-Zeichen erreicht, nicht mit Leerzeichen.

# --hints--

`myStr` sollte keine Leerzeichen enthalten

```js
assert(!/ /.test(myStr));
```

`myStr` sollte die Strings `FirstLine`, `SecondLine` und `ThirdLine` enthalten (Groß- und Kleinschreibung beachten)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` sollte von einem Zeilenumbruchzeichen `\n` gefolgt werden

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` sollte ein Tab-Zeichen `\t` enthalten, das auf ein Zeilenumbruchzeichen folgt

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` sollte das Backslash-Zeichen `\` vorangestellt werden

```js
assert(/\\SecondLine/.test(myStr));
```

Zwischen `SecondLine` und `ThirdLine` sollte ein Zeilenumbruch stehen

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` sollte nur die in der Anleitung angegebenen Zeichen enthalten

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```

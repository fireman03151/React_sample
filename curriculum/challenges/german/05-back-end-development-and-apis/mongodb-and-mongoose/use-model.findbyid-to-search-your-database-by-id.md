---
id: 587d7fb7367417b2b2512c0d
title: Verwende model.findById() um deine Datenbank anhand der _id zu durchsuchen
challengeType: 2
forumTopicId: 301544
dashedName: use-model-findbyid-to-search-your-database-by-id
---

# --description--

Wenn ein Dokument gespeichert wird, fügt MongoDB automatisch das Feld `_id` hinzu und setzt es auf einen eindeutigen alphanumerischen Schlüssel. Die Suche nach `_id` ist eine extrem häufige Anwendung, daher bietet Mongoose eine eigene Methode dafür an.

# --instructions--

Modifiziere die `findPersonById`, um die einzige Person mit der gegebenen `_id` zu finden, indem du `Model.findById() -> Person` verwendest. Verwende das Funktionsargument `personId` als Suchbegriff.

# --hints--

Die Suche nach einem Element anhand der Id sollte erfolgreich sein

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/find-by-id').then(
    (data) => {
      assert.equal(data.name, 'test', 'item.name is not what expected');
      assert.equal(data.age, 0, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['none'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0, 'The item should be not previously edited');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

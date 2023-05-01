---
id: 5895f70df9fc0f352b528e69
title: Wie man Passport-Strategien nutzt
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

In the `index.pug` file supplied, there is a login form. It is hidden because of the inline JavaScript `if showLogin` with the form indented after it.

Füge innerhalb des `res.render` dieser Seite dem Objekt eine neue Variable hinzu, `showLogin: true`. Wenn du deine Seite aktualisierst, solltest du das Formular sehen! Das Formular übermittelt **POST**-Anfragen an `/login`. Hier solltest du also die POST-Anfrage annehmen und den Nutzer authentifizieren.

In dieser Aufgabe erstellst du die Route `/login`, um eine POST-Anfrage anzunehmen. Um mithilfe dieser Route Nutzer zu authentifizieren, benötigst du eine Middleware, die das vor Beantwortung der Anfrage tut. Dazu wird einfach ein weiteres Argument an die Middleware übergeben, bevor die Antwort kommt. The middleware to use is `passport.authenticate('local')`.

`passport.authenticate` can also take some options as an argument such as `{ failureRedirect: '/' }` which is incredibly useful, so be sure to add that in as well. Add a response after using the middleware (which will only be called if the authentication middleware passes) that redirects the user to `/profile`. Add that route, as well, and make it render the view `profile.pug`.

If the authentication was successful, the user object will be saved in `req.user`.

At this point, if you enter a username and password in the form, it should redirect to the home page `/`, and the console of your server should display `'User {USERNAME} attempted to log in.'`, since we currently cannot login a user who isn't registered.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

All steps should be correctly implemented in `server.js`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showLogin:( |)true/,
    'You should be passing the variable "showLogin" as true to your render function for the homepage'
  );
  assert.match(
    data,
    /failureRedirect:( |)('|")\/('|")/,
    'Your code should include a failureRedirect to the "/" route'
  );
  assert.match(
    data,
    /login[^]*post[^]*local/,
    'You should have a route for login which accepts a POST and passport.authenticates local'
  );
}
```

Eine POST-Anfrage an `/login` sollte korrekt zu `/` weiterleiten.

```js
async (getUserInput) => {
  const url = new URL("/login", getUserInput("url"));
  const res = await fetch(url, { method: 'POST' });
  const data = await res.text();
  assert.match(
    data,
    /Looks like this page is being rendered from Pug into HTML!/,
    'A login attempt at this point should redirect to the homepage since we do not have any registered users'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

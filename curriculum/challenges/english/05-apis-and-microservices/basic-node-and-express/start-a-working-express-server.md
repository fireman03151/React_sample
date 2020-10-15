---
id: 587d7fb0367417b2b2512bee
title: Start a Working Express Server
challengeType: 2
forumTopicId: 301519
---

## Description
<section id='description'>
In the first two lines of the file <code>myApp.js</code>, you can see how easy it is to create an Express app object. This object has several methods, and you will learn many of them in these challenges. One fundamental method is <code>app.listen(port)</code>. It tells your server to listen on a given port, putting it in running state. For testing reasons, we need the app to be running in the background so we added this method in the `server.js` file for you.

Let’s serve our first string! In Express, routes takes the following structure: <code>app.METHOD(PATH, HANDLER)</code>. METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched.
Handlers take the form <code>function(req, res) {...}</code>, where req is the request object, and res is the response object. For example, the handler

```js
function(req, res) {
  res.send('Response String');
}
```

will serve the string 'Response String'.
</section>

## Instructions
<section id='instructions'>
Use the <code>app.get()</code> method to serve the string "Hello Express" to GET requests matching the <code>/</code> (root) path. Be sure that your code works by looking at the logs, then see the results in the preview if you are using Repl.it.
<strong>Note:</strong> All the code for these lessons should be added in between the few lines of code we have started you off with.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your app should serve the string 'Hello Express'
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.equal(data, ''Hello Express'', ''Your app does not serve the text "Hello Express"''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>

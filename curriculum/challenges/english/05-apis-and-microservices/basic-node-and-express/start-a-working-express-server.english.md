---
id: 587d7fb0367417b2b2512bee
title: Start a Working Express Server
challengeType: 2
---

## Description
<section id='description'>
In the first two lines of the file myApp.js you can see how it’s easy to create an Express app object. This object has several methods, and we will learn many of them in these challenges. One fundamental method is <code>app.listen(port)</code>. It tells your server to listen on a given port, putting it in running state. You can see it at the bottom of the file. It is inside comments because for testing reasons we need the app to be running in background. All the code that you may want to add goes between these two fundamental parts. Glitch stores the port number in the environment variable <code>process.env.PORT</code>. Its value is <code>3000</code>.
Let’s serve our first string! In Express, routes takes the following structure: <code>app.METHOD(PATH, HANDLER)</code>. METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched.
Handlers take the form <code>function(req, res) {...}</code>, where req is the request object, and res is the response object. For example, the handler
<blockquote>function(req, res) {<br> res.send('Response String');<br>}</blockquote>
will serve the string 'Response String'.
Use the <code>app.get()</code> method to serve the string Hello Express, to GET requests matching the / root path. Be sure that your code works by looking at the logs, then see the results in your browser, clicking the button ‘Show Live’ in the Glitch UI.
</section>

## Instructions
<section id='instructions'>

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
// solution required
```
</section>

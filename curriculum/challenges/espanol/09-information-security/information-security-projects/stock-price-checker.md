---
id: 587d824a367417b2b2512c44
title: Comprobador de precios de acciones
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

Construye una aplicacion Javascript full stack que funcione similarmente a esta: <a href="https://stock-price-checker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker.freecodecamp.rocks/</a>.

Como todas las API de precios de acciones fiables requieren una clave de API, hemos creado una solución. Utilice <a href="https://stock-price-checker-proxy.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker-proxy.freecodecamp.rocks/</a> para obtener información actualizada del precio de las acciones sin necesidad de registrarte para tu propia clave.

Trabajar en este proyecto implicará escribir tu código utilizando uno de los siguientes métodos:

-   Clone este repositorio de <a href="https://github.com/freeCodeCamp/boilerplate-project-stockchecker/" target="_blank" rel="noopener noreferrer nofollow"> GitHub</a> y complete estos desafíos localmente.
-   Usa este <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker" target="_blank" rel="noopener noreferrer nofollow"> proyecto inicial de Replit</a> para completar tu proyecto.
-   Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio GitHub.

Si usas Replit, sigue estos pasos para configurar el proyecto:

-   Empieza importando el proyecto en Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the Solution Link field. Optionally, also submit a link to your project's source code in the GitHub Link field.

# --instructions--

1.  SET `NODE_ENV` to `test` without quotes and set `DB` to your MongoDB connection string
2.  Completa el proyecto en `routes/api.js` o creando un manejador/controlador
3.  Añadirás cualquier característica de seguridad a `server.js`
4.  Crearás todas las pruebas funcionales en `tests/2_functional-tests.js`

**Note** Privacy Considerations: Due to the requirement that only 1 like per IP should be accepted, you will have to save IP addresses. It is important to remain compliant with data privacy laws such as the General Data Protection Regulation. One option is to get permission to save the user's data, but it is much simpler to anonymize it. For this challenge, remember to anonymize IP addresses before saving them to the database. If you need ideas on how to do this, you may choose to hash the data, truncate it, or set part of the IP address to 0.

Write the following tests in `tests/2_functional-tests.js`:

-   Viewing one stock: GET request to `/api/stock-prices/`
-   Viewing one stock and liking it: GET request to `/api/stock-prices/`
-   Viewing the same stock and liking it again: GET request to `/api/stock-prices/`
-   Viewing two stocks: GET request to `/api/stock-prices/`
-   Viewing two stocks and liking them: GET request to `/api/stock-prices/`

# --hints--

You can provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

You should set the content security policies to only allow loading of scripts and CSS from your server.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("script-src 'self'")
  );
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("style-src 'self'")
  );
};
```

You can send a `GET` request to `/api/stock-prices`, passing a NASDAQ stock symbol to a `stock` query parameter. The returned object will contain a property named `stockData`.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

The `stockData` property includes the `stock` symbol as a string, the `price` as a number, and `likes` as a number.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker.price, 'number');
  assert.typeOf(ticker.likes, 'number');
  assert.typeOf(ticker.stock, 'string');
};
```

You can also pass along a `like` field as `true` (boolean) to have your like added to the stock(s). Only 1 like per IP should be accepted.

```js

```

If you pass along 2 stocks, the returned value will be an array with information about both stocks. Instead of `likes`, it will display `rel_likes` (the difference between the likes on both stocks) for both `stockData` objects.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker, 'array');
  assert.property(ticker[0], 'rel_likes');
  assert.property(ticker[1], 'rel_likes');
};
```

All 5 functional tests are complete and passing.

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 5);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
  });
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

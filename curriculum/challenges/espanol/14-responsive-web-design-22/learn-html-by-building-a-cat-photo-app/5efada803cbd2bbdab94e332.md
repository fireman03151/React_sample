---
id: 5efada803cbd2bbdab94e332
title: Paso 29
challengeType: 0
dashedName: step-29
---

# --description--

Dentro del elemento `figure` que acabas de añadir, anida un elemento `img` con un atributo `src` con el valor `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

# --hints--

Tu segundo elemento `figure` debe tener una etiqueta de apertura. Las etiquetas de apertura tienen esta sintaxis: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length >= 2);
```

Tu segundo elemento `figure` debe tener una etiqueta de cierre. Las etiquetas de cierre tiene una `/` después del carácter `<`.

```js
assert(code.match(/<\/figure>/g).length >= 2);
```

Debe haber un segundo elemento `figure` justo arriba de la etiqueta de cierre del segundo elemento `section`. Los tienes en el orden incorrecto.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

Debes tener tercer elemento `img` anidado en el elemento `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
);
```

La tercer imagen, debe tener un atributo `src` con el valor `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Aunque el atributo `src` de la nueva imagen tenga la URL correcta, se recomienda siempre poner entre comillas el valor de un atributo.

```js
assert(!/\<img\s+.+\s+src\s*=\s*https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/cats\.jpg/.test(code));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
--fcc-editable-region--
        <figure>

        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```


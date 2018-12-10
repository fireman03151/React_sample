---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://spanish.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: Agregar un texto alternativo a las imágenes para la accesibilidad de personas con discapacidad visual
---

## Descripción 
<section id="description"> Es probable que hayas visto un atributo <code>alt</code> en una etiqueta <code>img</code> en otros desafíos. En este contexto, <code>alt</code> significa texto alternativo y se utiliza para describir el contenido de la imagen y/o proporcionar un texto alternativo que se mostraría en caso de que la imagen no cargue correctamente o no pueda ser vista por un usuario. También es utilizado por los motores de búsqueda para comprender qué contiene una imagen para incluirla en los resultados de búsqueda. Aquí hay un ejemplo: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code> personas con discapacidades visuales dependen de los lectores de pantalla para convertir el contenido web a una interfaz de audio. No obtendrán información si solo se presenta visualmente. Para las imágenes, los lectores de pantalla pueden acceder al atributo <code>alt</code> y leer su contenido para entregar información clave. El buen texto <code>alt</code> es breve pero descriptivo, y está pensado para transmitir brevemente el significado de la imagen. Siempre debes incluir un atributo <code>alt</code> en tu imagen. Por especificación de HTML5, esto ahora se considera obligatorio. </section>

## Instrucciones 
<section id="instructions"> Resulta que Camper Cat es tanto un ninja codificador como un ninja real, y está construyendo un sitio web para compartir sus conocimientos. La imagen de perfil que desea usar muestra sus habilidades y debe ser apreciada por todos los visitantes del sitio. Agregue un atributo <code>alt</code> en la etiqueta <code>img</code> , que explica que Camper Cat está haciendo karate. (La imagen <code>src</code> no se vincula a un archivo real, por lo que debería ver el texto <code>alt</code> en la pantalla). </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: 'Su etiqueta <code>img</code> debe tener un atributo <code>alt</code> , y no debe estar vacía.'
    testString: 'assert($("img").attr("alt"), "Your <code>img</code> tag should have an <code>alt</code> attribute, and it should not be empty.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>

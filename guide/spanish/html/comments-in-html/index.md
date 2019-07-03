---
title: Comments in HTML
localeTitle: Comentarios en HTML
---
## Comentarios en HTML

La etiqueta de comentario es un elemento que se utiliza para dejar notas, principalmente relacionadas con el proyecto o el sitio web. Esta etiqueta se usa con frecuencia para explicar algo en el código o dejar algunas recomendaciones sobre el proyecto. La etiqueta de comentario también hace que sea más fácil para el desarrollador regresar y comprender el código que ha escrito en una etapa posterior. Los comentarios también se pueden utilizar para comentar líneas de código con fines de depuración.

Es una buena práctica agregar comentarios a su código, especialmente cuando trabaja con un equipo o en una empresa.

Los comentarios comienzan con `<!--` y finalizan con `-->` , y pueden abarcar varias líneas. Pueden contener código o texto, y no aparecerán en la parte delantera del sitio web cuando un usuario visite una página. Puede ver los comentarios a través de la Consola del inspector, o viendo el Origen de la página.

### Ejemplo

```html

<!-- Puedes commentar varias lineas como estas. 
 Author: xyz 
 Date: xx/xx/xxxx 
 Purpose: abc 
 --> 
 Read more: https://html.com/tags/comment-tag/#ixzz4vtZHu5uR 
 <!DOCTYPE html> 
 <html> 
    <body> 
        <h1>FreeCodeCamp web</h1> 
        <!-- Deja espacio entre <h1> y <p> para entender mejor el codigo. --> 
        <p>FreeCodeCamp is an open-source project that needs your help</p> 
            <!-- For readability of code use proper indentation --> 
    </body> 
 </html> 
```

## Comentarios condicionales

Los comentarios condicionales definen algunas etiquetas HTML que se deben suprimir cuando se cumple una determinada codificación.

Los comentarios condicionales solo son reconocidos por la versión 5 de Internet Explorer hasta la versión 9 - IE5 - IE9.

### Ejemplo

```html

<!DOCTYPE html> 
 <html> 
    <body> 
        <!--[if IE 9]> 
                <h1>FreeCodeCamp web</h1> 
            <p>FreeCodeCamp es un projecto de codigo abierto que neccesita tu ayuda</p> 
        <![endif]--> 
    </body> 
 </html> 
```

### Comentarios Condicionales de IE

Estos comentarios solo están disponibles en Internet Explorer y pueden usarse hasta IE9. En los tiempos actuales, hay un buen cambio que nunca los verás, pero es bueno saber acerca de su existencia. Los comentarios condicionales son una forma de ofrecer una experiencia diferente para diferentes navegadores de clientes. Por ejemplo:

```html

 <!--[if lt IE 9]> <p>Si tu navegador es menor IE9</p> <![endif]--> 
 <!--[if IE 9]> <p>Si tu navegador es IE9</p> <![endif]--> 
 <!--[if gt IE 9]> <p>Si tu navegador es mayor a IE9</p> <![endif]--> 
```

[Sobre los comentarios condicionales.](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)

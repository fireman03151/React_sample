---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
videoUrl: ''
localeTitle: Criar uma consulta de mídia
---

## Description
<section id="description"> Consultas de mídia são uma nova técnica introduzida no CSS3 que altera a apresentação do conteúdo com base em diferentes tamanhos de viewport. A janela de visualização é uma área visível de um usuário de uma página da Web e é diferente dependendo do dispositivo usado para acessar o site. Consultas de mídia consistem em um tipo de mídia e, se esse tipo de mídia corresponder ao tipo de dispositivo em que o documento é exibido, os estilos serão aplicados. Você pode ter tantos seletores e estilos dentro de sua consulta de mídia quanto desejar. Veja um exemplo de uma consulta de mídia que retorna o conteúdo quando a largura do dispositivo é menor ou igual a 100px: <code>@media (max-width: 100px) { /* CSS Rules */ }</code> e a consulta de mídia a seguir retorna o conteúdo quando o a altura do dispositivo é maior ou igual a 350px: @media <code>@media (min-height: 350px) { /* CSS Rules */ }</code> Lembre-se, o CSS dentro da consulta de mídia é aplicado somente se o tipo de mídia corresponder ao do dispositivo que está sendo usado. </section>

## Instructions
<section id="instructions"> Adicione uma consulta de mídia para que a tag <code>p</code> tenha um <code>font-size</code> de <code>font-size</code> de 10px quando a altura do dispositivo for menor ou igual a 800px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>p</code> deve ter o <code>font-size</code> da <code>font-size</code> de 10px quando a <code>height</code> do dispositivo for menor ou igual a 800px.
    testString: 'assert($("p").css("font-size") == "10px", "Your <code>p</code> element should have the <code>font-size</code> of 10px when the device <code>height</code> is less than or equal to 800px.");'
  - text: Declare uma consulta <code>@media</code> para dispositivos com uma <code>height</code> menor ou igual a 800px.
    testString: 'assert(code.match(/@media\s*?\(\s*?max-height\s*?:\s*?800px\s*?\)/g), "Declare a <code>@media</code> query for devices with a <code>height</code> less than or equal to 800px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  p {
    font-size: 20px;
  }

  /* Add media query below */

</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

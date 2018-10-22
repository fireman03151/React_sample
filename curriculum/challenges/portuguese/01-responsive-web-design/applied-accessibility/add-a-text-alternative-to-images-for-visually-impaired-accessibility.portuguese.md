---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://portuguese.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: Adicionar uma alternativa de texto a imagens para acessibilidade com deficiência visual
---

## Description
<section id="description"> É provável que você tenha visto um atributo <code>alt</code> em uma tag <code>img</code> em outros desafios. O atributo <code>Alt</code> descreve o conteúdo da imagem e fornece uma alternativa de texto. Isso ajuda no caso de a imagem não carregar ou não ser vista por um usuário. Ele também é usado pelos mecanismos de pesquisa para entender o que uma imagem contém para incluí-la nos resultados da pesquisa. Veja um exemplo: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code> As pessoas com deficiência visual dependem dos leitores de tela para converter o conteúdo da Web em uma interface de áudio. Eles não receberão as informações se estas forem apresentadas apenas visualmente. Para imagens, os leitores de tela podem acessar o atributo <code>alt</code> e ler seu conteúdo para fornecer informações importantes. Um bom texto <code>alt</code> é curto, mas descritivo, e destina-se a transmitir brevemente o significado da imagem. Você deve sempre incluir um atributo <code>alt</code> em sua imagem. Por especificação HTML5, isso agora é considerado obrigatório. </section>

## Instructions
<section id="instructions"> O Camper Cat é tanto um ninja codificador quanto um ninja, e está construindo um site para compartilhar seu conhecimento. A foto do perfil que ele quer usar mostra suas habilidades e deve ser apreciada por todos os visitantes do site. Adicione um atributo <code>alt</code> na tag <code>img</code> , que explica que o Camper Cat está praticando karatê. (O atributo <code>src</code> da imagem não tem um link para um arquivo real, então você deve ver o texto <code>alt</code> na tela.) </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua tag <code>img</code> deve ter um atributo <code>alt</code> e não deve estar vazia.
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

## Solution
<section id='solution'>

```js
// solution required
```
</section>

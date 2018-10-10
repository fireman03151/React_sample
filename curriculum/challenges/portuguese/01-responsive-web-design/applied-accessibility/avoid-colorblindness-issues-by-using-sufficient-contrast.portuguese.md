---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: ''
localeTitle: Evitar problemas de daltonismo usando o contraste suficiente
---

## Description
<section id="description"> A cor é uma grande parte do design visual, mas seu uso introduz dois problemas de acessibilidade. Primeiro, a cor sozinha não deve ser usada como a única maneira de transmitir informações importantes porque os usuários de leitores de tela não a verão. Segundo, as cores do primeiro plano e do plano de fundo precisam de contraste suficiente para que os usuários daltônicos possam distingui-las. Desafios anteriores cobertos com alternativas de texto para abordar a primeira questão. O último desafio introduziu ferramentas de verificação de contraste para ajudar no segundo. A taxa de contraste recomendada por WCAG de 4.5: 1 aplica-se ao uso de cores, bem como a combinações em escala de cinza. Usuários daltônicos têm dificuldade em distinguir algumas cores de outros - geralmente em matiz, mas às vezes leveza também. Você pode se lembrar que a taxa de contraste é calculada usando os valores relativos de luminância (ou luminosidade) das cores de primeiro plano e de fundo. Na prática, a proporção de 4,5: 1 pode ser alcançada escurecendo a cor mais escura e iluminando a mais clara com o auxílio de um verificador de contraste de cores. As cores mais escuras na roda de cores são consideradas azuis, violetas, magentas e vermelhas, enquanto as cores mais claras são laranjas, amarelos, verdes e azuis-verdes. </section>

## Instructions
<section id="instructions"> Cat Camper está experimentando com o uso de cores para seu texto blog e fundo, mas sua combinação atual de um esverdeada <code>background-color</code> com texto marrom <code>color</code> tem um 2.5: 1 razão de contraste. Você pode ajustar facilmente a leveza das cores desde que ele as declarou usando a propriedade CSS <code>hsl()</code> (que significa matiz, saturação, luminosidade) alterando o terceiro argumento. Aumente o valor de luminosidade da <code>background-color</code> de 35% para 55% e diminua o valor de luminosidade de <code>color</code> de 20% para 15%. Isso melhora o contraste para 5.9: 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código só deve alterar o valor de luminosidade da propriedade da <code>color</code> do texto para um valor de 15%.
    testString: 'assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi), "Your code should only change the lightness value for the text <code>color</code> property to a value of 15%.");'
  - text: Seu código só deve alterar o valor de luminosidade da propriedade <code>background-color</code> para um valor de 55%.
    testString: 'assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi), "Your code should only change the lightness value for the <code>background-color</code> property to a value of 55%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

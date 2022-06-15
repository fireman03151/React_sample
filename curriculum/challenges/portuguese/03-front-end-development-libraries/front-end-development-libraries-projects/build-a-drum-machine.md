---
id: 587d7dbc367417b2b2512bae
title: Criar uma bateria eletrônica
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**Objetivo:** criar uma aplicação que funcione de modo semelhante ao que vemos em: <a href="https://codepen.io/freeCodeCamp/full/MJyNMd" target="_blank" rel="noopener noreferrer nofollow">https://codepen.io/freeCodeCamp/full/MJyNMd</a>.

Atenda às histórias de usuário abaixo e faça com que todos os testes passem. Use quaisquer bibliotecas ou APIs de que você precisar. Dê ao projeto o seu próprio estilo pessoal.

Você pode usar qualquer mistura de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e JQuery para completar este projeto. Você deve usar um framework de front-end (como React por exemplo) porque essa seção trata de aprender frameworks de front-end. Tecnologias adicionais não listadas acima não são recomendadas e usá-las é por sua conta e risco. Estamos buscando apoiar outros frameworks de front-end, como Angular e Vue, mas eles não são atualmente suportados. Vamos aceitar e tentar corrigir todos os relatórios de problemas que usem o conjunto de tecnologias sugeridas para esse projeto. Boa programação!

**História de usuário nº 1:** eu devo ser capaz de ver um contêiner externo com um `id="drum-machine"` correspondente que contém todos os outros elementos.

**História de usuário nº 2:** dentro de `#drum-machine`, eu consigo ver um elemento com um `id="display"` correspondente.

**História de usuário nº 3:** dentro de `#drum-machine`, eu consigo ver 9 elementos de tambores clicáveis, cada um com o nome de classe `drum-pad`, um id único que descreve o clipe de áudio que o tambor será definido para executar, e um texto interno que corresponde a uma das teclas do teclado a seguir: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. Os tambores DEVEM estar nesta ordem.

**História de usuário nº 4:** dentro de cada `.drum-pad`, deve haver um elemento HTML5 `audio`, que tem o atributo `src` apontando para um clipe de áudio, o nome de classe `clip`, e um id correspondendo ao texto interno do seu `.drum-pad` pai (por exemplo, `id="Q"`, `id="W"`, `id="E"` e assim por diante).

**História de usuário nº 5:** quando eu clico em um elemento `.drum-pad`, o clipe de áudio dentro do seu elemento filho `audio` deve ser ativado.

**História de usuário nº 6:** quando eu pressionar a tecla de disparo associada a cada `.drum-pad`, o clipe de áudio dentro do elemento filho `audio` deve ser ativado (por exemplo, ao pressionar a tecla `Q`, deve ser acionado o tambor que tem a string `Q`, ao pressionar a tecla `W`, deve ser acionado o tambor que contém a string `W` e assim por diante).

**História de usuário nº 7:** quando um `.drum-pad` é acionado, uma string descrevendo o clipe de áudio associado é exibido como o texto interno do elemento `#display` (cada string precisa ser única).

Você pode fazer o seu projeto <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">usando este modelo da CodePen</a> e clicando em `Save` para criar seu próprio pen. Ou você pode usar esse link CDN para rodar os testes em qualquer ambiente que você goste:`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando você terminar, envie a URL para o seu projeto em trabalho com todos os testes passando.

# --solutions--

```js
// solution required
```

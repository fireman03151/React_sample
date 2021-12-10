# Como trabalhar em desafios de programação

Nosso objetivo é desenvolver uma experiência de aprendizado divertida e interativa.

Projetar desafios interativos de programação é difícil. Seria muito mais fácil escrever uma explicação longa ou criar um tutorial em vídeo. Mas no nosso currículo principal, estamos buscando o que funciona melhor para a maioria das pessoas - uma experiência de jogo totalmente interativa e parecida com vídeo.

Queremos que os usuários freeCodeCamp atinjam um estado ativo no aprendizado. Queremos que eles sejam impulsionados a percorrer o nosso currículo com o mínimo possível de empecilhos. Nós queremos que eles iniciem os projetos com confiança e adquiram uma ampla exposição aos conceitos de programação.

Note que para a versão 7.0 do currículo do freeCodeCamp, nós estamos migrando para [um modelo inteiramente focado em projetos e com muito mais repetições](https://www.freecodecamp.org/news/python-curriculum-is-live/).

A criação destes desafios exige imensa criatividade e atenção aos pormenores. Há muita ajuda disponível. Você terá o apoio de toda uma equipe de colaboradores para quem você pode buscar ideias e provar seus desafios.

E como sempre, fique à vontade em perguntar na [categoria 'Contribuidores' do fórum](https://forum.freecodecamp.org/c/contributors) ou [no chat dos contribuidores](https://chat.freecodecamp.org/channel/contributors).

Com sua ajuda, nós podemos projetar um currículo de programação interativo que ajudará milhões de pessoas a aprender a programar nos próximos anos.

O conteúdo para cada desafio é guardado em um arquivo markdown. Este arquivo markdown é posteriormente convertido em HTML usando nossas ferramentas para criar páginas web interativas.

Você pode encontrar todo o conteúdo curricular do freeCodeCamp.org no diretório [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges).

## Configure as ferramentas para o currículo

Antes de trabalhar no currículo, você precisará configurar algumas ferramentas para ajudá-lo a testar suas alterações. Você pode usar qualquer opção abaixo:

- Você pode [configurar freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). Isto é **altamente recomendado** para contribuições regulares/repetidas. Esta configuração permite que você trabalhe e teste suas alterações.
- Use o Gitpod, um ambiente gratuito de desenvolvimento on-line. Clicar no botão abaixo irá iniciar um ambiente de desenvolvimento pronto para programar para freeCodeCamp em seu navegador. Leva só alguns minutos.

  [![Abra no Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Edite os arquivos na interface do GitHub clicando no ícone do lápis no arquivo correspondente. Embora seja a maneira mais rápida, **não é recomendado**, porque você não pode testar suas alterações no GitHub. Se nossos mantedores concluirem que as mudanças que você fez precisam ser testadas localmente, você precisará seguir os métods acima.

### Trabalhe em projetos práticos

Os projetos práticos tem algumas ferramentas adicionais para criar novos projetos e passos. Para saber mais, veja [esses documentos](how-to-work-on-practice-projects.md)

## Modelo de desafio

````md
---
id: Identificador exclusivo (alfanumérico, MongoDB_id)
title: 'Título do desafio'
challengeType: Inteiro, definido em `client/utils/challenge-types.js`
videoUrl: 'url de explicação do vídeo'
forumTopicId: 12345
---

# --descrição--

Texto descritivo do desafio, em markdown

```html
<div>example code</div>
````

# --instructions--

Texto com instruções para o desafio, em markdown

# --hints--

Testes para executar o código do usuário, em par com o markdown e bloco de código de teste.

```js
Código para o teste um
```

Se você quer um resultado dinâmico baseada no código do usuário, --fcc-expected-- e --fcc-actual-- serão substituídos pelos valores esperados e reais da verificação do teste. Tome cuidado se você tiver várias afirmações já que a primeira afirmação em que houver uma falha determinará os valores de --fcc-expected-- e --fcc-actual--.

```js
assert.equal(
  'isso substituirá --fcc-actual--',
  'isso substituirá --fcc-expected--'
);
```

# --notes--

Extra information for a challenge, in markdown

# --seed--

## --before-user-code--

```lang
Código avaliado antes do código do usuário.
```

## --after-user-code--

```lang
Código avaliado após o código do usuário, e pouco antes dos testes
```

## --seed-contents--

Boilerplate code to render to the editor. This section should only contain code inside backticks, like the following:

```html
<body>
  <p class="main-text">Olá mundo!</p>
</body>
```

```css
body {
  margin: 0;
  background-color: #3a3240;
}

.main-text {
  color: #aea8d3;
}
```

```js
console.log('freeCodeCamp is awesome!');
```

# --solutions--

Solutions are used for the CI tests to ensure that changes to the hints will still pass as intended

```js
// primeira solução - a(s) linguagem(ns) deve(m) ser a mesma do código fornecido.
```

---

```js
// segunda solução - então se o código fornecido está em HTML...
```

---

```js
// terceira solução etc. - Suas soluções devem estar em HTML.
```

# --question--

These fields are currently used for the multiple-choice Python challenges.

## --text--

The question text goes here.

## --answers--

Answer 1

---

Answer 2

---

More answers

## --video-solution--

The number for the correct answer goes here.
````

> [!NOTE]
>
> 1. Nas seções acima, exemplos de `lang` são:
>
> - `html` - HTML/CSS
> - `js` - JavaScript
> - `jsx` - JSX

## Numeração dos desafios

Todo desafio precisa de um `id`. Se você não especifica um, então o MongoDB criará um aleatório quando os dados forem salvos. Porém, não queremos que ele faça isso. Queremos que os ids dos desafios sejam consistentes em diferentes ambientes (staging, produção, vários desenvolvedores diferentes, etc.).

Para gerar um novo no shell (assumindo que o MongoDB está executando separadamente):

1. Execute o comando `mongo`.
2. Execute o comando `ObjectId()`.

Por exemplo:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

The result is a new id, for example `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Título do desafio
```

## Nomeando desafios

Naming things is hard. We've made it easier by imposing some constraints.

All challenge titles should be explicit and should follow this pattern:

\[verb\]\[object clause\]

Here are some example challenge names:

- Usar a notação de sentido horário para especificar o preenchimento (padding) de um elemento
- Condensar arrays com .reduce
- Usar notação de colchetes para encontrar o primeiro caractere em uma string

## Descrições/instruções do desafio

Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs than a wall of text.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. Campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (letras maiúsculas em "J" e "S" e sem abreviações)
- Node.js
- Embora às vezes imprecisas, as formas não hifenizadas de 'back end' e 'front end' devem ser usadas, pois são mais amplamente utilizadas.

### A regra dos 2 minutos

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions/instructions understand the seeded code, write their code and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:

- Simplifique o desafio, ou
- Divida o desafio em dois desafios.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straight-forward.

We track how long it takes for campers to solve changes and use this information to identify challenges that need to be simplified or split.

### Modularidade

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

### Formatando o texto do desafio

Here are specific formatting guidelines for challenge text and examples:

- Palavras chaves da linguagem ficam entre `` \` `` crases. Por exemplo, nomes de tags HTML ou nomes de propriedade CSS.
- Referências a códigos (ex. função, método ou nomes de variáveis) devem estar entre `` \` ``. Veja o exemplo abaixo:

```md
Use `parseInt` para converter a variável `realNumber` em um número inteiro.
```

- Referências a nomes de arquivos e caminhos (ex. `package.json`, `src/components`) devem estar entre `` \` ``.
- Blocos de código com várias linhas **devem ser precedidos por uma linha vazia**. A próxima linha deve começar com três crases seguidas imediatamente por uma das [linguagens suportadas](https://prismjs.com/#supported-languages). Para completar o bloco de código, você deve começar uma nova linha que apenas possui três crases e **outra linha vazia**. Veja o exemplo abaixo:
- Os espaços importam no Markdown. Então, recomendamos que os mantenham visíveis no seu editor.

**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

The following is an example of code:

````md
```{language}

[SEU CÓDIGO]

````
````

- Informações extras, como observações, devem estar entre linhas em branco e formatadas:
`**Observação:** Texto da observação...`
- Se muitas observações são necessárias, liste todas elas em frases separadas usando o formato:
`**Observações:** Texto da primeira observação.
 Texto da segunda observação.`
- Use aspas simples quando necessário

**Observação:** O _Markdown_ equivalente deve ser usado ao invés de tags _HTML_.

## Escrevendo testes

Desafios devem ter um número mínimo de testes necessários para verificar que um usuário freeCodeCamp entendeu o conceito.

Nossa meta é comunicar o ponto que o desafio está tentando ensinar e testar se eles entenderam esse ponto.

Os testes do desafio podem usar bibliotecas Node.js e Chai.js. Se necessário, o código gerado pro usuário pode ser acessado na variável `code` também. Além disso, os objetos `__helpers` expõem várias funções que simplificam o processo de escrita dos testes. As funções disponíveis estão definidas em _client/src/utils/curriculum-helpers.ts_.

## Formatação do código seed

Aqui vemos diretrizes de formatação específicas para o código seed do desafio:

- Use dois espaços para indentação
- Declarações em JavaScript terminam em ponto-e-vírgula
- Use aspas duplas onde for aplicável

### Comentários do código seed

Temos um [comment dictionary](/curriculum/dictionaries/english/comments.js) que contém os únicos comentários que podem ser usados no código seed. O espaçamento e as letras maiúsculas e minúsculas do dicionário de comentário devem ser usadas exatamente como são. O dicionário de comentário não deve ser expandido sem uma discussão prévia com o time de desenvolvimento (dev-team).

Os comentários usados devem ter um espaço entre os caracteres do comentário e o comentário em si. Geralmente, os comentários devem ser usados com moderação. Sempre considere reescrever a descrição de um desafio ou instrução se for possível evitar usar um comentário de código fornecido.

Exemplo de um comentário de uma linha em JavaScript:

```js
// Mude somente abaixo dessa linha
````

Example of a valid CSS comment:

```css
/* Only change code above this line */
```

If a challenge only has a single place where code changes are needed, please use the comments in the following example to instruct the user where changes should be made.

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

If a challenge has multiple places where the user is expected to change code (i.e. the React challenges)

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello'
    };
    // Altere o código abaixo desta linha

    // Altere o código acima desta linha
  }
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }
  render() {
    return (
      <div>
        {/* Altere o código abaixo desta linha */}
        <button>Click Me</button>
        {/* Altere o código acima desta linha */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

### Tradução de comentários de código seed

There are separate comment dictionaries for each language. The [English version of the comment dictionary](/curriculum/dictionaries/english/comments.js) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.js`. Each dictionary consists of an array of objects with a unique `id` property and a `text` property. Only the `text` should be modified to encompass the translation of the corresponding English comment.

Some comments may contain a word/phrase that should not be translated. For example, variable names or proper library names like "React" should not be translated. See the comment below as an example. The word `myGlobal` should not be translated.

```text
Declare a variável myGlobal abaixo desta linha
```

> [!NOTE]
> 
> Estamos trabalhando em uma integração para ser possível trabalhar no i18n para o dicionário de comentário.

## Dicas e soluções

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://forum.freecodecamp.org/c/contributors) on the forum. Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Adicionando um novo tópico de dicas/soluções em um desafio

Take the following steps when adding a new challenge hints/solutions related topic.

1. Comece seguindo os mesmos passos para criar um novo tópico, mas revise o seguinte para criar o título.
2. O título do tópico deve começar com `freeCodeCamp Challenge Guide:` concatenado com o título atual do desafio de currículo. Por exemplo, se o desafio é chamado "`Chunky Monkey`", o título do tópico seria "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. O `camperbot` deve ser o proprietário destes tópicos/postagens. Então, você precisará solicitar um administrador para alterar a propriedade da postagem principal para `camperbot`.
4. Depois que o novo tópico for criado, será criado um id para o tópico do fórum. Está localizado no final da URL do tópico do fórum. Este id deve ser adicionado ao arquivo de desafio do currículo através do processo normal de pull request para o botão `Get a Hint` para vincular ao tópico.

### Diretrizes para o conteúdo dos tópicos de dicas e soluções

When proposing a solution for a curriculum challenge related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests. The following template should be used when creating new hints/solutions topics:

````md
# O nome do desafio fica aqui

---

## Explicação do problema

Resume o que precisa ser feito sem copiar a descrição do desafio e/ou instruções. Essa é uma seção opcional

#### Links relevantes

- [Texto do link](url_do_link_fica_aqui)
- [Texto do link](url_do_link_fica_aqui)

---

## Dicas

### Dica 1

A dica fica aqui

### Dica 2

A dica fica aqui

---

## Soluções

<details><summary>Solução 1 (Clique para mostrar/ocultar)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
````

#### Explicação de Código

- A explicação do código fica aqui
- A explicação do código fica aqui

#### Links relevantes

- [Texto do link](link_url_goes_here)
- [Texto do link](link_url_goes_here)

</details>
````

## Testando desafios

Antes de [criar um pull request](how-to-open-a-pull-request.md) para suas modificações, você precisa validar que as mudanças feitas não causam problemas no desafio.

1. Para testar todos os desafios, execute o comando abaixo a partir do diretório raiz

````
npm run test:curriculum
```

2. Você também pode testar um bloco ou superbloco de desafios com esses comandos

```
npm run test:curriculum --block='Basic HTML and HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

Você também é capaz de testar um desafio individualmente seguindo as seguintes etapas:

1.  Mude para o diretório `curriculum`:

   ```
   cd curriculum
   ```

2. Run the following for each challenge file for which you have changed (replacing `challenge-title-goes-here` with the full title of the challenge):

   ```
   npm run test -- -g challenge-title-goes-here ```

Once you have verified that each challenge you've worked on passes the tests, [please create a pull request](how-to-open-a-pull-request.md).

> [!TIP] Você pode definir a variável de ambiente `LOCALE` no `.env` no idioma do(s) desafio(s) que precisa testar.
> 
> Os valores atualmente aceitos são `english` e `chinese`, com `english` sendo o padrão.

### Links úteis

Creating and Editing Challenges:

1. [Tipos de desafio](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - o que significam os valores do tipo de desafio numérico (enum).

2. [Contribuindo para o FreeCodeCamp - Escrevendo testes de desafio ES6](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - um vídeo com [Ethan Arrowood](https://twitter.com/ArrowoodTech) contribuindo para a versão antiga do currículo.

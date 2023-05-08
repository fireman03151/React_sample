# Як працювати над завданнями з програмуванням

Наша мета — розробити веселе та зрозуміле інтерактивне навчання.

Розробити інтерактивні завдання для програмування — важко. Було б набагато простіше написати довге пояснення чи створити відеоурок. Але для нашої основної навчальної програми ми використовуємо те, що найкраще працює для більшості людей — інтерактив, схожий на відеогру.

Ми хочемо, щоб кемпери досягли стану потоку. Ми хочемо, щоб вони наростили темп та пройшли навчальну програму з мінімальною кількістю помилок. Ми хочемо, щоб вони впевнено виконували проєкти та ознайомились з багатьма поняттями програмування.

Зауважте, що для версії 7.0 навчальної програми freeCodeCamp ми переходимо до [проєктноорієнтованої моделі з багатьма повтореннями](https://www.freecodecamp.org/news/python-curriculum-is-live/).

Ці завдання вимагають креативності та уваги до деталей. Ви не залишитесь без допомоги. Вас підтримуватиме ціла команда помічників, з якими можна поділитись власними ідеями та завданнями.

І як завжди, не соромтесь ставити запитання [на форумі у категорії «Contributors»](https://forum.freecodecamp.org/c/contributors) або [у чаті](https://discord.gg/PRyKn3Vbay).

Завдяки вашій допомозі ми створюємо інтерактивну навчальну програму для програмування, що допоможе мільйонам людей навчитися писати код.

Вміст кожного завдання зберігається у файлі markdown. Потім, щоб створити інтерактивну вебсторінку, цей файл конвертується у HTML за допомогою наших інструментів.

Ви можете знайти весь навчальний матеріал freeCodeCamp.org у каталозі [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges).

## Налаштування інструментів для навчальної програми

Перш ніж працювати над навчальною програмою, потрібно налаштувати деякі інструменти, які допоможуть перевіряти ваші зміни. Ви можете використовувати будь-який варіант нижче:

- Ви можете [налаштувати freeCodeCamp локально](how-to-setup-freecodecamp-locally.md). Це **рекомендовано** для регулярних/повторних внесків. Це налаштування дозволяє працювати над змінами та перевіряти їх.
- Використовуйте безоплатне онлайн середовище Gitpod. Натисніть на кнопку нижче, щоб запустити готове середовище розробки для freeCodeCamp у своєму браузері. Це займе лише кілька хвилин.

  [![Відкрити у Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Редагуйте файли на GitHub, натиснувши на значок олівця для відповідного файлу. Хоча це найшвидший спосіб, він **нерекомендований**, оскільки ви не можете перевірити свої зміни на GitHub. Якщо технічна підтримка вирішить, що ваші зміни потрібно перевірити локально, вам потрібно буде дотримуватись методів, описаних вище.

### Як працювати над практичними проєктами

Практичні проєкти мають деякі додаткові інструменти, які допомагають створити нові проєкти та кроки. Щоб дізнатися більше, див. [документацію](how-to-work-on-practice-projects.md).

## Шаблон завдання

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: 'Challenge Title'
challengeType: Integer, defined in `client/utils/challenge-types.js`
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

# --description--

Challenge description text, in markdown

```html
<div>example code</div>
````

# --instructions--

Текст інструкції тестів у markdown

# --hints--

Tests to run against user code, in pairs of markdown text and code block test code.

```js
Code for test one
```

If you want dynamic output based on the user's code, --fcc-expected-- and --fcc-actual-- will be replaced with the expected and actual values of the test's assertion. Take care if you have multiple assertions since the first failing assertion will determine the values of --fcc-expected-- and --fcc-actual--.

```js
assert.equal(
  'this will replace --fcc-actual--',
  'this will replace --fcc-expected--'
);
```

# --notes--

Extra information for a challenge, in markdown

# --seed--

## --before-user-code--

```lang
Code evaluated before the user’s code.
```

## --after-user-code--

```lang
Code evaluated after the user’s code, and just before the tests
```

## --seed-contents--

Boilerplate code to render to the editor. This section should only contain code inside backticks, like the following:

```html
<body>
  <p class="main-text">Hello world!</p>
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
// first solution - the language(s) should match the seed.
```

---

```js
// second solution - so if the seed is written in HTML...
```

---

```js
// third solution etc. - Your solutions should be in HTML.
```

# --question--

These fields are currently used for the multiple-choice Python challenges.

## --text--

The question text goes here.

## --answers--

Відповідь 1

---

Відповідь 2

---

Інші відповіді

## --video-solution--

The number for the correct answer goes here.
````

> [!NOTE]
>
> 1. In the above sections, examples of `lang` are:
>
> - `html` - HTML/CSS
> - `js` - JavaScript
> - `jsx` - JSX

## Numbering Challenges

Every challenge needs an `id`. If you don't specify one, then MongoDB will create a new random one when it saves the data; however, we don't want it to do that, since we want the challenge ids to be consistent across different environments (staging, production, lots of different developers, etc.).

To generate a new one in a shell (assuming MongoDB is running separately):

1. Run `mongo` command.
2. Run `ObjectId()` command.

Наприклад:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

The result is a new id, for example, `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## Найменування завдань

Давати назву — важко. Проте ми полегшили цей процес, впровадивши деякі обмеження.

Усі назви завдань повинні бути чіткими та дотримуватись цього шаблону:

\[дієслово\]\[підрядна частина\]

Нижче подано декілька прикладів назв завдань:

- Використайте запис за годинниковою стрілкою, щоб визначити відступ елемента
- Стисніть масиви за допомогою .reduce
- Використайте дужкову нотацію, щоб знайти перший символ у рядку

## Опис/інструкції завдань

Речення повинні бути зрозумілими і стислими, з мінімальною кількістю жаргону. Якщо жаргон все-таки був використаний, то його потрібно пояснити звичайною мовою.

Надавайте перевагу коротким абзацам (1-4 речення). Найімовірніше, люди прочитають декілька коротких абзаців, а не суцільний текст.

У тексті завдання потрібно використовувати 2-гу особу множини («ви»). У такий спосіб текст та інструкції будуть звернені напряму до учня, який виконує завдання. Намагайтеся уникати звертань у 1-й особі, як-от «я», «ми», «нам».

Не використовуйте зовнішні посилання. Вони переривають робочий процес. Учні не повинні використовувати гугл під час виконання завдань. Якщо є ресурси, які, на вашу думку, допоможуть учням, додайте їх до статті, пов’язаної з керівництвом до завдання.

В разі потреби можна додати діаграми.

Не використовуйте емоджі в завданнях. freeCodeCamp — глобальна спільнота, а значення емоджі може відрізнятись в різних частинах світу. Крім цього, емоджі можуть по-різному зображатися у різних системах.

Власні іменники потрібно писати з великої літери, коли це можливо. Нижче поданий список, у якому показано, як повинні писатись слова в завданнях.

- JavaScript (великі літери «J» і «S», без скорочень)
- Node.js
- Іноді потрібно вживати деякі неточні форми, як-от «back end» і «front end» без дефіса, оскільки таке вживання більш поширене.

### Правило двох хвилин

Кожне завдання повинне бути вирішене протягом 120 секунд носієм англійської мови, який виконав попередні завдання. У цей час входять прочитання вказівок/інструкцій для розуміння початкового коду, написання власного коду і проходження всіх тестів.

Якщо виконання завдання займає більше двох хвилин, у вас є два шляхи:

- Спростіть завдання, або
- Розділіть завдання на два кроки.

Завдяки правилу двох хвилин ви зробите лаконічні вказівки, зрозумілий початковий код та прості тести.

Ми відстежуємо скільки часу займає розв’язок завдань та використовуємо цю інформацію, щоб виявити завдання, які потрібно спростити чи розділити.

### Модульність

Кожне завдання повинне навчати лише одному поняттю, і це поняття повинне бути очевидним з назви завдання.

Ми можемо закріпити раніше вивчені поняття за допомогою повторення та варіацій. Наприклад, ознайомити користувача з елементами h1 в одному завданні, а пізніше з елементами h3.

Наша мета — розробити тисячі двохвилинних завдань. Вони можуть йти нарівні, а також нагадувати про раніше вивчені поняття.

### Formatting challenge text

Here are specific formatting guidelines for challenge text and examples:

- Language keywords go in `` \` `` backticks. For example, HTML tag names or CSS property names.
- References to code parts (i.e. function, method, or variable names) should be wrapped in `` \` `` backticks. See example below:

```md
Use `parseInt` to convert the variable `realNumber` into an integer.
```

- References to file names and path directories (e.g. `package.json`, `src/components`) should be wrapped in `` \` `` backticks.
- Multi-line code blocks **must be preceded by an empty line**. The next line must start with three backticks followed immediately by one of the [supported languages](https://prismjs.com/#supported-languages). To complete the code block, you must start a new line that only has three backticks and **another empty line**. See example below:
- Whitespace matters in Markdown, so we recommend that you make it visible in your editor.

**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

The following is an example of code:

````md
```{language}

[ТУТ МІСЦЕ ДЛЯ ВАШОГО КОДУ]

````
````

- Additional information in the form of a note should be surrounded by blank lines, and formatted: `**Note:** Rest of note text...`
- If multiple notes are needed, then list all of the notes in separate sentences using the format: `**Notes:** First note text. Second note text.`
- Use single quotes where applicable

**Note:** The equivalent _Markdown_ should be used in place of _HTML_ tags.

## Writing tests

Challenges should have the minimum number of tests necessary to verify that a camper understands a concept.

Our goal is to communicate the single point that the challenge is trying to teach, and test that they have understood that point.

Challenge tests can make use of the Node.js and Chai.js assertion libraries. Also, if needed, user-generated code can be accessed in the `code` variable. In addition, the `__helpers` object exposes several functions that simplify the process of writing tests. The available functions are defined in _client/src/utils/curriculum-helpers.ts_.

## Formatting Seed Code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable

### Seed Code Comments

We have a [comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) that contains the only comments that can be used within the seed code. The exact case and spacing of the dictionary comment must be used. The comment dictionary should not be expanded without prior discussion with the dev-team.

Comments used should have a space between the comment characters and the comment themselves. In general, comments should be used sparingly. Always consider rewriting a challenge's description or instructions if it could avoid using a seed code comment.

Example of a valid single-line JavaScript comment:

```js
// Only change code below this line
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
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <button>Click Me</button>
        {/* Change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

### Translation of Seed Code Comments

There are separate comment dictionaries for each language. The [English version of the comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.json`. Each dictionary consists of an array of objects with a unique `id` property and a `text` property. Only the `text` should be modified to encompass the translation of the corresponding English comment.

Some comments may contain a word/phrase that should not be translated. For example, variable names or proper library names like "React" should not be translated. See the comment below as an example. The word `myGlobal` should not be translated.

```text
Declare the myGlobal variable below this line
```

> [!NOTE]
> 
> We are working on an integration to make it possible to work on i18n for the comment dictionary.

## Hints and Solutions

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://forum.freecodecamp.org/c/contributors) on the forum. Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Adding new Challenge hints/solutions Topics

Take the following steps when adding a new challenge hints/solutions-related topic.

1. Start by following the same steps for creating a new topic but review the next for creating the title.
2. The title of the topic should start with `freeCodeCamp Challenge Guide:` concatenated with the actual title of the curriculum challenge. For example, if the challenge is named "`Chunky Monkey`", the topic title would be "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` should be the owner of these topics/posts, so you will need to request an admin to change the ownership of the main post to `camperbot`.
4. Once the new topic is created, a forum topic id is created. It is located at the end of the forum topic URL. This id must be added to the frontmatter of the curriculum challenge file via the normal pull request process for the `Get a Hint` button to link to the topic.

### Guidelines for Content of Hints and Solutions Topics

When proposing a solution for a curriculum challenge-related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests. The following template should be used when creating new hints/solutions topics:

````md
# Challenge Name Goes Here

---

## Problem Explanation

This summarizes what needs to be done without just restating the challenge description and/or instructions. This is an optional section

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Hints

### Hint 1

Hint goes here

### Hint 2

Hint goes here

---

## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
````

#### Code Explanation

- Code explanation goes here
- Code explanation goes here

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

</details>
````

## Testing Challenges

Before you [create a pull request](how-to-open-a-pull-request.md) for your changes, you need to validate that the changes you have made do not inadvertently cause problems with the challenge.

1. To test all challenges run the below command from the root directory

````
pnpm run test:curriculum
```

2. You can also test a block or a superblock of challenges with these commands

```
FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum
```

```
FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum
```

You are also able to test one challenge individually by performing the following steps:

1. Switch to the `curriculum` directory:

   ```
   cd curriculum
   ```

2. Run the following for each challenge file for which you have changed (replacing `challenge-title-goes-here` with the full title of the challenge):

   ```
   pnpm run test -- -g challenge-title-goes-here ```

Once you have verified that each challenge you've worked on passes the tests, [please create a pull request](how-to-open-a-pull-request.md).

> [!TIP] You can set the environment variable `LOCALE` in the `.env` to the language of the challenge(s) you need to test.
> 
> The currently accepted values are `english` and `chinese`, with `english` being set by default.

### Корисні посилання

Creating and Editing Challenges:

1. [Challenge types](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - what the numeric challenge type values mean (enum).

2. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the old version of the curriculum.

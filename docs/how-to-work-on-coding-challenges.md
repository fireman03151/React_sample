<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# How to work on coding challenges

Our goal is to develop a fun and clear interactive learning experience.

Designing interactive coding challenges is difficult. It would be much easier to write a lengthy explanation or to create a video tutorial, and there's a place for those on Medium and YouTube. However, for our core curriculum, we're sticking with what works best for most people - a fully interactive, video game-like experience.

We want campers to achieve a flow state. We want them to build momentum and blast through our curriculum with as few snags as possible. We want them to go into the projects with confidence and a wide exposure to programming concepts.

Creating these challenges requires immense creativity and attention to detail. But you'll have plenty of help. You have support from a whole team of contributors, whom you can bounce ideas off of and demo your challenges to. Stay active in the [contributors room](https://gitter.im/freecodecamp/contributors) and ask lots of questions.

With your help, we can design an interactive coding curriculum that will help millions of people learn to code for years to come.

The content for each challenge is stored in its own markdown file. This markdown file is later coverted using our tools, to webpage that you can interact with. You can find all of freeCodeCamp.org's curricular content in the [`/curriculum`](/curriculum) directory.

There are two ways you can work on these challenges:

- We recommend, you clone the project and edit locally on your computer. For help with that, read our [contributing guidelines here](/CONTRIBUTING.md).
- Or optionally, you can modify a challenge within the GitHub interface, by clicking the pencil icon to start editing the file.

## Challenge Template

Below is a template of what the challenge markdown files look like.

**Notes:**

1. In the below sections, examples of `{ext}` are:
    - `html` - HTML/CSS
    - `js` - JavaScript
    - `jsx` - JSX

2. For the `Tests` section below, `text` and `testString` should be valid YAML strings. `testString` can be a stringified function or expression possibly using Chai asserts.

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 0
videoUrl: 'url of video explanation'
---

## Description
<section id='description'>
A Description of the challenge and what is required to pass
</section>

## Instructions
<section id='instructions'>
Instructions about what exactly needs to be done.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: Should return "foo"
    testString: 'A stringified function possibly using Chai asserts'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Code displayed in the editor by default.

This is a required section for the challenge.
```

</div>

### Before Test
<div id='{ext}-setup'>

```{ext}
Optional Test setup code.
```

</div>

### After Test
<div id='{ext}-teardown'>

```{ext}
Optional Test tear down code.
```

</div>

</section>

## Solution
<section id='solution'>

```{ext}
// solution required
```

</section>
````

## Numbering Challenges

Every challenge needs an `id`. If you don't specify one, then MongoDB will create a new random one when it saves the data; however, we don't want it to do that, since we want the challenge ids to be consistent across different environments (staging, production, lots of different developers, etc.).

To generate a new one in a shell (assuming MongoDB is running separately):

1. Run `mongo` command
2. Run `ObjectId()` command

For example:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
```

The result is a new id, for example `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## Naming challenges

Naming things is hard. We've made it easier by imposing some constraints.

All challenge titles should be explicit and should follow this pattern:

[verb] [object clause]

Here are some example challenge names:

- Use Clockwise Notation to Specify the Padding of an Element
- Condense arrays with .reduce
- Use Bracket Notation to Find the First Character in a String


## Writing challenge descriptions/instructions

Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs over a wall of text.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way, the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. And campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if absolutely necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js
- Front-end development (adjective form with a dash) is when you're working on the front end (noun form with no dash). The same goes with "back end", "full stack", and many other compound terms.

### The 2-minute rule

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions/instructions, understand the seeded code, write their own code, and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:

- Simplify the challenge, or
- Split the challenge into two challenges.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straight-forward.

We have JavaScript events that track how long it takes for campers to solve challenges and we can use them to identify challenges that need to be simplified or split.

### Modularity

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

### Formatting challenge text

Here are specific formatting guidelines for challenge text and examples:

- Language keywords go in `<code>` tags. For example, HTML tag names or CSS property names
- The first instance of a keyword when it's being defined, or general keywords (i.e. "object" or "immutable") go in `<dfn>` tags
- References to code parts (i.e. function, method or variable names) should be wrapped in `<code>` tags. See example below:
- Use <code>parseInt</code> to convert the variable <code>realNumber</code> into an integer.
- Multi-line code blocks **must be preceded by an empty line**.  The next line must start with three backticks followed immediately by one of the [supported languages](https://prismjs.com/#supported-languages).  To complete the code block, you must start a newline which only has three backticks and **another empty line**.
**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

See example below:

````md
The following is an example of code:

```{language}

[YOUR CODE HERE]

```
````

- Additional information in the form of a note should be formatted `<strong>Note:</strong> Rest of note text...`
- If multiple notes are needed, then list all of the notes in separate sentences using the format `<strong>Notes:</strong> First note text.  Second note text.`.
- Use double quotes where applicable

## Writing tests

Challenges should have the minimum number of tests necessary to verify that a camper understands a concept.

Our goal is to communicate the single point that the challenge is trying to teach, and test that they have understood that point.

Challenge tests can make use of the Node.js and Chai.js assertion libraries. Also, if needed, user-generated code can be accessed in the `code` variable.

## Formatting seed code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable
- Comments made should have a space between the comment characters and the comment themselves

    `// Fix this line`

## Curriculum Challenge Hints and Solutions

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge.  Curriculum hints/solutions topics are located on [our forum](https://www.freecodecamp.org/forum/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://www.freecodecamp.org/forum/c/contributors) on the forum.  Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Adding new Challenge hints/solutions Topics

Take the following steps when adding a new challenge hints/solutions related topic.

1. Start by following the same steps for [creating a new topic](creating-a-new-guide-topic) but review the next for creating the title.
2. The title of the topic should start with "freeCodeCamp Challenge Guide: " concatenated with the actual title of the curriculum challenge. For example, if the challenge is named "Chunky Monkey", the topic title would be "freeCodeCamp Challenge Guide: Chunky Monkey".
3. `camperbot` should be the owner of these topics/posts, so you will need to request an admin to change the ownership of the main post to `camperbot`.
4. Once the new topic is created, a forum topic id is created.  It is located at the end of the forum topic URL.  This id must be added to the frontmatter of the curriculum challenge file via the normal pull request process for the `Get a Hint` button to link to the topic.

### Guidelines for content of hints and solutions topics

When proposing a solution for a curriculum challenge related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests.  The following template should be used when creating new hints/solutions topics:

````md
# Challenge Name Goes Here

---
## Problem Explanation

This summarizes what need to be done without just restating the challenge description and/or instructions.  This is an optional section

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
```

#### Code Explanation

- Code explanation goes here
- Code explanation goes here

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

</details>
````

## Testing Challenges

Before you [create a pull request](how-to-open-a-pull-request.md) for your changes, you need to validate that the changes you have made do not inadvertently cause problems with the challenge.  To test all challenges run `npm run test:curriculum`. To save time you can limit the tests to one challenge by performing the following steps:

1. In the `.env` file, set the environment variable `TEST_CHALLENGES_FOR_LANGS` to the language of the challenge(s) you need to test.  The currently accepted values are `english`, `arabic`, `chinese`, `portuguese`, `russian` and `spanish`.

2.  Switch to the `curriculum` directory:

```
  cd curriculum
```

3. Run the following for each challenge file for which you have changed any `testString`s or added solutions:

```
npm run test -- -g 'the full English title of the challenge'
```
    
Once you have verified that each challenge you've worked on passes the tests, please create a pull request.

### Useful Links

Creating and Editing Challenges:

1. [Challenge types](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - what the numeric challenge type values mean (enum).

2. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests ](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the old version of the curriculum

# A guide to designing freeCodeCamp coding challenges

> "Talk is cheap. Show me the code." — Linus Torvalds

freeCodeCamp offers 1,200 hours of interactive coding challenges. These are 100% focused on the practical skill of building software. You code the entire time. You learn to code by coding.

You can learn theory through free online university courses. freeCodeCamp will focus instead on helping you learn to code and practice by building apps.

With that practical focus in mind, let’s talk about the requirements for our coding challenges. Note that these requirements do not apply to our algorithm challenges, checkpoint challenges, or projects.

**Table of Contents**

- [Proper nouns](#proper-nouns)
- [The 2-minute rule](#the-2-minute-rule)
- [Modularity](#modularity)
- [Naming challenges](#naming-challenges)
- [Writing tests](#writing-tests)
- [Writing instructions](#writing-instructions)
- [Formatting challenge text](#formatting-challenge-text)
- [Formatting seed code](#formatting-seed-code)
- [Formatting solution](#formatting-solution)
- [Why do we have all these rules?](#why-do-we-have-all-these-rules)

## Proper nouns

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js
- Front-end development (adjective form with a dash) is when you're working on the front end (noun form with no dash). The same goes with "back end", "full stack", and many other compound terms.

## The 2-minute rule

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions, understand the seeded code, write their own code, and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:
- Simplify the challenge, or
- Split the challenge into two challenges.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straight-forward.

We have JavaScript events that track how long it takes for campers to solve challenges and we can use them to identify challenges that need to be simplified or split.

## Modularity

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

## Naming challenges

Naming things is hard. We've made it easier by imposing some constraints.

All challenge titles should be explicit and should follow this pattern:

[verb] [object clause]

Here are some example challenge names:

- Use Clockwise Notation to Specify the Padding of an Element
- Condense arrays with .reduce
- Use Bracket Notation to Find the First Character in a String

## Numbering Challenges

Every challenge needs an `id`. If you don't specify one, then MongoDB will create a new random one when it saves the data; however, we don't want it to do that, since we want the challenge ids to be consistent across different environments (staging, production, lots of different developers, etc.).

To generate a new one in a shell (assuming MongoDB is running separately):

1. Run `mongo` command
2. Run `ObjectId()` command

For example:

```sh
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

```
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```


## Writing tests

Challenges should have the minimum number of tests necessary to verify that a camper understands a concept.

Our goal is to communicate the single point that the challenge is trying to teach, and test that they have understood that point.

Challenge tests can make use of the Node.js and Chai.js assertion libraries. Also, if needed, user-generated code can be accessed in the `code` variable.

## Writing instructions

Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs over a wall of text.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way, the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. And campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if absolutely necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

## Formatting challenge text

Here are specific formatting guidelines for challenge text and examples:

- Language keywords go in `<code>` tags. For example, HTML tag names or CSS property names
- The first instance of a keyword when it's being defined, or general keywords (i.e. "object" or "immutable") go in `<dfn>` tags
- References to code parts (i.e. function, method or variable names) should be wrapped in `<code>` tags. See example below:

````
Use <code>parseInt</code> to convert the variable <code>realNumber</code> into an integer.
````
- Multi-line code blocks **must be preceded by an empty line**.  The next line must start with three backticks followed immediately by one of the [supported languages](https://prismjs.com/#supported-languages).  To complete the code block, you must start a newline which only has three backticks and **another empty line**.
**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.
See example below:
````
The following is an example of code:

```{language}

[YOUR CODE HERE]

```

````
- Additional information in the form of a note should be formatted `<strong>Note:</strong> Rest of note text...`
- If multiple notes are needed, then list all of the notes in separate sentences using the format `<strong>Notes:</strong> First note text.  Second note text.`.
- Use double quotes where applicable

## Formatting seed code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable
- Comments made should have a space between the comment characters and the comment themselves

    `// Fix this line`

## Formatting Solution

The challenge solution must be in proper markdown tags. The code must be wrapped in `section` tags with an id of `solution`.

````
<section id='solution'>

```html or ```js
 [ SOLUTION CODE]
```

</section>
````

Example:

````
<section id='solution'>

```html
<style>
  #container p {
    font-family: Arial, sans-serif;
  }
</style>

<div id="container">
  <p>Hello World!</p>
</div>
```

</section>
````

## Why do we have all these rules?

Our goal is to develop a fun and clear interactive learning experience.

Designing interactive coding challenges is difficult. It would be much easier to write a lengthy explanation or to create a video tutorial, and there's a place for those on Medium and YouTube. However, for our core curriculum, we're sticking with what works best for most people - a fully interactive, video game-like experience.

We want campers to achieve a flow state. We want them to build momentum and blast through our curriculum with as few snags as possible. We want them to go into the projects with confidence and a wide exposure to programming concepts.

Creating these challenges requires immense creativity and attention to detail. But you'll have plenty of help. You have support from a whole team of contributors, whom you can bounce ideas off of and demo your challenges to. Stay active in the [contributors room](https://gitter.im/freecodecamp/contributors) and ask lots of questions.

With your help, we can design an interactive coding curriculum that will help millions of people learn to code for years to come.

## Reply Templates for Moderators Reviewing Pull Requests

> You can make your own with GitHub's built-in [**Saved replies**](https://github.com/settings/replies/) feature or use the ones below.

### Thank you

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### Thank you and congrats

> For thanking and encouraging first-time contributors.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

### Build Error

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the Travis CI build. ⚠️

Once you resolve these issues, We will be able to review your PR and merge it. 😊

---

> Feel free to reference the [Style guide for writing articles](https://github.com/freeCodeCamp/freeCodeCamp#article-title) for this repo on formatting an article correctly so your Travis CI build passes. ✅
>
> Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
```

### Syncing Fork

> When PR is not up to date with the `master` branch.

``````markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the Travis CI build. ⚠️

```bash
Error: ENOTDIR: not a directory, open 'src/pages/java/data-abstraction/index.md'
```

This particular error was not caused by your file but was an old error caused by merging faulty code to the `master` branch. It has since been resolved.

To pass the build, you will have to sync the latest changes from the `master` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, We will be able to review your PR and merge it. 😊

---

> Feel free to reference the [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
>
> Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
``````

### Merge Conflicts

> When PR has merge conflicts that need to be resolved.¹

```markdown
Hey @username

We would love to be able to merge your changes but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, We will be able to review your PR and merge it. 😊

---

> If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️
>
> Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
```
¹ If a first-time-contributor has a merge conflict, maintainers will resolve the conflict for them.

### Duplicate

> When PR is repetitive or a duplicate.

```markdown
Hey @username

It seems that similar changes have already been accepted earlier for this article you are editing, sorry about that. 😓

If you feel you have more to add, please feel free to open up a new PR.

Thanks again! 😊

---

> If you have any questions, feel free to reach out through [Gitter](https://gitter.im/FreeCodeCamp/Contributors) or by commenting below. 💬
```

### Closing invalid pull requests

> When PR is invalid.

```markdown
Hey @username

You have not added any content, We will be closing this PR and marking it as `invalid`. 😓️

Feel free to open another PR though! 👍
```
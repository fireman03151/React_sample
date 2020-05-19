# Contribute to the freeCodeCamp.org Community

The [freeCodeCamp.org](https://freecodecamp.org) community is possible thanks to thousands of kind volunteers like you. We welcome any and all contributions to the community and are excited to welcome you aboard.

> [!NOTE]
> Before you proceed, please take a quick 2 minutes to read our [Code of Conduct](https://www.freecodecamp.org/code-of-conduct). We enforce it strictly across our community. We want contributing to freeCodeCamp.org to be a safe and inclusive experience for everyone.

Happy contributing.

## Our open source codebase

Our codebase has thousands of [coding challenges](https://www.freecodecamp.org/learn/) and other source code that power our learning platform.

You are welcome to:

- Create, update and fix bugs in our [coding challenges](#coding-challenges).
- Help us fix bugs in freeCodeCamp.org's [learning platform](#learning-platform).
- Help us translate freeCodeCamp.org to world languages.

### Coding Challenges

All our coding challenges are curated by the community, bringing in expert knowledge from volunteers like you.

You can help expand them and make their wording better. You can also update the user stories to explain the concept better or remove redundant ones and improve the challenge tests to make them more accurately test people's code.

**If you're interested in improving these coding challenges, here's [how to work on coding challenges](how-to-work-on-coding-challenges.md).**

### Learning Platform

Our learning platform runs on a modern JavaScript stack. It has various components, tools, and libraries, including but not limited to, Node.js, MongoDB, LoopBack, OAuth 2.0, React, Gatsby, Webpack, and more.

Broadly,

- We have a Node.js based API server.
- A set of React-based client applications.
- A script that we use to evaluate our front-end projects.

Contributing to this requires some understanding of APIs, ES6 Syntax, and a lot of curiosity.

Essentially, we expect basic familiarity with some of the aforementioned technologies, tools, and libraries. With that being said, you are not required to be an expert on them to contribute.

**If you want to help us improve our codebase, you can either [set up freeCodeCamp locally](how-to-setup-freecodecamp-locally.md)**

OR

**Use Gitpod, a free online dev environment.**

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

(Starts a ready-to-code dev environment for freeCodeCamp in your browser.)

## Frequently Asked Questions

### I am new to GitHub and Open Source, where should I start?

Read our [How to Contribute to Open Source Guide](https://github.com/freeCodeCamp/how-to-contribute-to-open-source).

### Where are the Guide articles (guide.freecodecamp.org)?

We have sunset the general guide articles. 

The guide articles redirect to high quality tutorials on freeCodeCamp news. 

The challenge hint articles  are available on the freeCodeCamp forum as hint topics. We have updated the links on our curriculum help button to point to the hint topics instead.

### Can I translate freeCodeCamp's curriculum?

Thanks for your interest in translating the curriculum.

Currently, we are only translating the curriculum into Chinese.

We do intend to make the curriculum available in more languages, but we do not have any deadlines for this. We have several operational limits like staff, active contributors and server costs. All these play a role in driving the internationalisation (i18n) efforts.

**Why are you focusing on Chinese curriculum first?**

China is the largest demographic regions, in our non-native English speaking audience. Currently, we have hundreds of thousands of users using an old version of the platform. This will give us an estimate of logistics involved in the i18n efforts to other languages.

We intend to start i18n efforts in these languages post the Chinese language launch: 

Arabic, Portuguese, Russian and Spanish (in no particular order). 

We will focus on Latin America as the demographic region for Portuguese and Spanish. 

We do not have any plans for i18n to any other languages other than the above for the foreseeable future.

You do not encourage you to work on i18n on the above languages. We may accept pull requests, without any expectation of any timelines on deployments.

### Can I translate freeCodeCamp's codebase documentation?

You are welcome to translate freeCodeCamp's codebase documentation into any language of your choice or improve and update the currently translated guidelines.

### How can I report a bug that is not on board?

If you think you've found a bug, first read the ["Help I've Found a Bug"](https://forum.freecodecamp.org/t/how-to-report-a-bug/19543) article and follow its instructions.

If you're confident it's a new bug, go ahead and create a new GitHub issue. Be sure to include as much information as possible so that we can reproduce the bug. We have a pre-defined issue template to help you through this.

Please note that any issues that seek coding help on a challenge will be closed. The issue tracker is strictly for codebase related issues and discussions. Whenever in doubt, you should [seek assistance on the forum](https://www.freecodecamp.org/forum) before making a report.

### How can I report a security issue?

Please don't create GitHub issues for security issues. Instead, please send an email to `security@freecodecamp.org` and we'll look into it immediately.

### I am a student, can I or our team work on a feature for academic credits?

Yes, sure.

While, we are open to all contributions, please note we are unable to commit to any timelines that may be a requirement at your college or university. All pull-requests and code contributions are reviewed by volunteer developers, and we respect their time and efforts. We will not be able to give any PR any special attention to be fair to all.

We request you to plan ahead and work on a feature with this in mind.

### What do these different labels that are tagged on issues mean?

Our community moderators [triage](https://en.wikipedia.org/wiki/Software_bug#Bug_management) issues and pull requests based on their priority, severity, and other factors. You can [find a complete glossary of their meanings here](https://github.com/freecodecamp/freecodecamp/labels).

### Where do I start if I want to work on an issue?

You should go through [**`help wanted`**](https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) or [**`first timers welcome`**](https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aopen+is%3Aissue+label%3A%22first+timers+welcome%22) issues for a quick overview of what is available for you to work on.

> [!TIP] These are up for grabs, and you do not need to seek permission before working on them. If these issues lack clarity on what needs to be done, feel free to ask questions in the comments.

### I found a typo, should I report an issue before I can make a pull request?

For typos and other wording changes, you can directly open pull requests without creating an issue first. Issues are more for discussing larger problems associated with code or structural aspects of the curriculum.

However, please mention details, context etc. in the pull request's description area to help us understand and review your contribution even for minor changes.

### How do I get an issue assigned to me?

We typically do not assign issues to anyone other than long-time contributors to avoid ambiguous no-shows. Instead, we follow the below policy to be fair to everyone:

1. The first pull request for any issue is preferred to be merged.
2. In the case of multiple pull requests for the same issue, we give priority to the quality of the code in the pull requests.
   - Did you include tests?
   - Did you catch all usecases?
   - Did you ensure all tests pass, and you confirmed everything works locally?
3. Finally, we favor pull requests which follow our recommended guidelines.
   - Did you follow the pull request checklist?
   - Did you name your pull request title meaningfully?

You do not need any permission for issues that are marked `help wanted` or `first timers welcome` as explained earlier.

Follow the guidelines carefully and open a pull request.

### I am stuck on something that is not included in this documentation.

**Feel free to ask for help in:**

- The "Contributors" category of [our community forum](https://www.freecodecamp.org/forum/c/contributors).
- Our public contributors [chat room on Gitter](https://gitter.im/FreeCodeCamp/Contributors).

We are excited to help you contribute to any of the topics that you would like to work on. Feel free to ask us questions on the related issue threads, and we will be glad to clarify. Make sure you search for your query before posting a new one.

Be polite and patient. Our community of volunteers and moderators are always around to guide you through your queries.

**Additional Assistance:**

If you have queries about the stack, architecture of the codebase, feel free to reach out to our staff dev team:

| Staff                | Send message on Gitter                                        | DM on Twitter                                         |
| :------------------- | :------------------------------------------------------------ | :---------------------------------------------------- |
| Mrugesh Mohapatra    | [@raisedadead](https://gitter.im/raisedadead)                 | [@raisedadead](https://twitter.com/raisedadead)       |
| Ahmad Abdolsaheb     | [@ahmadabdolsaheb](https://gitter.im/ahmadabdolsaheb)         | [@Abdolsaheb](https://twitter.com/Abdolsaheb)         |
| Kristofer Koishigawa | [@scissorsneedfoodtoo](https://gitter.im/scissorsneedfoodtoo) | [@kriskoishigawa](https://twitter.com/kriskoishigawa) |
| Tom Mondloc          | [@moT01](https://gitter.im/moT01)                             | -                                                     |

**You can email our developer staff at: `dev[at]freecodecamp.org`**

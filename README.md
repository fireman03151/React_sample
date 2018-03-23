# Challenges

The `seed` directory contains all the challenges that appear on the freeCodeCamp learning platform. 

For each challenge section, there is a JSON file (fields documented below) containing its name, seed HTML, tests, and so on. 

## Usage

|command|description|
|---|---|
| `npm run test-challenges` | run all challenge tests (for each challenge JSON file, run all `tests` against all `solutions`) |
| `npm run test` |  run all JS tests in the system, including client, server, lint and challenge tests |
| `npm run seed` <br>&nbsp;&nbsp;(<small>or</small> `node seed`) | parses all the challenge JSON files and saves them into MongoDB (code is inside [index.js](index.js)) |
| `npm run commit` | interactive tool to help you build a good commit message |
| `npm run unpack` | extract challenges from `seed/challenges` into `unpacked` subdirectory, one HTML page per challenge |
| `npm run repack` | repack challenges from `unpacked` subdirectory into `seed/challenges` |

### unpack and repack

`npm run unpack` extracts challenges into separate files for easier viewing and editing. The files are `.gitignore`d and will *not* be checked in, and all mongo seed importing will keep using the existing system; this is essentially a tool for editing `challenge.json` files. These HTML files are self-contained and run their own tests -- open a browser JS console to see the test results.

`npm run repack` gathers up the unpacked/edited HTML files into challenge-block JSON files. Use `git diff` to see the changes.

When editing the unpacked files, you must only edit lines between comment fences like `<!--description-->` and `<!--end-->`. In descriptions, you can insert a paragraph break with `<!--break-->`.

Unpacked lines that begin with `//--JSON:` are parsed and inserted verbatim.

## Links

* [Challenge Style Guide](challenge-style-guide.md) - how to create and format challenges
* [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests
](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the curriculum
* [Challenge schema](../common/models/challenge.json) - lists all of the fields inside challenge, and describes some of them
* [Challenge types](../common/ap/utils/challengeTypes.js) - what the numeric challenge type values mean (enum) 


## Challenge Template

```
{
  "id": "unique identifier (alphanumerical, mongodb id)",
  "title": "Challenge Title",
  "description": [
    "Challenge description.",
    "An new string in the array will create a new paragraph."
  ],
  "releasedOn": "date formatted like: January 1, 2016",
  "challengeSeed": [
    "// code displayed in the editor by default",
    "// a new string in the array is a new line"
  ],
  "solutions": [
    "at least one code solution that passes the tests below, used for automated testing (and inspiration for students)."
  ],
  "tests": [
    "an array of assert tests that check if the user's solution is working",
    "assert(aFunction('argument') === 'result', 'message: This message explains what the test is testing');",
  ],
  "type": "string identifying type of challenge. takes priority for viewType",
  "challengeType": "number identifying type of challenge (step, project, normal). takes priority for submitType",
  "isRequired": "boolean value that indicates whether challenge is required for certificate",
  "translations": {
    "language-code": {
      "title": "The Title in a Different Language",
      "description": [
        "The description in a different language."
      ]
    }
  }
},
```

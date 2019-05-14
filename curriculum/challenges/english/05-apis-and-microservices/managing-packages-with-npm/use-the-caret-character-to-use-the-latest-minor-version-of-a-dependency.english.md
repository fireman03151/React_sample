---
id: 587d7fb5367417b2b2512c03
title: Use the Caret-Character to Use the Latest Minor Version of a Dependency
challengeType: 2
---

## Description
<section id='description'>
Similar to how the tilde we learned about in the last challenge allows npm to install the latest PATCH for a dependency, the caret (<code>^</code>) allows npm to install future updates as well. The difference is that the caret will allow both MINOR updates and PATCHes.
Your current version of moment should be "~2.10.2" which allows npm to install to the latest 2.10.x version. If you were to use the caret (^) as a version prefix instead, npm would be allowed to update to any 2.x.x version.

```json
"package": "^1.3.8"
```

This would allow updates to any 1.x.x version of the package.
</section>

## Instructions
<section id='instructions'>
Use the caret (<code>^</code>) to prefix the version of moment in your dependencies and allow npm to update it to any new MINOR release.
<strong>Note:</strong> The version numbers themselves should not be changed.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"dependencies" should include "moment"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '"moment" version should match "^2.x.x"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\^2\./, ''Wrong version of "moment". It should be ^2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

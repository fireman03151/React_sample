---
id: 587d8249367417b2b2512c42
title: Issue Tracker
challengeType: 4
isRequired: true
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://protective-garage.glitch.me/' target='_blank'>https://protective-garage.glitch.me/</a>.
Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Glitch using <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-issuetracker/'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-issuetracker/'>this repository</a> on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Prevent cross site scripting (XSS) attacks.
    testString: ''
  - text: I can POST /api/issues/{projectname} with form data containing required issue_title, issue_text, created_by, and optional assigned_to and status_text.
    testString: ''
  - text: The object saved (and returned) will include all of those fields (blank for optional no input) and also include created_on(date/time), updated_on(date/time), open(boolean, true for open, false for closed), and _id.
    testString: ''
  - text: I can PUT /api/issues/{projectname} with a id and any fields in the object with a value to object said object. Returned will be 'successfully updated' or 'could not update '+id. This should always update updated_on. If no fields are sent return 'no updated field sent'.
    testString: ''
  - text: 'I can DELETE /api/issues/{projectname} with a id to completely delete an issue. If no _id is sent return ''id error'', success: ''deleted ''+id, failed: ''could not delete ''+id.'
    testString: ''
  - text: I can GET /api/issues/{projectname} for an array of all issues on that specific project with all the information for each issue as was returned when posted.
    testString: ''
  - text: I can filter my get request by also passing along any field and value in the query(ie. /api/issues/{project}?open=false). I can pass along as many fields/values as I want.
    testString: ''
  - text: All 11 functional tests are complete and passing.
    testString: ''

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

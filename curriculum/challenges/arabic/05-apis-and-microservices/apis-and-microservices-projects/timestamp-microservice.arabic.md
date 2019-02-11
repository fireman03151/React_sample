---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
localeTitle: Timestamp Microservice
challengeType: 4
isRequired: true
---

## Description
<section id='description'> 
بإنشاء تطبيق جافا سكريبت كامل المكدس الذي يشبه وظيفيًا ما يلي: <a href='https://curse-arrow.glitch.me/' target='_blank'>https://curse-arrow.glitch.me/</a> . 
سيشركك العمل في هذا المشروع في كتابة شفرتك على Glitch في مشروعنا المبدئي. بعد الانتهاء من هذا المشروع ، يمكنك نسخ عنوان URL الافتراضي الخاص بك (إلى الصفحة الرئيسية لتطبيقك) في هذه الشاشة لاختباره! اختياريًا ، يمكنك اختيار كتابة مشروعك على نظام أساسي آخر ، ولكن يجب أن يكون مرئيًا بشكل عام لاختبارنا. 
ابدأ هذا المشروع على خلل باستخدام <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-timestamp/' target='_blank'>هذا الرابط</a> أو استنساخ <a href='https://github.com/freeCodeCamp/boilerplate-project-timestamp/'>هذا المستودع</a> على GitHub! إذا كنت تستخدم خلل ، تذكر لحفظ الرابط لمشروعك في مكان آمن! 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "يجب أن يتعامل مع تاريخ صالح ، ويعيد الطابع الزمني الصحيح لـ unix"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.unix, 1482624000000, ''Should be a valid unix timestamp''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "يجب أن يتعامل مع تاريخ صالح ، وإرجاع سلسلة UTC الصحيحة"
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.utc, ''Sun, 25 Dec 2016 00:00:00 GMT'', ''Should be a valid UTC date string''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "يجب أن يتعامل مع تاريخ unix صالح ، ويعيد الطابع الزمني الصحيح لـ unix"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/1482624000000'').then(data => { assert.equal(data.unix, 1482624000000) ;  }, xhr => { throw new Error(xhr.responseText); })'
  - text: يجب أن ترجع رسالة الخطأ المتوقعة لتاريخ غير صالح
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/this-is-not-a-date'').then(data => { assert.equal(data.error.toLowerCase(), ''invalid date'');}, xhr => { throw new Error(xhr.responseText); })'
  - text: "يجب معالجة معلمة تاريخ فارغة ، وإرجاع الوقت الحالي بتنسيق unix"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); assert.approximately(data.unix, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'
  - text: "يجب أن يتعامل مع معلمة تاريخ فارغة ، وإرجاع الوقت الحالي بتنسيق UTC"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); var serverTime = (new Date(data.utc)).getTime(); assert.approximately(serverTime, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'

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

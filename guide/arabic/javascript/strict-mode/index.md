---
title: Strict Mode
localeTitle: الوضع الصارم
---
تم تقديم الوضع الصارم في ECMAScript 5 والذي يسمح لك بوضع برنامج أو وظيفة في سياق تشغيل "صارم". هذا السياق الصارم يمنع اتخاذ إجراءات معينة ويلقي المزيد من الاستثناءات.

يجعل الوضع المقيد العديد من التغييرات على دلالات JavaScript السليمة.

*   أولاً ، يحذف الوضع المقيد بعض أخطاء جافا سكريبت الصامتة عن طريق تغييرها لرمي الأخطاء.
*   ثانيًا ، يعمل الوضع المتشدد على إصلاح الأخطاء التي تجعل من الصعب على محركات جافا سكريبت إجراء عمليات التحسين: يمكن أحيانًا جعل رمز الوضع الصارم يتم تشغيله بشكل أسرع من الشفرة المتطابقة التي لا تتسم بوضعًا صارمًا.
*   ثالثًا ، يحظر الأسلوب المقيد بعض الجمل التي من المحتمل أن يتم تعريفها في الإصدارات المستقبلية من ECMAScript.

يمكن أن تتعايش شفرة الأسلوب الصارم ورمز الوضع غير المقيد في نفس البرنامج النصي.

```javascript
// Non-strict code...

(function(){
    "use strict";

    // Define your library strictly...
})();

// Non-strict code...
``` 

## استدعاء وضع صارم

ينطبق الوضع الصارم على _النصوص الكاملة_ أو على _الوظائف الفردية_ .

**وضع صارم للنصوص**

```javascript
// Whole-script strict mode syntax

"use strict";
var v = "Hi!  I'm a strict mode script!";
``` 

**وضع صارم للوظائف**

```javascript
function strict(){
    // Function-level strict mode syntax

    'use strict';
    function nested() { return "And so am I!"; }
    return "Hi!  I'm a strict mode function!  " + nested();
}

function notStrict() { return "I'm not strict."; }
``` 

**في الأساس ، يساعدك على ارتكاب أخطاء أقل ، من خلال اكتشاف الأشياء التي قد تؤدي إلى حدوث كسر والتي لا يتم اكتشافها بشكل طبيعي (الوضع غير الصارم).**

_لمزيد من المعلومات ، راجع [صفحة MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode) هذه._
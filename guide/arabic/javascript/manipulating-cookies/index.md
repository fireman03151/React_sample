---
title: Manipulating Cookies
localeTitle: التلاعب الكوكيز
---
## التلاعب الكوكيز

يعد الحصول على ملفات تعريف الارتباط أو إعدادها عملية مباشرة يمكن تحقيقها عن طريق الوصول إلى خاصية ملفات تعريف الارتباط في كائن مستند المستعرض.

تجد موقعًا وصفة مدهشة وغنية بالمعلومات لطهي وجبة أجنبية لضيوفك ولكنها باللغة الأجنبية ، ولحسن الحظ يمكنك تغيير اللغة على الموقع الإلكتروني للموقع باستخدام قائمة اختيار منسدلة. بعد يومين ، تزور الموقع نفسه مرة أخرى لعمل طبق لأمك ، لكنك الآن ترى موقع الويب بلغتك الأصلية بشكل افتراضي.

_يتذكر موقع الويب اللغة التي حددتها في زيارتك الأخيرة ويخزنها في صورة **ملف تعريف ارتباط** . الآن اخترت تلقائيا لغتك المفضلة عن طريق قراءة ملف تعريف الارتباط هذا._

`userLanguage:french`

يتم استخدام ملفات تعريف الارتباط لتخزين البيانات في شكل `name:value` زوج `name:value` على جانب العميل. وهو يسمح لمستخدم معين بتخزين معلومات محددة على موقع الويب على المتصفح لاستخدامها لاحقًا. يمكن أن تكون المعلومات المخزنة `sessionID` ، `userCountry` ، `visitorLanguage` وما إلى ذلك.

طريقة أخرى لتخزين البيانات على جانب العميل هي `localstorage` .

### تعيين ملف تعريف الارتباط

يمكن تعيين ملف تعريف ارتباط باستخدام البنية أدناه ، ولكن ينصح بشدة بمكتبة ، مثل المكتبة المذكورة في النهاية ، لجعل التطوير أكثر سهولة على الجميع. أثناء تعيين ملف تعريف الارتباط ، يمكنك تعيين انتهاء الصلاحية له أيضًا. إذا تم تخطي ملف تعريف الارتباط ، فسيتم مسحه عند إغلاق المتصفح.

**ضع في اعتبارك أن ملف تعريف الارتباط الذي تم تعيينه بواسطة نطاق معين لا يمكن قراءته إلا من خلال ذلك النطاق والنطاقات الفرعية فقط.**

```javascript
// Using vanilla javascript
document.cookie = 'userLanguage=french; expires=Sun, 2 Dec 2017 23:56:11 UTC; path=/';

//Using JS cookie library
Cookies.set('userLanguage', 'french', { expires: 7, path: '/' });
``` 

_تنتهي صلاحية ملف تعريف الارتباط في 7 أيام_

### احصل على ملفات تعريف الارتباط

```javascript
// Using vanilla javascript
console.log(document.cookie)

// => "_ga=GA1.2.1266762736.1473341790; userLanguage=french"

// Using JS cookie library
Cookies.get('userLanguage');

// => "french"
``` 

### حذف ملف تعريف الارتباط

لحذف ملف تعريف ارتباط ، يتم تعيين تاريخ انتهاء الصلاحية إلى شيء ما في الماضي.

```javascript
// Using vanilla javascript
document.cookie = 'userLanguage; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';

//Using JS cookie library
Cookies.remove('userLanguage');
``` 

_إذا وجدت نفسك تتعامل مع ملفات تعريف الارتباط كثيرًا في مشروعك ، فالرجاء استخدام مكتبة مثل [JS Cookie](https://github.com/js-cookie/js-cookie) وحفظ وقتًا كبيرًا من الوقت._

#### معلومات اكثر:

*   [وأوضح كوكي](https://www.quirksmode.org/js/cookies.html)
*   [دليل MDN كوكي](https://developer.mozilla.org/en-US/docs/Web/API/document/cookie)
*   [Udacity كوكي فيديو](https://www.youtube.com/watch?v=xdH9zsW1CK0)
*   [ملفات تعريف الارتباط HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
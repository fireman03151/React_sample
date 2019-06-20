---
title: Streams
localeTitle: تيارات
---
## تيارات

تتوفر التدفقات في واجهة برمجة تطبيقات Node.js الأساسية ككائنات تسمح للبيانات بقراءة أو الكتابة بطريقة مستمرة. في الأساس ، يقوم التيار بعمل ذلك في أجزاء مقارنة بالمخزن المؤقت الذي يقوم بتثبيته قليلاً ، مما يجعله عملية بطيئة.

هناك أربعة أنواع من التدفقات المتاحة:

*   مقروء (تدفقات يتم من خلالها قراءة البيانات)
*   قابل للكتابة (التدفقات التي تتم كتابة البيانات إليها)
*   Duplex (تدفقات قابلة للقراءة والكتابة على حد سواء)
*   تحويل (دفق دوبلكس يمكنه تعديل البيانات أثناء قراءتها وكتابتها)

كل نوع متاح له عدة طرق مقترنة. بعض من تلك الشائعة هي:

*   البيانات (يتم تشغيلها عند توفر البيانات)
*   نهاية (يتم تشغيل هذا عند عدم وجود بيانات متبقية للقراءة)
*   خطأ (هذا يعمل عند وجود خطأ إما تلقي أو كتابة البيانات)

### يضخ

في البرمجة ، مفهوم `pipe` ليس جديدًا. تستخدم أنظمة Unix القائمة بشكل عملي منذ السبعينيات. ماذا يفعل الأنبوب؟ يربط `pipe` المصدر والوجهة بشكل عام. يمر الناتج من وظيفة واحدة كمدخل لوظيفة أخرى.

في Node.js ، يتم استخدام `pipe` بنفس الطريقة ، لربط المدخلات والمخرجات من العمليات المختلفة. يتوفر `pipe()` كدالة تأخذ تيار مصدر مقروء وتربط الإخراج إلى تيار وجهة. يمكن تمثيل الصيغة العامة على النحو التالي:

```javascript
src.pipe(dest);
``` 

يمكن أيضاً ربط الدالات متعددة `pipe()` معاً.

```javascript
a.pipe(b).pipe(c);

// which is equivalent to

a.pipe(b);
b.pipe(c);
``` 

### تيارات مقروءة

تعرف التدفقات التي تنتج البيانات التي يمكن إرفاقها كإدخال إلى دفق للكتابة على أنه دفق مقروء. لإنشاء دفق مقروء:

 ``const { Readable } = require('stream'); 
 
 const readable = new Readable(); 
 
 readable.on('data', chunk => { 
  console.log(`Received ${chunk.length} bytes of data.`); 
 }); 
 readable.on('end', () => { 
  console.log('There will be no more data.'); 
 }); 
`` 

### تيار قابل للكتابة

هذا هو نوع دفق يمكنك `pipe()` البيانات إليه من مصدر قابل للقراءة. لإنشاء تيار قابل للكتابة ، لدينا نهج منشئ. نقوم بإنشاء كائن منه ونمرر عددًا من الخيارات. تأخذ هذه الطريقة ثلاث حجج:

*   القطعة: مخزن مؤقت
*   الترميز: لتحويل البيانات إلى نموذج قابل للقراءة من قبل الإنسان
*   رد الاتصال: دالة يتم استدعاؤها عند الانتهاء من معالجة البيانات من القطعة

```javascript
const { Writable } = require('stream');
const writable = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(writable);
``` 

### تيارات دوبلكس

تيارات البث المزدوجة تساعدنا على تنفيذ كل من الدفق القابل للقراءة والكتابة في نفس الوقت.

```javascript
const { Duplex } = require('stream');

const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },

  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
});

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);
``` 

`stdin` قطار `stdin` البيانات القابلة للقراءة إلى الدفق المزدوج. يساعدنا `stdout` على رؤية البيانات. تعمل الأجزاء القابلة للقراءة والكتابة في الدفق المزدوج بشكل مستقل تمامًا عن بعضها البعض.

### تحويل دفق

هذا النوع من الدفق هو أكثر من إصدار متقدم من الدفق المزدوج.

```javascript
const { Transform } = require('stream');

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);
``` 

البيانات التي نستهلكها هي نفس المثال السابق للدفق المزدوج. إن ما نلاحظه هنا هو أن `transform()` لا يتطلب تنفيذ أساليب `read` أو `write` . يجمع بين كل من الأساليب نفسها.

### لماذا استخدام Streams؟

نظرًا لأن Node.js غير متزامن بحيث يتفاعل من خلال تمرير الاسترجاعات إلى وظائف مع القرص والشبكة. يقرأ المثال الموجود أدناه البيانات من ملف على القرص ويستجيب إلى طلب الشبكة من العميل.

```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('data.txt', (err, data) => {
    res.end(data);
  });
});
server.listen(8000);
``` 

سيعمل مقتطف الشفرة الموضح أعلاه ولكن البيانات الكاملة من الملف ستدخل أولاً إلى الذاكرة لكل طلب قبل كتابة النتيجة مرة أخرى لطلب العميل. إذا كان الملف الذي نقرأه كبيرًا جدًا ، فقد يصبح هذا اتصالًا للخادم ثقيلًا ومكلفًا للغاية ، حيث سيستهلك الكثير من الذاكرة لعملية التقدم. ستعاني أيضًا تجربة المستخدم على جانب العميل من التأخير.

في هذه الحالة ، إذا استخدمنا الدفق ، سيتم إرسال البيانات إلى طلب العميل كقطعة واحدة في كل مرة بمجرد تلقيها من القرص.

```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('data.txt');
  stream.pipe(res);
});
server.listen(8000);
``` 

يعتني `pipe()` هنا بالكتابة أو في حالتنا ، وإرسال البيانات مع كائن الاستجابة وبمجرد قراءة كل البيانات من الملف ، لإغلاق الاتصال.

ملاحظة: يتم إنشاء `process.stdin` و `process.stdout` في تدفقات في كائن `process` التي يوفرها Node.js API.
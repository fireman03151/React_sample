---
title: Confirm the Ending
localeTitle: تأكيد الانتهاء
---
## تأكيد الانتهاء

# 🌻 حل الشفرة الوسيطة:

(النهج التعريفي)

 `function confirmEnding(str, target) { 
  // "Never give up and good luck will find you." 
  // -- Falcor 
 
  return str.slice(str.length - target.length) === target; 
 } 
 
 confirmEnding("He has to give me a new name", "name"); 
` 


# شرح الشفرة:

*   أولا نستخدم طريقة `slice` نسخ السلسلة.
*   من أجل الحصول على الأحرف الأخيرة في `str` مساوية لطول `target` ، نستخدم طريقة `slice` .
*   المعلمة الأولى داخل أسلوب `slice` هي فهرس البدء والمعلمة الثانية هي فهرس النهاية.
*   على سبيل المثال `str.slice(10, 17)` `give me` .
*   في هذه الحالة ، نقوم فقط بتضمين معلمة واحدة والتي ستقوم بنسخ كل شيء منها من فهرس البدء.
*   سنقوم بربط طول `str` وطول `target` ، وبهذه الطريقة ، سنحصل على الأحرف المتبقية المتبقية مساوية لطول `target` .
*   وأخيرًا ، نقارن نتيجة إرجاع شريحة `target` وتحقق مما إذا كان لديهم نفس الأحرف.

### روابط ذات صلة

*   [String.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
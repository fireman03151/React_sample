---
title: Inventory Update
localeTitle: تحديث المخزون
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

في هذه المشكلة ، يتعين عليك مقارنة المخزون الذي تم تخزينه في صفيف ثنائي الأبعاد وتحديثه مقابل مصفوفة ثنائية الأبعاد ثانية من التسليم الجديد. قم بتحديث كميات بند المخزون الحالية الموجودة (في `arr1` ). إذا تعذر العثور على عنصر ، فأضف العنصر والكمية الجديدة إلى مصفوفة المخزون. يجب أن يكون صفيف المخزون الذي تم إرجاعه بترتيب أبجدي حسب العنصر.

سيكون المخزون الحالي والجديد بهذا التنسيق: `[[2, "item-0"], [3, "item-1"], [67, "item-2"], [7, "item-3"]]` .

#### روابط ذات صلة

*   [JS المصفوفة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

تحتاج إلى العمل من خلال كل عنصر من المخزون الجديد لمعرفة ما إذا كان موجودًا في المخزون الحالي أم لا. تذكر أنه يتم تخزين اسم المنتج كعنصر ثانٍ لكل صفيف فرعي: `array[0][1] = "item-name"` .

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

إذا كان العنصر موجودًا ، فستحتاج إلى إضافة الكمية من المخزون الجديد. إذا كان العنصر غير موجود ، فستحتاج إلى إضافة العنصر بأكمله.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

إعادة المخزون المكتمل حسب الترتيب الأبجدي.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function updateInventory(arr1, arr2) { 
 
        // Variable for location of product 
        var index; 
 
        // A helper method to return the index of a specified product (undefined if not found) 
        var getProductIndex = function (name) { 
            for (var i = 0; i < this.length; i++) { 
                if (this[i][1] === name) { 
                    return i; 
                } 
            } 
            return undefined; 
        } 
 
        // For each item of the new Inventory 
        for (var i = 0; i < arr2.length; i++) { 
 
            // Invoke our helper function using arr1 as this 
            index = getProductIndex.call(arr1, arr2[i][1]); 
 
            // If the item doesn't exist 
            if (index === undefined) { 
                // Push the entire item 
                arr1.push(arr2[i]); 
            } else { 
                // Add the new quantity of the current item 
                arr1[index][0] += arr2[i][0]; 
            } 
 
        } 
 
        // Sort alphabetically, by the product name of each item 
        arr1.sort(function (a, b) { 
            if (a[1] > b[1]) { 
                return 1; 
            } 
            if (a[1] < b[1]) { 
                return -1; 
            } 
            return 0; 
        }); 
 
        return arr1; 
    } 
 
    // test here 
    // Example inventory lists 
    var curInv = [ 
        [21, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [1, "Hair Pin"], 
        [5, "Microphone"] 
    ]; 
 
    var newInv = [ 
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"] 
    ]; 
 
    updateInventory(curInv, newInv); 
` 


### شرح الشفرة:

*   يخزن **مؤشر** المتغير موقع (فهرس) منتج.
*   `getProductIndex()` دالة المساعد `getProductIndex()` فهرس المنتج المحدد. يتكرر خلال كل عنصر من المصفوفة التي يتم استدعاؤها حتى يمكن العثور على معلمة الاسم. إذا لم يتم العثور على المنتج في المخزون ، يتم إرجاع غير `undefined` .
*   ثم ، يتم عمل كل عنصر في المخزون الجديد (التسليم) من خلال:
*   تم تعيين **الفهرس** على نتيجة استدعاء دالة المساعد ، أي البحث في المستودع الجديد عن اسم هذا المنتج وإعادته إلى الفهرس.
*   إذا تم العثور على العنصر ، يتم إضافة كمية المنتج إلى كمية نفس المنتج في المخزون الحالي.
*   إذا لم يتم العثور على العنصر ، فسيتم إضافة المنتج بالكامل (الاسم والكمية) إلى المخزون الحالي.
*   ثم يتم فرز المخزون المحدث ، **arr1** ، حسب اسم المنتج (يُعقد في `arr1[x][1]` ).
*   ثم يتم إرجاع الصفيف النهائي - تحديث وكذلك فرزها.

#### روابط ذات صلة

*   [شبيبة هذا](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS Array.prototype.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array.prototype.sort ()](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `    function updateInventory(arr1, arr2) { 
      // All inventory must be accounted for or you're fired! 
 
      var index; 
      var arrCurInvName = []; // Names of arr1's items 
      var arrNeInvName = []; // Names of arr2's items 
 
      // Same as using two for loops, this takes care of increasing the number of stock quantity. 
      arr1.map(function(item1) { 
        return arr2.map(function(item2) { 
          if (item1[1] === item2[1]) { 
            item1[0] = item1[0] + item2[0]; //Increase number of stock 
          } 
        }); 
      }); 
 
      // Get item's name for new Inventory 
      arr2.map(function(item) { 
        arrNeInvName.push(item[1]); 
      }); 
 
      // Get item's name for Current Inventory 
      arr1.map(function(item) { 
        arrCurInvName.push(item[1]); 
      }); 
 
      // Add new inventory items to current inventory. 
      arrNeInvName.map(function(item) { 
        if (arrCurInvName.indexOf(item) === -1) { 
          index = arrNeInvName.indexOf(item); 
          arr1.push(arr2[index]); 
        } 
      }); 
 
      // Sort the array alphabetically using the second element of the array as base. 
      arr1.sort(function(currItem, nextItem) { 
 
        //Ternary function to avoid using if else 
        return currItem[1] > nextItem[1] ? 1 : -1; 
      }); 
 
      return arr1; 
    } 
 
    // test here 
    // Example inventory lists 
    var curInv = [ 
        [21, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [1, "Hair Pin"], 
        [5, "Microphone"] 
    ]; 
 
    var newInv = [ 
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"] 
    ]; 
 
    updateInventory(curInv, newInv); 
` 


### شرح الشفرة:

*   يخزن **مؤشر** المتغير موقع (فهرس) منتج.
*   لدى **arrCurInvName** أسماء عناصر **arr1** .
*   لدى **arrNeInvName** أسماء عناصر **arr2** .
*   `arr1.map(function(item1))` تعتني بالعناصر الموجودة بالفعل في المخزون ، أي أنها تزيد الكمية في المخزون.
*   المقبل ، `arr2.map(function(item))` و `arr1.map(function(item))` الحصول على أسماء العناصر للمخزون الجديد والحالي على التوالي.
*   `arrNeInvName.map(function(item))` يعالج العناصر التي لا توجد بالفعل في المخزون أي ، يضيف عناصر جديدة إلى المخزون.
*   ثم يتم فرز الصفيف المحدّث **arr1** أبجديًا حسب اسم المنتج ( `arr1[x][1]` في `arr1[x][1]` ) ويُعاد.

#### روابط ذات صلة

*   [JS Array.prototype.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [JS Array.prototype.indexOf ()](http://forum.freecodecamp.com/t/javascript-array-prototype-indexof/14291)
*   [مشغل JS الثلاثي](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `    function updateInventory(arr1, arr2) { 
      // All inventory must be accounted for or you're fired! 
 
      // convert current inventory (arr1) to an one-dimensional array 
      const inventory = Array.prototype.concat.apply([], arr1); 
 
      // loop through new delivery (arr2) 
      for (let i = 0; i < arr2.length; i++) { 
 
        // extract item properties for easy reference 
        const item = arr2[i][1]; 
        const quantity = arr2[i][0]; 
 
        // check if item already exists in inventory 
        const position = inventory.indexOf(item); 
 
        // exsisting item: update quantity 
        if (position !== -1) { 
          const row = Math.floor(position / 2); 
          arr1[row][0] += quantity; 
          continue; 
        } 
 
        // alien item: add to inventory 
        arr1.push([quantity, item]); 
 
      } 
 
      // sort inventory in alphabetical order 
      arr1.sort((previous, next) => (previous[1] > [next[1]]) ? 1 : -1); 
 
      return arr1; 
 
    } 
 
 
    // test here 
    // Example inventory lists 
    var curInv = [ 
        [21, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [1, "Hair Pin"], 
        [5, "Microphone"] 
    ]; 
 
    var newInv = [ 
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"] 
    ]; 
 
    updateInventory(curInv, newInv); 
` 


### شرح الشفرة:

*   تحويل صفيف المخزون الحالي **arr1** إلى مصفوفة أحادية البعد من أجل استخدام طريقة `indexOf()` للتحقق من وجود عناصر التسليم الجديدة في المخزون الحالي.
*   تحقق مما إذا كان العنصر موجودًا بالفعل في المخزون الحالي باستخدام `indexOf()` .
*   في حالة وجود عنصر تحديث الكمية ومتابعة تنفيذ حلقة.
*   آخر إلحاق البند إلى المخزون.
*   وأخيرًا ، قم بفرز الترتيب أبجديًا وإرجاع المخزون المحدث.

#### روابط ذات صلة

*   [JS Function.prototype.apply ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [شبيبة المتابعة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [JS Array.prototype.sort ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.

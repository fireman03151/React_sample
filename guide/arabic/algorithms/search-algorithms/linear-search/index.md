---
title: Linear Search
localeTitle: بحث خطي
---
## بحث خطي

لنفترض أنك حصلت على قائمة أو مجموعة من العناصر. أنت تبحث عن عنصر معين. كيف تفعل ذلك؟

ابحث عن الرقم 13 في القائمة المحددة.

![بحث خطي 1](https://cdn-media-1.freecodecamp.org/imgr/ThkzYEV.jpg)

أنت تنظر فقط إلى القائمة وهناك!

![بحث خطي 2](https://cdn-media-1.freecodecamp.org/imgr/K7HfCly.jpg)

الآن ، كيف تخبر كمبيوتر للعثور عليه.

لا يمكن للكمبيوتر النظر إلى أكثر من قيمة في نفس الوقت. لذلك يأخذ عنصر واحد من الصفيف والتحقق مما إذا كان هو نفسه ما كنت أبحث عنه.

![بحث خطي 3](https://cdn-media-1.freecodecamp.org/imgr/ZOSxeZD.jpg)

العنصر الأول لم يتطابق. لذلك انتقل إلى المرحلة التالية.
الوقت
![بحث خطي 4](https://cdn-media-1.freecodecamp.org/imgr/SwKsPxD.jpg)

وما إلى ذلك وهلم جرا…

يتم ذلك حتى يتم العثور على تطابق أو حتى يتم التحقق من كافة العناصر.

![بحث خطي 5](https://cdn-media-1.freecodecamp.org/imgr/3AaViff.jpg)

في هذه الخوارزمية ، يمكنك التوقف عند العثور على العنصر ، ومن ثم لن تكون هناك حاجة للنظر إلى أبعد من ذلك.

ما هي المدة التي تستغرقها عملية البحث الخطي؟ في أفضل الأحوال ، يمكن أن تحصل على الحظ والعنصر الذي تبحث عنه ربما في الموضع الأول في الصفيف! ولكن في أسوأ الحالات ، يجب عليك النظر في كل عنصر قبل أن تجد العنصر في المكان الأخير أو قبل أن تدرك أن العنصر ليس في الصفيف.

ومن ثم يكون التعقيد في البحث الخطي هو: O (n).

إذا كان العنصر المراد البحث عنه يترأس في أول كتلة ذاكرة ، فإن التعقيد سيكون: O (1).

يظهر رمز وظيفة البحث الخطي في JavaScript أدناه. هذه الدالة تقوم بإرجاع موضع العنصر الذي نبحث عنه في المصفوفة. إذا كان العنصر غير موجود في الصفيف ، ستقوم الدالة بإرجاع فارغة.

### مثال في Javascript

 `function linearSearch(arr, item) { 
  // Go through all the elements of arr to look for item. 
  for (var i = 0; i < arr.length; i++) { 
    if (arr[i] === item) { // Found it! 
      return i; 
    } 
  } 
 
  // Item not found in the array. 
  return null; 
 } 
` 

### مثال في روبي

```ruby
def linear_search(target, array)
  counter = 0

  while counter < array.length
    if array[counter] == target
      return counter
    else
      counter += 1
    end
  end
  return nil
end
``` 

### مثال في C ++

 `int linear_search(int arr[],int n,int num) 
 { 
    for(int i=0;i<n;i++){ 
        if(arr[i]==num) 
            return i; 
   } 
   // Item not found in the array 
   return -1; 
 } 
` 

### مثال في بايثون

 `def linear_search(array, num): 
    for i in range(len(array)): 
        if (array[i]==num): 
            return i 
    return -1 
` 

## بحث خطي عالمي

ماذا لو كنت تبحث عن تكرارات متعددة لعنصر ما؟ على سبيل المثال ، ترغب في معرفة عدد 5 في صفيف.

الهدف = 5

المصفوفة = \[1 ، 2 ، 3 ، 4 ، 5 ، 6 ، 5 ، 7 ، 8 ، 9 ، 5\]

يحتوي هذا الصفيف على 3 مرات من 5s ونريد إرجاع الفهارس (حيث توجد في المصفوفة) لجميعهم. وهذا ما يسمى بالبحث الخطي العالمي ، وستحتاج إلى ضبط شفرتك لإرجاع مصفوفة من نقاط الفهرسة التي يعثر فيها على عنصر الهدف. عند العثور على عنصر فهرس يطابق الهدف ، ستتم إضافة نقطة الفهرس (العداد) في مصفوفة النتائج. إذا لم يتطابق مع الرمز ، فستستمر في الانتقال إلى العنصر التالي في الصفيف بإضافة 1 إلى العداد.

```ruby
def global_linear_search(target, array)
  counter = 0
  results = []

  while counter < array.length
    if array[counter] == target
      results << counter
      counter += 1
    else
      counter += 1
    end
  end

  if results.empty?
    return nil
  else
    return results
  end
end
``` 

## لماذا البحث الخطي غير فعال

ليس هناك شك في أن البحث الخطي بسيط ، لكن لأنه يقارن كل عنصر واحدًا تلو الآخر ، فهو يستغرق وقتًا طويلاً وبالتالي لا يكون فعالًا كثيرًا. إذا كان علينا العثور على رقم من القول ، فإن الرقم 1000000 والرقم في الموقع الأخير ، فإن تقنية البحث الخطية ستصبح مملة تمامًا. لذا ، تعرف أيضًا على نوع الفقاعة ، والفرز السريع وما إلى ذلك.

#### فيديو ذو صلة:

#### موارد آخرى

[بحث خطي - CS50](https://www.youtube.com/watch?v=vZWfKBdSgXI)

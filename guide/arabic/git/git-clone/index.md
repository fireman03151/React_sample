---
title: Git Clone
localeTitle: جيت استنس
---
## جيت استنس

يسمح لك الأمر `git clone` بنسخ مخزن بعيد إلى جهازك المحلي.

أولاً ، ابحث عن المستودع عن بُعد للمشروع الذي تعمل فيه أو مهتمًا به - يمكن أن يكون هذا أيضًا شوكة مشروعك. بعد ذلك ، انسخ عنوان URL الخاص به. على سبيل المثال ، إذا كنت قد تفرقت مستودع أدلة freeCodeCamp ، فسيبدو عنوان URL مثل `https://github.com/YOUR-GITHUB-USERNAME/guides.git` .

في سطر الأوامر على جهازك المحلي ، انتقل إلى المكان الذي تريد حفظ المشروع في دليل العمل الخاص بك. وأخيرًا ، قم بتشغيل الأمر `git clone` :

```shell
git clone URL-OF-REPOSITORY
``` 

الاسم الافتراضي للدليل الجديد على جهاز الكمبيوتر الخاص بك هو اسم المستودع ، ولكن يمكنك تغيير ذلك عن طريق تضمين المعلمة (اختياري) الأخيرة:

```shell
git clone URL-OF-REPOSITORY NAME-OF-DIRECTORY-ON-COMPUTER
``` 

يعطي Git البعيد الاسم المستعار "الأصل". هذه طريقة مفيدة للإشارة إلى جهاز التحكم عن بعد عندما تريد دفع تغييراتك إلى الخادم البعيد أو سحب التغييرات منه. انظر [Git push](https://guide.freecodecamp.org/git/git-push/) و [Git pull](https://guide.freecodecamp.org/git/git-pull/) لمزيد من التفاصيل.

Git يسحب فقط الفرع الرئيسي عن بعد على جهاز الكمبيوتر الخاص بك. يدعى هذا الفرع عادة باسم "master" وفقًا للاتفاقية ، ولكن يمكن تعريفه بشكل مختلف اعتمادًا على المشروع.

أيضا ، Git تلقائيا بإعداد الفرع الرئيسي المحلي لتتبع الفرع البعيد. عند تشغيل `git status` ، سترى معلومات حول ما إذا كان الفرع المحلي لديك محدثًا مع جهاز التحكم عن بُعد. إليك مثال على الناتج:

```shell
myCommandPrompt (master) >> git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean
myCommandPrompt (master) >>
``` 

إذا كان فرعك المحلي `master` يحتوي على ثلاث تعهدات لم تقم بدفعها إلى الخادم البعيد بعد ، فإن الحالة ستقول "الفرع الخاص بك متقدم على" الأصل / الرئيسي "بـ 3 مرات."

### Git Clone Mirror

إذا كنت ترغب في استضافة مرآة لمستودع ، فيمكنك استخدام معلمة mirror.

```shell
git clone URL-OF-REPOSITORY --mirror
``` 

بعد إجراء نسخ متطابق لمستودع ، يمكنك استنساخ المرآة المحلية من الخادم الخاص بك.

```shell
git clone NAME-OF-DIRECTORY-ON-COMPUTER
``` 

### معلومات اكثر:

*   وثائق جيت: [استنساخ](https://git-scm.com/docs/git-clone)
---
title: Expression Bodied Methods and Properties
localeTitle: طرق وعبارات بوديشن التعبير
---
# طرق وعبارات بوديشن التعبير

يمكنك الإعلان عن الطرق والخصائص كتعبير لامدا ، دون الحاجة إلى كتلة بيان. يهدف هذا التطبيق إلى تطبيقات بسيطة ، وهو أكثر إيجازًا من إعلان أسلوب أو خاصية منتظمة في أنه يلغي الحاجة إلى بعض الأقواس المتعرجة واستخدام بيان عودة صريح.

في ما يلي مثال لإعلان أسلوب منتظم:

```csharp
public Point CreatePoint(int x, int y)
{
    return new Point(x, y);
}
``` 

ما يلي يعطي نفس النتيجة ، ولكن يتم كتابتها كطريقة تعبير جسدي:

```csharp
public Point CreatePoint(int x, int y) => new Point(x, y);
``` 

يمكنك أيضًا الإعلان عن الخصائص باستخدام بناء الجملة هذا. التعليمة البرمجية التالية هي كيفية تعريف خاصية get-only بدون تعبير lambda:

```csharp
public Point Location
{
    get
    {
        return _location;
    }
}
``` 

من خلال طريقة التعبير الجسدي ، يمكننا تقليص هذا الرمز إلى سطر واحد فقط:

```csharp
public Point Location => _location
```
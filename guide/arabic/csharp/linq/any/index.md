---
title: Any
localeTitle: أي
---
# أي

إرجاع true إذا كان هناك عنصر واحد على الأقل يطابق المسند. عند استخدام دالة تقييم فارغة (فقط .Any () بدون أي شيء بين parantheses) ستعود true إذا لم تكن المجموعة فارغة.

### التوقيع

```csharp
public static bool Any<TSource>(this IEnumerable<TSource> source);
public static bool Any<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate);
``` 

## مثال

```csharp
var fruits = new List<Fruit>() {
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   },
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  },
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  },
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   },
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   },
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   }
};

// Check if any Fruits have a quantity greater than 20
var anyFruitGreaterThanTwenty = fruits.Any(f => f.Quantity > 20); // true

// Any Fruit with color Green
var anyGreen = fruits.Any(f => f.Color == "Green"); // false

var hasFruits = fruits.Any(); // true

var hasYellowFruit = fruits.Any(f => f.Color == "Yellow"); // true
```
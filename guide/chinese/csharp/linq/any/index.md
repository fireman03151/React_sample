---
title: Any
localeTitle: 任何
---
# 任何

如果至少有一个元素与谓词匹配，则返回true。 当使用空谓词（只有.Any（），而没有任何东西）时，如果集合不为空，它将返回true。

### 签名

```csharp
public static bool Any<TSource>(this IEnumerable<TSource> source); 
 public static bool Any<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate); 
```

## 例

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
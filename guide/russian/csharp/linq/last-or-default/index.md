---
title: LastOrDefault
localeTitle: LastOrDefault
---
\# Любой Возвращает последний элемент в последовательности, которая удовлетворяет условию или значению по умолчанию, если ни один элемент не найден ### Подпись

```csharp
Enumerable.LastOrDefault<TSource> Method (IEnumerable<TSource>, Func<TSource, Boolean>) 
```

\## Пример

```csharp
var fruits = new List<Fruit>() { 
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   }, 
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  }, 
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  }, 
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   }, 
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   }, 
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   } 
 }; 
 // Returns the last fruit where the Color is Yellow 
 var lastYellow = fruits.LastOrDefault(f => f.Color == "Yellow"); // Mango 
 // Returns the last fruit where the quantity is 20 
 var lastQuantityOfTwenty = fruits.LastOrDefault(f => f.Quantity == 20); // null 

```
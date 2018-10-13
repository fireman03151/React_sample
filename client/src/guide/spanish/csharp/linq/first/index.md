---
title: First
localeTitle: primero
---# primero

Devuelve el primer elemento que satisface una condición dada opcional. Si no se encuentra ningún elemento, lanza una `InvalidOperationException` ;

### Firma

```csharp
Enumerable.First<TSource>(IEnumerable<TSource>, Func<TSource, Boolean>) 
```

## Ejemplo

```csharp
var fruits = new List<Fruit>() { 
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   }, 
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  }, 
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  }, 
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   }, 
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   }, 
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   } 
 }; 
 
 var firstFruit = fruits.First(); // Orange 
 
 var firstYellowFruit = fruits.First(f => f.Color == "Yellow"); // Pineapple 

```
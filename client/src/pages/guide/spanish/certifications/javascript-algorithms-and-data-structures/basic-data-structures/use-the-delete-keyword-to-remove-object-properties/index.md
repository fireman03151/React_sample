---
title: Use the delete Keyword to Remove Object Properties
localeTitle: Utilice la palabra clave delete para eliminar las propiedades del objeto
---
## Utilice la palabra clave delete para eliminar las propiedades del objeto

[Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) proporciona un tutorial completo sobre el operador de eliminación.

### Solución:

```javascript
let foods = { 
  apples: 25, 
  oranges: 32, 
  plums: 28, 
  bananas: 13, 
  grapes: 35, 
  strawberries: 27 
 }; 
 // change code below this line 
 delete foods.oranges; 
 delete foods.plums; 
 delete foods.strawberries; 
 // change code above this line 
 console.log(foods); 

```
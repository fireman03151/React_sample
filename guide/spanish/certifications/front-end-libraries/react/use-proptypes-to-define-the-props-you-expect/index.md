---
title: Use PropTypes to Define the Props You Expect
localeTitle: Use PropTypes para definir los beneficios que espera
---
## Use PropTypes para definir los beneficios que espera

Este desafío tiene que establecer un `propTypes` para el componente `Items` .

```react.js
const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 }; 
```

Para establecer un propTypes, la sintaxis a seguir es

```react.js
itemName.propTypes = { 
  props: PropTypes.dataType.isRequired 
 }; 
```

Siguiendo la sintaxis, el siguiente código debe establecerse debajo del código dado para la `quantity` accesorios del componente `Items`

```react.js
Items.propTypes = { 
  quantity: PropTypes.number.isRequired 
 }; 

```
---
title: For...In Loop
localeTitle: 对于... In Loop
---
`for...in`语句以任意顺序迭代对象的可枚举属性。对于每个不同的属性，可以执行语句。
```
for (variable in object) { 
 ... 
 } 
```

## 例子
```
// 初始一個物件. 
 a = { "a": "Athens", "b": "Belgrade", "c": "Cairo" } 
 
 // 迭代对象的可枚举属性. 
 var s = "" 
 for (var key in a) { 
    s += key + ": " + a[key]; 
    s += "<br />"; 
    } 
 document.write (s); 
 
 // 輸出: 
 // a: Athens 
 // b: Belgrade 
 // c: Cairo 
 
 // 初始化陣列. 
 var arr = new Array("zero", "one", "two"); 
 
 // 新增属性至陣列. 
 arr["orange"] = "fruit"; 
 arr["carrot"] = "vegetable"; 
 
 // Iterate over the properties and elements. 
 var s = ""; 
 for (var key in arr) { 
    s += key + ": " + arr[key]; 
    s += "<br />"; 
 } 
 
 document.write (s); 
 
 // 輸出: 
 //   0: zero 
 //   1: one 
 //   2: two 
 //   orange: fruit 
 //   carrot: vegetable 
 
 // Efficient way of getting an object's keys using an expression within the for-in loop's conditions 
 var myObj = {a: 1, b: 2, c:3}, myKeys = [], i=0; 
 for (myKeys[i++] in myObj); 
 
 document.write(myKeys); 
 
 //輸出: 
 //   a 
 //   b 
 //   c 
```

# 资源：

*   [MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for…in)
*   [MSDN链接](https://msdn.microsoft.com/library/55wb2d34.aspx)

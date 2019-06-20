---
title: Map.prototype.delete
localeTitle: Map.prototype.delete
---
## Map.prototype.delete

يزيل العنصر المحدد من عنصر `Map` . يرجع ما إذا كان تم العثور على المفتاح وحذفه بنجاح.

## بناء الجملة

```javascript
myMap.delete(key);
``` 

## المعلمات

**المفتاح** المطلوب.

## مثال

```javascript
const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);


myMap.size(); // 3
myMap.has('foo'); // true;

myMap.delete('foo');  // Returns true. Successfully removed.

myMap.size(); // 2
myMap.has('foo');    // Returns false. The "foo" element is no longer present.
```
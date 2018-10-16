---
title: Common Array Methods
localeTitle: Общие методы массива
---
## Общие методы массива

Ruby Arrays составляют основную основу программирования в Ruby, и большинство языков на самом деле. Он используется настолько, что было бы полезно знать и даже запоминать некоторые из наиболее часто используемых методов для массивов. Если вы хотите узнать больше о Ruby Arrays, у нас [есть статья о них](https://guide.freecodecamp.org/ruby/ruby-arrays) .

Для целей настоящего руководства наш массив будет выглядеть следующим образом:

\`\` \`ruby array = \[0, 1, 2, 3, 4\]
```
#### .length 
 The .length method tallies the number of elements in your array and returns the count: 
```

Рубин array.length => 5
```
#### .first 
 The .first method accesses the first element of the array, the element at index 0: 
```

Рубин array.first => 0
```
#### .last 
 The .last method accesses the last element of the array: 
```

Рубин array.last => 4
```
#### .take 
 The .take method returns the first n elements of the array: 
```

Рубин array.take (3) => \[0, 1, 2\]
```
#### .drop 
 The .drop method returns the elements after n elements of the array: 
```

Рубин array.drop (3) => \[3, 4\]
```
#### array index 
 You can access a specific element in an array by accessing its index. If the index does not exist in the array, nil will be returned: 
```

Рубин Массив \[2\] => 2

Массив \[5\] => nil
```
#### .pop 
 The .pop method will permantently remove the last element of an array: 
```

Рубин array.pop => \[0, 1, 2, 3\]
```
#### .shift 
 The .shift method will permantently remove the first element of an array and return this element: 
```

Рубин Array.shift => 0  
массив => \[1, 2, 3, 4\]
```
#### .push 
 The .push method will allow you to add an element to the end of an array: 
```

Рубин Array.push (99) => \[0, 1, 2, 3, 4, 99\]
```
#### .unshift 
 The .unshift method will allow you to add an element to the beginning of an array: 
```

array = \[2, 3\] Array.unshift (1) => \[1, 2, 3\]
```
#### .delete 
 The .delete method removes a specified element from an array permanently: 
```

Рубин array.delete (1) => \[0, 2, 3, 4\]
```
#### .delete_at 
 The .delete_at method allows you to permanently remove an element of an array at a specified index: 
```

Рубин array.delete\_at (0) => \[1, 2, 3, 4\]
```
#### .reverse 
 The .reverse method reverses the array but does not mutate it (the original array stays as is): 
```

Рубин array.reverse => \[4, 3, 2, 1, 0\]
```
#### .select 
 The .select method iterates over an array and returns a new array that includes any items that return true to the expression provided. 
```

Рубин array = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\] array.select {| number | число> 4} => \[5, 6, 7, 8, 9, 10\] массив => \[5, 6, 7, 8, 9, 10\]
```
#### .include? 
 The include? method checks to see if the argument given is included in the array: 
```

Рубин array = \[1, 2, 3, 4, 5\] => \[1, 2, 3, 4, 5\] array.include? (3) => true

#### .flatten

Метод flatten можно использовать для принятия массива, содержащего вложенные массивы и создания одномерного массива:

\`\` \`ruby array = \[1, 2, \[3, 4, 5\], \[6, 7\]\] array.flatten => \[1, 2, 3, 4, 5, 6, 7\]
```
#### .join 
 The .join method returns a string of all the elements of the array separated by a separator parameter. If the separator parameter is nil, the method uses an empty string as a separator between strings. 
```

Рубин Array.join => "1234" array.join (" _") => "1_ 2 _3_ 4"
```
#### .each 
 The .each method iterates over each element of the array, allowing you to perform actions on them. 
```

Рубин array.each do | element | ставит элемент конец => 0 1 2 3 4
```
#### .map 
 The .map method is the same as the .collect method. The .map and .collect methods iterate over each element of the array, allowing you to perform actions on them. The .map and .collect methods differ from the .each method in that they return an array containing the transformed elements. 
```

Рубин array.map {| element | элемент \* 2} ставит элемент конец => 0 2 4 6 8
```
#### .uniq 
 The .uniq method takes in an array containing duplicate elements, and returns a copy of the array containing only unique elements--any duplicate elements are removed from the array. 
```

Рубин array = \[1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8\] array.uniq => \[1, 2, 3, 4, 5, 6, 7, 8\]
```
#### .concat 
 The .concat method appends the elements from an array to the original array. The .concat method can take in multiple arrays as an argument, which will in turn append multiple arrays to the original array. 
```

Рубин array = \[0, 1, 2, 3, 4\] array.concat (\[5, 6, 7\], \[8, 9, 10\]) => \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\] \`\` \`

## Больше информации

*   [Документы Ruby Array](http://ruby-doc.org/core-2.5.1/Array.html)
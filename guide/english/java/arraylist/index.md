---
title: ArrayList
---
# ArrayList
  ArrayList is a part of something called the *Collection framework*.
  
  The *Collection framework* consists of all interfaces and classes that can hold a set of values (similar to [arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)). **ArrayList** is a class that is in this hierarchy and known as a _**Collection object**_. It implements the *List* interface which in turn implements the *Collection* interface. This *Collection* interface can be found in the `java.util` package. You will need to import this package.
  
  ```java
  import java.util.ArrayList;  // is more efficient than importing all of java.util
  ```
  
Always import the most specific package in order to save memory size and performance time.
  
`ArrayList` is a class that is used to create dynamic arrays. It is slower than regular arrays but allows for a lot of manipulation. It should be initialized to have a specific size or it will have the default size of 10 units. 

 
```java
ArrayList<String> names = new ArrayList<>();
ArrayList<Integer> ages = new ArrayList<>(5);
```

In the above snippet, the angle brackets `<>` take a generic data type as argument specifying data type of the elements in the ArrayList. The first ArrayList `names` is specified as containing *String* elements. Thus, it will only be allowed to contain String elements. Its size is not specified so it will have a default size of 10. The second ArrayList `ages` has specified that it will only hold integers. But ArrayList cannot hold primitives, it only holds objects. Thus to make it store integers, floats, etc., we can use wrapper classes. `names` will have a specified size of 5.
  
Since ArrayList implements *List*, an ArrayList can be created using the following syntax:
```java
List<Integer> students = new ArrayList<>();
```
  
An ArrayList is dynamic, meaning it will grow in size if required and similarly shrink in size if elements are deleted from it. This is what makes it more flexible than normal arrays.
  
**Add elements to the list**
```java
variable.add(String e);
variable.add(int index, String element);
```
  
**Clear/Delete all elements from the list**
```java
variable.clear();
```
  
**Delete element at specified index from the list**
```java
variable_name.remove(index_number);
```
  
**Access element at specified index**
```java
variable_name.get(index_number);
```

**Modify/update element at specified index**

```java
variable_name.set(index_number,element);
```
  
**Get the size of the list**
 
```java
variable_name.size();
```
  
**Get a sublist of the list**
 
```java
variable_name.subList(int fromIndex, int toIndex);
```
  
**Reverse elements in list**  
  
```java
import java.util.Collections; // package
Collections.reverse(variable_name);
```
  
**Sort elements in ascending order**
```java
Collections.sort(variable_name);
```
  
**Sort elements in descending order**

```java
  Collections.sort(variable_name, Collections.reverseOrder());
```

**Creating Array from ArrayList**

```java
Object[] arr = variable_name.toArray(new Object[variable_name.size()]);
```
    
**Creating ArrayList from Array**

```java
for(Object obj : arr) {
  variable_name.add(obj);
}
```

**Split a delimited string into an list of String**

Let's say we have a string variable called ``` String stringToSplit = "PHP,Java,C++"; ```.
Now, we want to split it into a List of String, so we can iterate over the List.

Since ArrayList implements the interface *List*, we can use the function ```asList``` to obtain a fixed-size List of String out of the splitted string ```stringToSplit```:

```java
  List<String> list = new ArrayList<String>(Arrays.asList(stringToSplit.split(",")));
```

An ArrayList allows us to randomly access elements. ArrayList is similar to *Vector* in a lot of ways, but it is faster than Vectors. The main thing to note is that - Vectors are faster than arrays but ArrayLists are not. 

So when it comes down to choosing between the two - if speed is critical then Vectors should be considered for a small set of items, otherwise ArrayLists are better when it comes to storing large number of elements and accessing them efficiently. Vectors are synchronized and arraylist are not, thats why choose vector for frequent update of elements otherwise Arraylist is efficient for traversing.

## Basic Big O for ArrayList Methods:
 
`.get(int index)`  
- O(1). This will always be constant time. 
    
`.add(E ele)`  
- O(1). We are only adding an element to the END of the list.

`.add(int ind, E ele)`  
- O(n). Because of the way an ArrayList is implemented, we must do shifting which requires O(n) time on average.

`.remove(int ind)`
- O(n). For the same reason as above. The elements must be shifted after removal.
     
It is important to understand the Big O for methods of data structures. This way, you can choose the most efficient data structure for your program.

## ArrayLists and primitives
As mentioned before, ArrayLists cannot hold primitive types, and one has to use their corresponding wrapper classes.
However it comes with a cost: every time you put a primitive value in the list, or every time you get a wrapped value from the list and put it into a primitive variable, the value is automatically converted from the wrapper objet to the primitive value or the other way around. This is called boxing and unboxing. To avoid these additionnal (useless) conversions, there is the FastUtil library. They have specialkinds of lists that use directly the primitive types.
Here are a few examples:
- IntList (and its implementation IntArrayList)
- BooleanList (and its implementation BooleanArrayList)
- DoubleList (and its implementation DoubleArrayList)
- and so on with all 8 primitive java types

Of course they implement the java.util List interface, so they can be used exactly like usual ArrayLists.

## More Information
- [ArrayList Documentation](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)

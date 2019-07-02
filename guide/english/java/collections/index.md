---
title: Collections
---
# Collections

A Collection in Java is a group of objects which can be ordered (List) or unordered (Set). The `Collection` interface is at the top of the hierarchy and all other classes and interfaces extend from this interface. It is located in the `java.util` package. It provides many interfaces like `Set`, `List`, `Queue`, `Deque` etc. and classes like `ArrayList`, `Vector`, `LinkedList`, `PriorityQueue`, `HashSet`, `LinkedHashSet` etc.

The `Collection` interface also extends the `Iterable` interface, which means that every collection in java must be iterable. This in turn means that a `for-each` loop can be used to fetch elements from a collection in a sequence.

```java
public interface Collection<E> extends Iterable<E>
```

Some of the most common methods provided by this interface are:

```java
boolean add(E e) // Adds the specified element to the collection if not present and returns true if this collection changed.

void clear() // Removes all the elements from the collection.

boolean contains(Object o) // Returns true if the specified element is in the collection else false.

boolean isEmpty() // Returns true if the collection is empty else false.

boolean remove(Object o) // Removes the specifies element and return true on successful removal else false.

int size() // Returns number of items in the collection.
```

These and various other methods have to be implemented by any class implementing Collection interface.


## Interfaces extending Collection interface

Other important interfaces extending the collection interface are:

- `Set`:
	A collection containing only unique elements.

- `Queue`:
	Implement the queue behavior where elements are added only in the beginning and removed from the end.

- `List`:
	This collection handles a list/sequence of objects.

These four interfaces (`Collection`, `Set`, `Queue`, `List`) along with `SortedSet`, `Deque` and `NavigableSet` form the collective `Collection` hierarchy.

## The LinkedList Class

`LinkedList` is one the most important `Collection` classes which provides a doubly-linked list implementation. It implements the `List`, `Deque`, `Cloneable` and `Serializable` interfaces.

**Create a LinkedList**

```java
LinkedList<Integer> intList = new LinkedList<Integer>(); // Creates a new list of Integer objects.
```

You can also create a list of any other object type. For eg.

```java
LinkedList<String> stringList = new LinkedList<>();

LinkedList<LinkedList<Integer>> listOfList = new LinkedList<>();
```

Note: All collections in Java have been converted to generic types since JDK 1.5.

**Add elements to the list**

```java
intList.add(new Integer(1)); // Add 1 to the end.

intList.add(2); // This works as Java provides autoboxing and unboxing of primitive datatypes and their respective wrapper classes.

intList.addFirst(3); // Add to the beginning of the list.

intList.addLast(2); // Add to the end of the list.

intList.add(2, 5); // Add element 5 at index 2.
```

Let us print the list:

```java
System.out.println(intList); // toString() method is automatically called on the list
```

Output:

```java
[3, 1, 5, 2, 2]
```

**Retrieve elements from the list**
```java
intList.get(3); // Returns element at index 3 i.e. 2.

intList.getFirst(); // Get the first element i.e. 3.

intList.getLast(); // Returns last element i.e. 2.

intList.indexOf(2); // Returns first occured index of 2 i.e. 3.

intList.lastIndexOf(2); // Returns last occured index of 2 i.e. 4.
```

**LinkedList as a Stack**

You can use a `LinkedList` to implement the `Stack` data structure:
```java
intList.push(5); // Add element to the end of list. Works same as addLast().

intList.pop(); // Removes and returns the last element of the list.
```

**Remove elements from the list**

```java
intList.remove(3); // Removes the element at index 3 of the list

intList.removeFirst(); // Removes first element of the list

intList.removeLast(); // Removes last element of the list
```

## The Stack Class

Stack class, as previously mentioned classes, implements Collection interface and extends Vector class and contains five methods that treat Vector as Stack. Stack is data structure which applies principle Last In First Out (LIFO) and contains following methods:

```java

T void pop(); // 'T' represents type which is being returned as the last elemented is removed from this stack 

T void peek(); // 'T' represents type which is being returned and last elemented is not being removed from this stack

T push(T element); // 'T' represents type which is being returned and last elemented is being added on this stack

boolean empty(); // returns true (if this stack is empty) of false (if this stack isn't empty)

int search(Object o) // returns position of element located on this stack 
```

**Create a Stack**

Stack class is being created using following snippet of code:

```java
Stack<Integer> stackObject = new Stack<>(); // creates stack which recieves elements of Integer/int type 
```

**Add elements on Stack**

```java

stackObject.push(5); 
stackObject.push(2);
stackObject.push(36);
stackObject.push(4);

```

**Retrieve element from Stack**

```java

int lastElemement = stackObject.pop(); // retrieves last element pushed on top of 'stackObject' stack and REMOVES it
System.out.println(lastElemement); // prints retrieved element which is 4

lastElements = stackObject.peek(); // retrieves last element pushed on top of 'stackObject' stack and DOES NOT REMOVE it
System.out.println(lastElemement); // prints retrieved element which is 36
```

Note: All the above mentioned methods for removing and fetching an element return `NoSuchElementException` on an empty list.

#### More Information
- [Java Collection](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html)

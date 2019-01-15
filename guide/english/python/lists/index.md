---
title: Lists
---

## Lists
Lists is one of the most common Python data structures you will encounter while programming in Python along with dictionary, tuple or set. 

A `list` is an ordered mutable collection, where each value is identified with an *index*. Lists are zero-indexed, i.e., the index of the **1st** element in a `list` is **0**, the index of the **2nd** element is **1**, and so on. This means that a list of **N** elements will have indices from **0** to **N - 1**(not N).

Besides that due to list being *mutable*, you are allowed to make changes to the value of a list without affecting the order of positions within the list.

The position of a list is called "Index", which starts from `0` whenever you plan to access or change the values of a list. 

[Python Docs - Lists](https://docs.python.org/3/library/stdtypes.html#lists)

**Creation:**

An empty `list` is created using a pair of square brackets:
```shell
>>> empty_list = []
>>> type(empty_list)
<class 'list'>
>>> len(empty_list)
0
```

A `list` can be created with elements by enclosing a comma separated list of elements with square brackets. Lists allow for the elements to be of different types (heterogeneous) but are most commonly of a single type (homogeneous):
```shell
>>> homogeneous_list = [1, 1, 2, 3, 5, 8]
>>> type(homogeneous_list)
<class 'list'>
>>> print(homogeneous_list)
[1, 1, 2, 3, 5, 8]
>>> len(homogeneous_list)
6
>>> heterogeneous_list = [1, "Hello Campers!"]
>>> print(heterogeneous_list)
[1, "Hello Campers!"]
>>> len(heterogeneous_list)
2
```
The `list` constructor can also be used to create a `list`:
```shell
>>> empty_list = list()                            # Creates an empty list
>>> print(empty_list)
[]
>>> list_from_iterable = list("Hello campers!")    # Creates a list from an iterable.
>>> print(list_from_iterable)
['H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!']
```

**Accessing elements of a `list`:**

Do note that the first element of a list will always starts with `0` 

```shell
>>> my_list = [1, 2, 9, 16, 25]
>>> print(my_list)
[1, 2, 9, 16, 25]
```

_Zero indexed_
```shell
>>> my_list[0]
1
>>> my_list[1]
2
>>> my_list[2]
9
```
_Wrap around indexing_
```shell
>>> my_list[-1]
25
>>> my_list[-2]
16
```
_Unpacking lists for python-3_
```shell
>>> print(*my_list)
1 2 9 16 25
```
_unpacking elements from the list to variables python-3_
 The elements of a list can be unpacked and assigned to variables.
 ```
>>> my_list = [2, 4, 6, 8]
>>> a, b, c, d = my_list
>>>print(a, b, c, d)
2 4 6 8
```
Same way, if we add * before the var name, this will automatically take the left elements of the list
 ```
>>> my_list = [2, 4, 6, 8, 10]
>>>a, *b = my_list
>>>print(a, b)
2 [4, 6, 8, 10]
```
Also, we can do this:
```
>>> my_list = [2, 4, 6, 8, 10]
>>>a, *b, c = my_list
>>>print(a, b, c)
2 [4, 6, 8] 10
```
### List Manipulation

**Reverse a `list`:**
```shell
>>> my_list = [1, 2, 9, 16, 25]
>>> print(my_list[::-1])
[25, 16, 9, 2, 1]
```
**Slice a `list`:**
```shell
>>> my_list = [1, 2, 9, 16, 25]
>>> print(my_list[:-2]) #Access sub-elements first to length-2
[1, 2, 9]
>>> print(my_list[2:]) #Access sub-elements 3rd to last element
[9, 16, 25]
>>> print(my_list[::2]) #Access list by skipping 2 indexes
[1, 9, 25]
```
**Mutable:**

`lists` are mutable containers. Mutable containers are containers that allow changes to which objects are contained by the container. 

We can modify the contents of a list after we have created it, which isn't possible in the case of immutable containers, like tuples.

```python
>>> L = [1, 2, 3, 4, 6]
>>> L[4] = 5
>>> print(L)
[1, 2, 3, 4, 5]
```
We see that the 4th element in the list `L` has been modified. This property of lists is quite convenient, but it can also be deceiving if we don't keep track of what we're doing.
Suppose we create a list and assign a value to it.
```python
>>> List_old = [1, 2, 3]
```
Python binds the `List_old` list to the value `[1, 2, 3]`. Now, we define a new list named `List_new` and assign to it the value `List_old`.
```python
>>> List_new = List_old
```
This binds `List_new` to the same object that `List_old` was bound to, i.e., `[1, 2, 3]`.

![listmutability](https://user-images.githubusercontent.com/27547933/47269591-e4241b80-d57d-11e8-8487-3653bed30b5f.jpg)

Since both the lists are pointing to the same object, if we modify one, the other gets modified as well.
```python
>>> List_new.append(9)
>>> print(List_old)
[1, 2, 3, 4, 5, 9]
```
We see that adding the value *9* to `List_new` also adds the same value to `List_old`.

_Re-arranging elements in a list_

Elements from a `list` may be extracted and re-arranged using another `list` as index.
```shell
>>> my_list = [1, 2, 9, 16, 25, 34, 53, 21]
>>> my_index = [5, 2, 0]
>>> my_new_list = [my_list[i] for i in my_index]
>>> print(my_new_list)
[34, 9, 1]
```

**TODO: Which of these should be discussed here:**

[Python Docs - More on Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

*   `list.append(x)` Add an item to the end of the list. Equivalent to a[len(a):] = [x].

*   `list.extend(L)` Extend the list by appending all the items in the given list. Equivalent to a[len(a):] = L.

*   `list.insert(i, x)` Insert an item at a given position. The first argument is the index of the element before which to insert, so a.insert(0, x) inserts at the front of the list, and a.insert(len(a), x) is equivalent to a.append(x).

*   `list.remove(x)` Remove the first item from the list whose value is x. It is an error if there is no such item.

*   `list.pop([i])` Remove the item at the given position in the list, and return it. If no index is specified, a.pop() removes and returns the last item in the list. (The square brackets around the i in the method signature denote that the parameter is optional, not that you should type square brackets at that position. You will see this notation frequently in the Python Library Reference.)

*   `list.clear()` Remove all items from the list. Equivalent to del a[:].

*   `list.index(x)` Return the index in the list of the first item whose value is x. It is an error if there is no such item.

*   `list.count(x)` Return the number of times x appears in the list.

*   `list.sort(key=None, reverse=False)` Sort the items of the list in place (the arguments can be used for sort customization, see sorted() for their explanation).

*   `list.reverse()` Reverse the elements of the list in place.

*   `list.copy()` Return a shallow copy of the list. Equivalent to a[:].

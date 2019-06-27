---
title: Dynamic Memory Management
---

# Dynamic Memory Management

Sometimes you will need to allocate memory spaces in the heap also known as the dynamic memory. This is particularly useful when you do not know during compile time how large a data structure (like an array) will be. 

## An Example
Here's a simple example where we allocate an array, asking the user to choose the size.

```C
#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int dim, i;
  int *array;

  // Get user-defined size of array
  printf("Please insert the array dimension: ");
  scanf("%d", &dim);
  array = malloc(sizeof(int) * dim);

  // Check if there was a failure in allocating memory
  if (array == NULL) {
    printf("Error allocating memory!");
    return -1;
  }

  // Get array elements
  for (i = 0; i < dim; i++) {
    printf("Insert the %d value of the array: ", i);
    scanf("%d", array + i);
  }

  // Print out contents of array
  for (i = 0; i < dim; i++)
    printf("%d%s", array[i], (i == dim - 1) ? "\n" : ", ");

  // Cleanup
  free(array);
  return 0;
}
```

As you can see in order to allocate a space in the dynamic memory you need to know how pointers work in C.
The magic function here is the `malloc` which will return as output a void pointer (it is a pointer to a region of unknown data type) to the new memory space we've just allocated.
Let's see how to use this function step by step: 

## Allocating an array during runtime

```C
sizeof(int)
```
Let's start from `sizeof`, a sweet C macro. `malloc` only cares about memory, and thus allocates the number of bytes you ask it. Not the number of `int`s or `float`s, **the number of bytes**. But how do you _know_ how many bytes a given type needs? 
Enter the `sizeof` macro.
**Note:** Never assume the size a type needs since they can change based on implementation and system.

```C
array = malloc(sizeof(int) * dim);
```

Here, malloc takes the number of bytes we want (the size of an `int` multiplied by how many of them we want) and gives us a pointer to a memory block with at least that much space ... most of the time. If we run out of memory (or some other error occurs), `malloc` returns `NULL`!

### Checking the malloc output
Running out of memory, while usually not a problem for small programs, is a potential source for segfaults and other bugs. Thus, we should always check to see if `malloc` succeeded or not before we try to use the pointer.

```C
if (array == NULL) {
  printf("Error allocating memory!");
  return -1;
}
```
This will also be very usefull during your debug phase and will prevent some possible errors using the last function used in the example.

## A word on `free`
Usually variables are automatically de-allocated when their scope is destroyed, freeing the memory they were using.
While this may be true for stack (automatic) variables, it does not hold for the heap, which is where memory allocated by `malloc` lives.
While memory is returned to the system once your program terminates, if your program runs for a long time or makes many allocations without freeing, your program will hog resources and potentially slow down your system!

```C
free(arrayPointer);
```

As a rule of thumb, there should be a `free` for every `malloc`. Note that you should free all the memory you allocated before you exit, and preferably when you are done with what you were using.

You can use tools like `valgrind` to check your programs memory usage and leakage.

## Other functions similar to malloc
There are four main memory-allocation library functions in C:
* `malloc`
* `calloc`
* `realloc`
* `free`

You've already seen `malloc`, which allocates some amount of bytes on the heap, and `free` which tells the memory allocator that it can reuse that segment.

### `calloc`: contiguous allocate
Suppose you need an array that you will read and write from (e.g. when implementing a hash map).
If you use malloc, there is a chance that you will have garbage data in your array since malloc does not set the memory it gives you.
This can be problematic if you expect the array to be empty.
This is where `calloc` comes to the rescue!
Calloc sets the memory it provides to zero and has a handy signature for when allocating arrays.

```C
// If you're doing this...
int *arr1 = malloc(sizeof(int) * 10);
if (arr)
  memset(arr, 0, sizeof(int);
// ...you can do this instead!
int *arr2 = calloc(10, sizeof(int));
```

**Note:** the first approach is more flexible since you can set the "default" value to whatever you want via `memset`. `memset` is declared in `string.h`.

### `realloc`: reallocate

What happens when you need more memory for your array? Instead of manually allocating a new heap segment and copying over memory, you can use `realloc`.
`realloc` changes the size of an old allocation to the specified size.
For example:

```C
// Allocate an int array that can hold two elements.
int *arr = malloc(2 * sizeof(int));
arr[0] = 1;
arr[1] = 2;

// Make the array bigger so it can hold three elements.
arr = realloc(arr, 3 * sizeof(int));
arr[2] = 3;

// Realloc "copies" over the data from the previous memory to the new location for you.
assert(arr[0] == 1);
assert(arr[1] == 2);
assert(arr[2] == 3);

// You can also shrink your allocation.
arr = realloc(arr, sizeof(int));
assert(arr[0] == 1);
```

**Warning!** Always use the pointer that `realloc` returns as the new address; it's not guaranteed to be the same as the one you passed in!

## Common errors 
The improper use of dynamic memory allocation can frequently be a source of bugs as you have seen before.
Most common errors are:

- **Segmentation faults**

This means you tried to access memory you do not have access to. A common pointer to dereference that you do not have access to is the `NULL` pointer (`0x0`). This is why it is important to check your pointers before you use them when you cannot guarantee validity (such as from `malloc`).

- **Leaks**

If you do not free memory in a timley fashion (or at all), you can leak memory, which can make your program (and maybe even your system) slow!

- **Logical errors**

The general pattern is allocate, use, and free. If you deviate from this pattern, you cause many problems such as a double free or the aforementioned segfault.

## Dynamic Memory Management Using Linked List
Linked list is type of data structure where we can allocate memory to each new node individually during runtime .Each node in the linked list consist of memory address of next as well as previous node and data field.In case of linked list we dont need to declare or allocate memory previously so there is no question of wastage of memory .Inserting a new node as well as deletion of any node is easier as we dont need to move other elements it is done with just by changing links.And there is no question of ArrayOutOfBound Exception.
Use of linked list instead of array for big data and consisting more than 2 data fields is more profitable and makes code more efficient.

* Not checking for allocation failures
Memory allocation is not guaranteed to succeed, and may instead return a null pointer. 
Using the returned value, without checking if the allocation is successful, invokes undefined behavior. This usually leads to crash (due to the resulting segmentation fault on the null pointer dereference), but there is no guarantee that a crash will happen so relying on that can also lead to problems.
* Memory leaks
Failure to deallocate memory using `free` leads to buildup of non-reusable memory, which is no longer used by the program.
* Logical errors
All allocations must follow the same pattern: allocation using `malloc`, usage to store data, deallocation using `free`. If you not follow this pattern usually segmentation fault errore will be given and the program will crash. These errors can be transient and hard to debug – for example, freed memory is usually not immediately reclaimed by the system, and dangling pointers may persist for a while and appear to work.

## Detecting memory leaks and bad memory acesses
Memory management can be quite difficult to get your head around and especially difficult to debug. Lucky enough there are some tools which will help detect memory leaks, or accessing bad memory. You can use a tool called **Valgrind**, which at runtime can detect such problems.

Running without Valgrind
```BASH
myprog arg1 arg2
```
Running with Valgrind
```BASH
valgrind --leak-check=yes myprog arg1 arg2
```

if you run the following program with Valgrind

```C
  #include <stdlib.h>

  void f(void)
  {
     int* x = malloc(10 * sizeof(int));
     x[10] = 0;        // problem 1: heap block overrun
  }                    // problem 2: memory leak -- x not freed

  int main(void)
  {
     f();
     return 0;
  }
```
you will see an output on the console like this:

```
  ==19182== Invalid write of size 4
  ==19182==    at 0x804838F: f (example.c:6)
  ==19182==    by 0x80483AB: main (example.c:11)
  ==19182==  Address 0x1BA45050 is 0 bytes after a block of size 40 alloc'd
  ==19182==    at 0x1B8FF5CD: malloc (vg_replace_malloc.c:130)
  ==19182==    by 0x8048385: f (example.c:5)
  ==19182==    by 0x80483AB: main (example.c:11)
  ```

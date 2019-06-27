---
title: Bubble Sort
---
## Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

This is a very slow sorting algorithm compared to algorithms like quicksort, with worst-case complexity O(n^2). However, the tradeoff is that bubble sort is one of the easiest sorting algorithms to implement from scratch. As a result, bubble sort algorithm is commonly taught as the first sorting algorthim in Algorithm and Data structure classes. From technical perspective, bubble sort is reasonable for sorting small-sized arrays or specially when executing sort algorithms on computers with remarkably limited memory resources.

### Example:

#### First Pass:
( **5 1** 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.

( 1 **5 4** 2 8 ) –> ( 1 4 5 2 8 ), Swap since 5 > 4

( 1 4 **5 2** 8 ) –> ( 1 4 2 5 8 ), Swap since 5 > 2

( 1 4 2 **5 8** ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.


#### Second Pass:

( **1 4** 2 5 8 ) –> ( 1 4 2 5 8 )

( 1 **4 2** 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2

( 1 2 **4 5** 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 **5 8** ) –> ( 1 2 4 5 8 )

Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

#### Third Pass:

( **1 2** 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 **2 4** 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 **4 5** 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 **5 8** ) –> ( 1 2 4 5 8 )

#### Properties
- Space complexity: O(1)
- Best case performance: O(n\*n)
- Average case performance: O(n\*n)
- Worst case performance: O(n\*n)
- Stable: Yes

### Video Explanation
[Bubble sort in easy way](https://www.youtube.com/watch?v=Jdtq5uKz-w4)

### Example in Java.
```java
public int[] bubSort(int []ar)
{
	int i, j, temp;
	for (i = 0; i < n; i++)
	{
		for (j = 0; j < n - 1 - i; j++)
		{
			if (ar[j] > ar[j+1])
			{
				temp = ar[j];
				ar[j] = ar[j + 1];
				ar[j + 1] = temp;
			}
		}
	}
	return ar[];
}
```
### Example in C++
```cpp
#include <iostream>
using namespace std;
int BubbleSort[] (int arr[], int n)
{
	int i, j, temp;
	for (i = 0; i < n; ++i)
	{
		for (j = 0; j < n-i-1; ++j)
		{
			if (arr[j] > arr[j+1])
			{
                                temp = arr[j]
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
        return arr;
}	
```
### Example in Swift
```swift
func bubbleSort(_ inputArray: [Int]) -> [Int] {
    guard inputArray.count > 1 else { return inputArray } // make sure our input array has more than 1 element
    var numbers = inputArray // function arguments are constant by default in Swift, so we make a copy
    for i in 0..<(numbers.count - 1) {
        for j in 0..<(numbers.count - i - 1) {
            if numbers[j] > numbers[j + 1] {
                numbers.swapAt(j, j + 1)
            }
        }
    }
    return numbers // return the sorted array
} 
```
### Example in Python
```python
def bubblesort( A ):
  for i in range( len( A ) ):
    for k in range( len( A ) - 1, i, -1 ):
      if ( A[k] < A[k - 1] ):
        swap( A, k, k - 1 )
 
def swap( A, x, y ):
  tmp = A[x]
  A[x] = A[y]
  A[y] = tmp
```
### Modified Bubble Sort

We now know that Bubble Sort has a general complexity of O(n^2) for all input cases. Since this is a very slow sort, one of the commonly-suggested and fairly easy optimizations can be made to include the best case (where the list/array provided as input is already sorted). If we are able to check this condition (by making N comparisons), we should be able to terminate execution immediately after validating the fact that the array is sorted. 

This means that in the best case, our modified Bubble Sort Algorithm would have a complexity of O(n). This doesn't change the average or worst case, of course, but may show a decent uptick in speed if you intend to sort a number of instances, some of which are likely to be sorted already.

### Example in JavaScript

```js
let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9],
sorted = false;

while(!sorted) {
  sorted = true;
  for(var i=0; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      let temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
      sorted = false;
    }
  }
}
```
### Example in Java.

```java
public int[] bubSortModified(int []ar)
{
	int i, j, temp;
	boolean sorted;
	for (i = 0; i < n; i++)
	{
		sorted = true;
		for (j = 0; j < n - 1 - i; j++)
		{
			if (ar[j] > ar[j+1])
			{
				sorted = false; //implying array was not sorted already, swaps are needed
				temp = ar[j];
				ar[j] = ar[j + 1];
				ar[j + 1] = temp;				
			}
		}
		if (sorted == true)
			break;	//if array is sorted, stop iterating
	}
	return ar[];
}
```

### Example in C++
```cpp
// Recursive Implementation
void bubblesort(int arr[], int n)
{
	if(n==1)	//Initial Case
		return;
	bool swap_flag = false;
	for(int i=0;i<n-1;i++)	//After this pass the largest element will move to its desired location.
	{
		if(arr[i]>arr[i+1])
		{
			int temp=arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=temp;
			swap_flag = true;
		}
	}
        // IF no two elements were swapped in the loop, then return, as array is sorted 
	if(swap_flag == false)
		return;
	bubblesort(arr,n-1);	//Recursion for remaining array
}
```

### Example in Ruby
```ruby
def bubble_sort(arr)
  sorted = false
  until sorted
    sorted = true
    (arr.count-1).times do|i|
      if arr[i] > arr[i + 1]
        arr[i], arr[i +1] = arr[i +1], arr[i]
	    sorted = false
	  end
    end
  end
arr end
```

### Example in PHP
```php

function bubble_sort($arr) {
    $size = count($arr)-1;
    for ($i=0; $i<$size; $i++) {
        for ($j=0; $j<$size-$i; $j++) {
            $k = $j+1;
            if ($arr[$k] < $arr[$j]) {
                // Swap elements at indices: $j, $k
                list($arr[$j], $arr[$k]) = array($arr[$k], $arr[$j]);
            }
        }
    }
    return $arr;// return the sorted array
}

$arr = array(1,3,2,8,5,7,4,0);
print("Before sorting");
print_r($arr);

$arr = bubble_sort($arr);
print("After sorting by using bubble sort");
print_r($arr);

```

### Example in C
```c
#include <stdio.h>

int BubbleSort(int array[], int n);

int main(void) {
  int arr[] = {10, 2, 3, 1, 4, 5, 8, 9, 7, 6};
  BubbleSort(arr, 10);

  for (int i = 0; i < 10; i++) {
    printf("%d", arr[i]);
  }
  return 0;
}
int BubbleSort(int array[], n)
{
for (int i = 0 ; i < n - 1; i++)
  {
    for (int j = 0 ; j < n - i - 1; j++)     //n is length of array
    {
      if (array[j] > array[j+1])      // For decreasing order use 
      {
        int swap   = array[j];
        array[j]   = array[j+1];
        array[j+1] = swap;
      }
    }
  }
}
```

### More Information
- [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
- [Bubble Sort Algorithm - CS50](https://youtu.be/Ui97-_n5xjo)
- [Bubble Sort Algorithm - GeeksForGeeks (article)](http://www.geeksforgeeks.org/bubble-sort)
- [Bubble Sort Algorithm - MyCodeSchool (video)](https://www.youtube.com/watch?v=Jdtq5uKz-w4)
- [Algorithms: Bubble Sort - HackerRank (video)](https://www.youtube.com/watch?v=6Gv8vg0kcHc)
- [Bubble Sort Algorithm - GeeksForGeeks (video)](https://www.youtube.com/watch?v=nmhjrI-aW5o)
- [Bubble Sort Visualization](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)

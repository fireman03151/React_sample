---
title: Linear Search
---
## Linear Search

Suppose you are given a list or an array of items. You are searching for a particular item. How do you do that?

Find the number 13 in the given list.

![Linear Search 1](https://cdn-media-1.freecodecamp.org/imgr/ThkzYEV.jpg)

You just look at the list and there it is!

![Linear Search 2](https://cdn-media-1.freecodecamp.org/imgr/K7HfCly.jpg)

Now, how do you tell a computer to find it.

A computer cannot look at more than the value at a given instant of time. So it takes one item from the array and checks if it is the same as what you are looking for.

![Linear Search 3](https://cdn-media-1.freecodecamp.org/imgr/ZOSxeZD.jpg)

The first item did not match. So move onto the next one.

![Linear Search 4](https://cdn-media-1.freecodecamp.org/imgr/SwKsPxD.jpg)

And so on...

This is done till a match is found or until all the items have been checked.

![Linear Search 5](https://cdn-media-1.freecodecamp.org/imgr/3AaViff.jpg)

In this algorithm, you can stop when the item is found and then there is no need to look further.

So how long would it take to do the linear search operation?
In the best case, you could get lucky and the item you are looking at maybe at the first position in the array!
But in the worst case, you would have to look at each and every item before you find the item at the last place or before you realize that the item is not in the array.

The complexity therefore of the linear search is O(n).

If the element to be searched presides on the the first memory block then the complexity would be O(1).

The code for a linear search function in JavaScript is shown below. This function returns the position of the item we are looking for in the array. If the item is not present in the array, the function would return null.

```
int linearSearch(int arr[], int num)
{
        int len = (int)( sizeof(arr) / sizeof(arr[0]);
        int *a = arr;
        for(int i = 0; i < len; i++)
        {
                if(*(a+i) == num) return i;
        }
        return -1;
}

```

### Example in JavaScript
```javascript
function linearSearch(arr, item) {
  // Go through all the elements of arr to look for item.
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) { // Found it!
      return i;
    }
  }
  
  // Item not found in the array.
  return null;
}
```

### Example in Ruby

```ruby
def linear_search(target, array)
  counter = 0

  while counter < array.length
    if array[counter] == target
      return counter
    else
      counter += 1
    end
  end
  return nil
end
```
### Example in C++

```cpp
int linear_search(int arr[],int n,int num)
{
	for(int i=0;i<n;i++){
		if(arr[i]==num)
			return i;
   }
   // Item not found in the array
   return -1; 
}
```
### Example in C

### Example in Python
```python
def linear_search(array, num):
	for index, element in enumerate(array):
		if element == num:
			return index
	return -1
```

### Example in Swift
```swift
func linearSearch(for number: Int, in array: [Int]) -> Int? {
    for (index, value) in array.enumerated() {
        if value == number { return index } // return the index of the number
    }
    return nil // the number was not found in the array
}
```

### Example in Java
```java
int linearSearch(int[] arr, int element)
{
        for(int i=0;i<arr.length;i++)
        {
                if(arr[i] == element)
                        return i;
        }
        return -1;
}

```

### Example in PHP

```php
function linear_search($arr=[],$num=0)
{
     $n = count($arr);   
     for( $i=0; $i<$n; $i++){
           if($arr[$i] == $num)
                return $i;
      }
      // Item not found in the array
      return -1; 
}

$arr = array(1,3,2,8,5,7,4,0);
print("Linear search result for 2: ");
echo linear_search($arr,2);

```

## Global Linear Search

What if you are searching the multiple occurrences of an element? For example you want to see how many 5’s are in an array.

Target = 5

Array = [ 1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 5]

This array has 3 occurances of 5s and we want to return the indexes (where they are in the array) of all of them. This is called global linear search. You will need to adjust your code to return an array of the index points at which it finds the target element. When you find an index element that matches your target, the index point (counter) will be added in the results array. If it doesn’t match the code will continue to move on to the next element in the array by adding 1 to the counter.

```ruby
def global_linear_search(target, array)
  counter = 0
  results = []

  while counter < array.length
    if array[counter] == target
      results << counter
      counter += 1
    else
      counter += 1
    end
  end

  if results.empty?
    return nil
  else
    return results
  end
end
```

## Why linear search is not efficient

There is no doubt that linear search is simple but because it compares each element one by one, it is time consuming and hence not very efficient. If we have to find a number from say, 1000000 numbers and number is at the last location, linear search technique would become quite tedious. So, also learn about binary search, exponential search, etc. which are much more efficient than linear search.

#### Relevant Video:

#### Other Resources
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://www.youtube.com/watch?v=vZWfKBdSgXI' target='_blank' rel='nofollow'>Linear Search - CS50</a>

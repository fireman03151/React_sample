---
title: Divide and Conquer Algorithms
---
## Divide and Conquer Algorithms


Divide and Conquer 

 Divide and Conquer is an algorithmic paradigm, similar to Greedy and Dynamic Programming. A typical Divide and Conquer algorithm solves a problem using the following three steps.

1. **Divide**: Break the given problem into subproblems of same type. This step involves breaking the problem into smaller sub-problems. Sub-problems should represent a part of the original problem. This step generally takes a recursive approach to divide the problem until no sub-problem is further divisible. At this stage, sub-problems become atomic in nature but still represent some part of the actual problem.
2. **Conquer**: Recursively solve these sub-problems. This step receives a lot of smaller sub-problems to be solved. Generally, at this level, the problems are considered 'solved' on their own.
3. **Combine**: Appropriately combine the answers. When the smaller sub-problems are solved, this stage recursively combines them until they formulate a solution of the original problem. This algorithmic approach works recursively and conquer & merge steps works so close that they appear as one.

This method usually allows us to reduce the time complexity by a large extent.

For example, Bubble Sort uses a complexity of O(n^2), whereas quicksort (an application Of Divide And Conquer) reduces the time complexity to O(nlog(n)). Linear Search has time complexity O(n), whereas Binary Search (an application Of Divide And Conquer) reduces time complexity to O(log(n)).

Following are some standard algorithms that are of the  Divide and Conquer algorithms variety.

1) **Binary Search** is a searching algorithm. In each step, the algorithm compares the input element (x) with the value of the middle element in array. If the values match, return the index of middle. Otherwise, if x is less than the middle element, then the algorithm recurs to the left side of the middle element, else it recurs to the right side of the middle element.

2) **Quicksort** is a sorting algorithm. The algorithm picks a pivot element, rearranges the array elements in such a way that all elements smaller than the picked pivot element move to the left side of the pivot, and all greater elements move to the right side. Finally, the algorithm recursively sorts the subarrays on left and right of pivot element.

3) **Merge Sort** is also a sorting algorithm. The algorithm divides the array into two halves, recursively sorts them, and finally merges the two sorted halves. The time complexity of this algorithm is O(nLogn), be it best case, average case or worst case. It's time complexity can be easily understood from the recurrence equat :T(n) = 2T(n/2) + n.

4) **Closest Pair of Points** The problem is to find the closest pair of points in a set of points in x-y plane. The problem can be solved in O(n^2) time by calculating distances of every pair of points and comparing the distances to find the minimum. The Divide and Conquer algorithm solves the problem in O(nLogn) time.

5) **Strassen’s Algorithm** is an efficient algorithm to multiply two matrices. A simple method to multiply two matrices need 3 nested loops and is O(n^3). Strassen’s algorithm multiplies two matrices in O(n^2.8974) time.

6) **Cooley–Tukey Fast Fourier Transform (FFT) algorithm** is the most common algorithm for FFT. It is a divide and conquer algorithm which works in O(nlogn) time.


7) **The Karatsuba algorithm** was the first multiplication algorithm asymptotically faster than the quadratic "grade school" algorithm. It reduces the multiplication of two n-digit numbers to at most to n^1.585(which is approximation of log of 3 in base 2) single digit products. It is therefore faster than the classical algorithm, which requires n^2 single-digit products. 

### Divide and Conquer (D & C) vs Dynamic Programming (DP)

Both paradigms (D & C and DP) divide the given problem into subproblems and solve subproblems. How to choose one of them for a given problem? Divide and Conquer should be used when same subproblems are not evaluated many times. Otherwise Dynamic Programming or Memoization should be used.

For example, Binary Search is a Divide and Conquer algorithm, we never evaluate the same subproblems again. On the other hand, for calculating the nth Fibonacci number, Dynamic Programming should be preferred.

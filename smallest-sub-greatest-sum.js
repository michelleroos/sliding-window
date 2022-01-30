/*
Problem Statement#
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
*/

const smallest_subarray_sum = function (arr, s) {
  let start = 0;
  let sum = 0;
  let min = Infinity;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum >= s) {
      let len = end - start + 1;
      min = Math.min(len, min);
      sum -= arr[start];
      start++;
    }
  }
  return min === Infinity ? 0 : min;
};

/**
Time Complexity#
The time complexity of the above algorithm will be O(N)O(N). The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N)O(N).

Space Complexity#
The algorithm runs in constant space O(1)O(1).
 */

const arr1 = [2, 1, 5, 2, 3, 2], s1 = 7 
console.log(smallest_subarray_sum(arr1, s1));
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

const arr2 = [2, 1, 5, 2, 8], s2 = 7 
console.log(smallest_subarray_sum(arr2, s2));
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

const arr3 = [3, 4, 1, 1, 6], s3 = 8 
console.log(smallest_subarray_sum(arr3, s3));
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
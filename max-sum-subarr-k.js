/*
Easy
Problem Statement#
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
*/

const max_sub_array_of_size_k = function (arr, k) {
  let max = 0;
  let curr = 0;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    curr += arr[j];
    if (j >= k - 1) {
      max = Math.max(max, curr);
      curr -= arr[i];
      i++;
    }
  }
  return max;
};

/*
Time Complexity#
The time complexity of the above algorithm will be O(N)O(N).

Space Complexity#
The algorithm runs in constant space O(1)O(1). 
*/

const arr1 = [2, 1, 5, 1, 3, 2], k1 = 3; 
console.log(max_sub_array_of_size_k(arr1, k1));
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

const arr2 = [2, 3, 4, 1, 5], k2 = 2; 
console.log(max_sub_array_of_size_k(arr2, k2));
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].
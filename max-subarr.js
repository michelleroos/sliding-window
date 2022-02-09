/*
53. Maximum Subarray Easy

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/
 
var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }
  return max;
};

const nums1 = [-2,1,-3,4,-1,2,1,-5,4];
console.log(func(num1));
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


const nums2 = [1];
console.log(func(nums2));
// Output: 1


const nums3 = [5,4,-1,7,8];
console.log(func(nums3));
// Output: 23
 
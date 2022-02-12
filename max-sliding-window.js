/*
239. Sliding Window Maximum Hard
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
*/

const maxSlidingWindow = function (nums, k) {
  let result = [];
  let left = 0
  let right = 0; // 1
  let q = []; // 0
  while (right < nums.length) { // 3

    while (q.length && nums[q[q.length - 1]] < nums[right]) { // while smaller vals in q
      q.pop();
    }

    q.push(right) // then push the idx so we can check OOB next

    while (left > q[0]) { // if leftmost val in q is OOB, remove from q
      q.shift()
    }

    if ((right + 1) >= k) {
      result.push(nums[q[0]]);
      left++;
    }
    right++;
  }
  return result;
};

const nums1 = [1,3,-1,-3,5,3,6,7], k1 = 3;
console.log(maxSlidingWindow(nums1, k1));
// Output: [3,3,5,5,6,7]
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

const nums2 = [1], k2 = 1;
console.log(maxSlidingWindow(nums2, k2));
// Output: [1]

// MONOTONIC STACK (DECREASING)


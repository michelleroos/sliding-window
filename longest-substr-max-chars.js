/*
Medium
Problem Statement#
Given a string, find the length of the longest substring in it with no more than K distinct characters.
*/

const longest_substring_with_k_distinct = function (str, k) {
  const tracker = {}
  let max = -Infinity;
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    const lastEle = str[end];
    if (!(lastEle in tracker)) tracker[lastEle] = 0;
    tracker[lastEle]++;
    while (findObjectLength(tracker) > k) {
      const firstEle = str[start];
      tracker[firstEle]--;
      if (tracker[firstEle] === 0) delete tracker[firstEle];
      start++;
    }
    const len = end - start + 1;
    max = Math.max(max, len);
  }
  return max;
};

const findObjectLength = (object) => {
  let count = 0;
  for (let key in object) count++;
  return count;
}

/*
Time Complexity#
The above algorithm’s time complexity will be O(N)O(N), where NN is the number of characters in the input string. The outer for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N)O(N).

Space Complexity#
The algorithm’s space complexity is O(K)O(K), as we will be storing a maximum of K+1K+1 characters in the HashMap.
*/

const str1 = "araaci", s1 = 2;
console.log(longest_substring_with_k_distinct(str1, s1));
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

const str2 = "araaci", s2 = 1;
console.log(longest_substring_with_k_distinct(str2, s2));
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".

const str3 = "cbbebi", s3 = 3;
console.log(longest_substring_with_k_distinct(str3, s3));
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

const str4 = "cbbebi", s4 = 10;
console.log(longest_substring_with_k_distinct(str4, s4));
// Output: 6
// Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".
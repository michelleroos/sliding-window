/*
Problem Statement#
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.
*/

const fruits_into_baskets = function (fruits) {
  const tracker = {};
  let max = -Infinity;
  let start = 0;
  for (let end = 0; end < fruits.length; end++) {
    const lastEle = fruits[end];
    if (!(lastEle in tracker)) tracker[lastEle] = 0;
    tracker[lastEle]++;
    while (trackerSize(tracker) > 2) {
      const startEle = fruits[start];
      tracker[startEle]--;
      if (tracker[startEle] === 0) delete tracker[startEle];
      start++;
    }
    const len = end - start + 1;
    max = Math.max(max, len);
  }
  return max;
};

const trackerSize = (tracker) => {
  return Object.keys(tracker).length;
}


const fruit1 = ['A', 'B', 'C', 'A', 'C'];
console.log(fruits_into_baskets(fruit1));
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

const fruit2 = ['A', 'B', 'C', 'B', 'B', 'C'];
console.log(fruits_into_baskets(fruit2));
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
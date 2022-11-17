/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let newNums = [];
  for (let i = 0; i < n; i++) {
    newNums.push(nums[i]);
    newNums.push(nums[i + n]);
  }
  return newNums;
};

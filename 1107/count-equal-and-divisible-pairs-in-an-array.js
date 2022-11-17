/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const passed = i < j && nums[i] == nums[j] && (i * j == 0 || Number.isInteger((i * j) / k));
      if (passed) {
        count += 1;
      }
    }
  }
  return count;
};

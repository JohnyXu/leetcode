/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let count = 0;
  nums.forEach((num, index) => {
    for (let i = index + 1; i < nums.length; i++) {
      const diff = nums[i] - num;
      if (Math.abs(diff) == k) {
        count += 1;
      }
    }
  });
  return count;
};

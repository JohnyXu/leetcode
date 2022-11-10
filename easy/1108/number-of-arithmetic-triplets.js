/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const next = nums[i] + diff;
    const nextNext = nums[i] + 2 * diff;
    if (nums.indexOf(next) >= 0 && nums.indexOf(nextNext) >= 0) {
      count += 1;
    }
  }
  return count;
};

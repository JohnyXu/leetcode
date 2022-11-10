/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let prev = nums[0];
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - prev;
    if (diff == 0) {
      count += 1;
      prev = prev + 1;
    } else if (diff < 0) {
      const add = Math.abs(diff) + 1;
      count = count + add;
      prev = nums[i] + add;
    } else {
      prev = nums[i];
    }
  }
  return count;
};

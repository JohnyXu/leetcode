/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => {
    return b - a;
  });

  return nums[0] * nums[1] - nums[nums.length - 2] * nums[nums.length - 1];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return nums.map((num, index) => {
    return nums[nums[index]];
  });
};

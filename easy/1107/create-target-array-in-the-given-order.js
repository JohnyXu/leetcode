/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    const newIdx = index[i];
    target.splice(newIdx, 0, nums[i]);
  }
  return target;
};

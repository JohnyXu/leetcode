/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numMap = {};
  for (const [index, num] of Object.entries(nums)) {
    const tNum = target - num;
    if (numMap[tNum]) {
      return [index, numMap[tNum]];
    }
    numMap[num] = index;
  }
};

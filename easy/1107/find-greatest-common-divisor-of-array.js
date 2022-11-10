/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  let min = nums[0];
  let max = nums[nums.length - 1];

  while (max % min != 0) {
    let mod = max % min;
    max = min;
    min = mod;
  }
  return min;
};

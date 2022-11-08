/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  return nums.map((num) => {
    let res = 0;
    for (const value of nums) {
      res = res + (value < num ? 1 : 0);
    }
    return res;
  });
};

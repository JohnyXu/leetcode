/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let prev = 0;
  return nums.map((num) => {
    let res = num + prev;
    prev = res;
    return res;
  });
};

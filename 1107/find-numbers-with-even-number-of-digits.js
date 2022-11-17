/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  nums.forEach((num) => {
    let len = 0;
    while (Math.floor(num / 10) > 0) {
      num = Math.floor(num / 10);
      len += 1;
    }
    len += 1;
    if (len % 2 == 0) {
      count += 1;
    }
  });
  return count;
};

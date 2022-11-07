/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const palindDromeX = Number(x.toString().split('').reverse().join(''));
  return palindDromeX == x;
};

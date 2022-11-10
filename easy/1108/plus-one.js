/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let higher = 1;
  for (let index = digits.length - 1; index >= 0; index--) {
    const digit = digits[index];
    if (digit + higher >= 10) {
      digits[index] = 0;
      higher = 1;
    } else {
      digits[index] += higher;
      higher = 0;
      break;
    }
  }
  if (higher > 0) {
    return [higher].concat(digits);
  }
  return digits;
};

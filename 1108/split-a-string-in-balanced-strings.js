/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let accString = '';
  for (let i = 0; i < s.length; i = i + 2) {
    accString = accString + s.substring(i, i + 2);
    const countL = accString.split('').reduce((sum, ch) => {
      return sum + (ch == 'L' ? 1 : 0);
    }, 0);
    const countR = accString.split('').reduce((sum, ch) => {
      return sum + (ch == 'R' ? 1 : 0);
    }, 0);
    if (countL == countR) {
      count += 1;
      accString = '';
    }
  }
  return count;
};

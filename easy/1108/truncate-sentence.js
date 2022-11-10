/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  return s
    .trim()
    .split(' ')
    .filter((word, index) => {
      return index < k;
    })
    .join(' ');
};

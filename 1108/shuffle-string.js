/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  return indices
    .map((num, index) => {
      return {
        num: num,
        ch: s[index],
      };
    })
    .sort((a, b) => {
      return a.num - b.num;
    })
    .map(({ ch }) => {
      return ch;
    })
    .join('');
};

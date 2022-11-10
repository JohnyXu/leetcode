/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  words.forEach((word) => {
    count = count + (word.startsWith(pref) ? 1 : 0);
  });
  return count;
};

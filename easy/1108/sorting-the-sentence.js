/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  return s
    .split(' ')
    .map((word) => {
      return {
        word: word.substring(0, word.length - 1),
        num: parseInt(word[word.length - 1]),
      };
    })
    .sort((a, b) => {
      return a.num - b.num;
    })
    .map(({ word }) => word)
    .join(' ');
};

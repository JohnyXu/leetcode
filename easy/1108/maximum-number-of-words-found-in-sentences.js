/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
  for (let index = 0; index < sentences.length; index++) {
    let words = sentences[index].trim().split(' ');
    if (words.length > max) {
      max = words.length;
    }
  }
  return max;
};

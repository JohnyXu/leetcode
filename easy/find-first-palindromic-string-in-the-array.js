/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  let first = '';
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.split('').reverse().join('') == word) {
      first = word;
      break;
    }
  }
  return first;
};

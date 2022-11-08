/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = words.length;
  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (!allowed.includes(word[i])) {
        count -= 1;
        break;
      }
    }
  });
  return count;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longestCommonPrefix = '';
  if (!strs || strs.length == 0) {
    return longestCommonPrefix;
  }
  let minLength = strs[0].length;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length;
    }
  }

  for (let i = 0; i < minLength; i++) {
    let current = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != current) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix = longestCommonPrefix + current;
  }
  return longestCommonPrefix;
};

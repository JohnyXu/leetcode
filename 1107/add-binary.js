/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let longString = a.length > b.length ? a : b;
  let shortString = a.length > b.length ? b : a;
  let max = longString.length;
  let min = shortString.length;

  let higher = 0;
  let newString = [];
  for (let index = max - 1; index >= 0; index--) {
    const bitLong = longString[index];
    const bitShort = min - max + index >= 0 ? shortString[min - max + index]  :'''';
    const bit = parseInt(bitLong, 10) + parseInt(bitShort, 10) + higher;
    if (bit > 1) {
      newString.push(bit % 2);
      higher = 1;
    } else {
      newString.push(bit);
      higher = 0;
    }
  }
  if (higher > 0) {
    return [1].concat(newString.reverse()).join('');
  }
  return newString.reverse().join('');
};

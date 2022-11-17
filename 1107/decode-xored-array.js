/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let target = [first];
  let mid = first;
  for (let i = 0; i < encoded.length; i++) {
    const left = encoded[i] ^ mid;
    target.push(left);
    mid = left;
  }
  return target;
};

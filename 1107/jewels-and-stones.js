/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let jewelsMap = {};
  jewels.split('').forEach((ch) => {
    jewelsMap[ch] = true;
  });
  let count = 0;
  for (let index = 0; index < stones.length; index++) {
    const key = stones[index];
    if (jewelsMap[key]) {
      count += 1;
    }
  }
  return count;
};

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let high = 0;
  let acc = 0;
  for (let i = 0; i < gain.length; i++) {
    acc += gain[i];
    if (acc > high) {
      high = acc;
    }
  }
  return high;
};

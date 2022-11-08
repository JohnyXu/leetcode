/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let countMap = {};
  let max = 0;
  rectangles.forEach((pair) => {
    pair.sort((a, b) => a - b);
    const side = pair[0];
    if (side > max) {
      max = side;
    }
    countMap[side] = (countMap[side] || 0) + 1;
  });
  return countMap[max];
};

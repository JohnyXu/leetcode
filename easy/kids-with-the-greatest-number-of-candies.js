/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  for (const num of candies) {
    if (num >= max) {
      max = num;
    }
  }
  return candies.map((num) => {
    return num + extraCandies >= max;
  });
};

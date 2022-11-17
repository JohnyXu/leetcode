/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let count = 0;
  let past = 0;
  for (let i = 1; i < points.length; i++) {
    let x = points[i][0] - points[past][0];
    let y = points[i][1] - points[past][1];
    if (Math.abs(x) > Math.abs(y)) {
      count = count + Math.abs(x);
    } else {
      count = count + Math.abs(y);
    }
    past = i;
  }
  return count;
};

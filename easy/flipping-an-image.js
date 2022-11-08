/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((row) => {
    return row.reverse().map((num) => {
      return num == 0 ? 1 : 0;
    });
  });
};

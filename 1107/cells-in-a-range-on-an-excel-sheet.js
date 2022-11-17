/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  cells = s.split(':');

  col1 = cells[0][0]; //K
  row1 = cells[0][1]; //1

  col2 = cells[1][0]; //L
  row2 = cells[1][1]; //2

  const rowCount = parseInt(row2) - parseInt(row1) + 1;
  const colCount = col2.charCodeAt(0) - col1.charCodeAt(0) + 1;
  let res = [];
  for (let i = 0; i < colCount; i++) {
    let newCh = String.fromCharCode(col1.charCodeAt(0) + i);
    for (let j = 0; j < rowCount; j++) {
      const newRow = parseInt(row1) + j;
      res.push(newCh + newRow);
    }
  }
  return res;
};

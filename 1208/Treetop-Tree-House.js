const fs = require('fs');

// const fileName = './Treetop-sample.txt';
const fileName = './Treetop-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines.map((line) => line.split('').map((num) => +num));
}

function isDirectionVisible(directions, value) {
  return directions.some((elements) => {
    return elements.every((num) => num < value);
  });
}

function getDirections(row, col, rowList, colList) {
  const left = rowList.filter((num, index) => index < col);
  const right = rowList.filter((num, index) => index > col);
  const up = colList.filter((num, index) => index < row);
  const down = colList.filter((num, index) => index > row);
  return [up, right, down, left];
}

function isVisable(row, col, value, rowList, colList) {
  if (row === 0 || col === 0) {
    return true;
  }
  if (row === rowList.length - 1 || col === colList.length - 1) {
    return true;
  }

  const directions = getDirections(row, col, rowList, colList);
  if (isDirectionVisible(directions, value)) {
    return true;
  }
  return false;
}

function getRowAndCols(matrix, row, col) {
  let rowList = matrix[row];
  let colList = [];
  for (let r = 0; r < rowList.length; r++) {
    colList.push(matrix[r][col]);
  }
  return [rowList, colList];
}

function part1() {
  const matrix = readFile();
  let count = 0;
  const totalRow = matrix.length;
  const totalCol = matrix[0].length;
  for (let row = 0; row < totalRow; row++) {
    for (let col = 0; col < totalCol; col++) {
      const [rowList, colList] = getRowAndCols(matrix, row, col);
      const value = matrix[row][col];
      if (isVisable(row, col, value, rowList, colList)) {
        count += 1;
      }
    }
  }
  console.log(count);
}

part1();

function calculateCount(list, value) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    const e = list[i];
    if (e < value) {
      count += 1;
    } else {
      count += 1;
      break;
    }
  }
  return count;
}

function caculateScore(row, col, value, rowList, colList) {
  const directions = getDirections(row, col, rowList, colList);
  const [up, right, down, left] = directions;
  let upCount = calculateCount(up.reverse(), value);
  let rightCount = calculateCount(right, value);
  let downCount = calculateCount(down, value);
  let leftCount = calculateCount(left.reverse(), value);
  return leftCount * rightCount * upCount * downCount;
}

function part2() {
  const matrix = readFile();
  let max = 0;
  const totalRow = matrix.length;
  const totalCol = matrix[0].length;
  for (let row = 0; row < totalRow; row++) {
    for (let col = 0; col < totalCol; col++) {
      const [rowList, colList] = getRowAndCols(matrix, row, col);
      const value = matrix[row][col];
      const score = caculateScore(row, col, value, rowList, colList);
      if (score > max) {
        max = score;
      }
    }
  }
  console.log(max);
}

part2();

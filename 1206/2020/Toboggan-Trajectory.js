const fs = require('fs');

// const fileName = './Toboggan-sample.txt';
const fileName = './Toboggan-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function calculateEncounter(lines, right, down) {
  let count = 0;
  let row = 0;
  let col = 0;
  while (true) {
    row += down;
    col += right;
    const colCount = lines[row].length;
    if (col >= colCount) {
      col = col % colCount;
    }
    const ch = lines[row][col];
    if (ch === '#') {
      count += 1;
    }
    if (row >= lines.length - 1) {
      break;
    }
  }
  return count;
}

function part1() {
  const lines = readFile();
  const count = calculateEncounter(lines, 3, 1);
  console.log(count);
}

part1();

function part2() {
  const lines = readFile();
  const nums = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  let total = nums.reduce((sum, pair) => {
    const [right, down] = pair;
    return sum * calculateEncounter(lines, right, down);
  }, 1);
  console.log(total);
}

part2();

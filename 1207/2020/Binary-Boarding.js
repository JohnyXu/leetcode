const fs = require('fs');

// const fileName = './Binary-sample.txt';
const fileName = './Binary-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function getNumByCode(left, right, target, size) {
  let low = 0;
  let high = size;
  for (let i = 0; i < target.length; i++) {
    if (left(target[i])) {
      high = Math.floor((low + high) / 2);
    } else if (right(target[i])) {
      low = Math.ceil((low + high) / 2);
    }
  }
  return (low + high) / 2;
}

function getRowCol(line) {
  const rowObj = {
    left: (ch) => ch === 'F',
    right: (ch) => ch === 'B',
    target: line.substring(0, 7),
    size: 127,
  };
  const colObj = {
    left: (ch) => ch === 'L',
    right: (ch) => ch === 'R',
    target: line.substring(7, 10),
    size: 7,
  };
  const row = getNumByCode(rowObj.left, rowObj.right, rowObj.target, rowObj.size);
  const col = getNumByCode(colObj.left, colObj.right, colObj.target, colObj.size);
  return { row, col };
}

function part1() {
  const lines = readFile();
  let max = 0;
  for (const line of lines) {
    const { row, col } = getRowCol(line);
    const seatId = row * 8 + col;
    if (seatId > max) {
      max = seatId;
    }
  }
  console.log(max);
}

part1();

function part2() {
  const lines = readFile();
  let seats = [];
  for (const line of lines) {
    const { row, col } = getRowCol(line);
    const seatId = row * 8 + col;
    seats.push(seatId);
  }
  seats.sort((a, b) => a - b);
  let targetId = 0;
  const missingSeats = [];
  for (let i = 0; i < seats.length - 1; i++) {
    const current = seats[i];
    const next = seats[i + 1];
    if (next - current > 1) {
      targetId = (current + next) / 2;
      missingSeats.push(targetId);
      break;
    }
  }
  if (missingSeats.length == 1 && targetId > 0) {
    console.log(targetId);
  }
}

part2();

const fs = require('fs');

// 3423511;
// 5132379;
// const fileName = './Tyranny-sample.txt';
const fileName = './Tyranny-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function getDatas() {
  const lines = readFile();
  return lines.map((num) => parseInt(num));
}

function part1() {
  const nums = getDatas();
  const sum = nums.reduce((total, current) => {
    return total + (Math.floor(current / 3) - 2);
  }, 0);
  console.log(sum);
}

part1();

function part2() {
  const nums = getDatas();
  const sum = nums.reduce((total, current) => {
    let amount = 0;
    let num = current;
    while (true) {
      let cost = Math.floor(num / 3) - 2;
      if (cost <= 0) {
        break;
      }
      amount += cost;
      num = cost;
    }
    return total + amount;
  }, 0);
  console.log(sum);
}

part2();

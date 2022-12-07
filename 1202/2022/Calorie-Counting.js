const fs = require('fs');

const fileName = './Calorie-data.txt';
function part1() {
  let datas = [];
  let group = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  for (const line of lines) {
    if (line.trim()) {
      group.push(parseInt(line));
    } else {
      datas.push(group);
      group = [];
    }
  }

  let max = 0;
  for (const group of datas) {
    let sum = group.reduce((s1, c1) => s1 + c1, 0);
    if (max < sum) {
      max = sum;
    }
  }
  console.log(max);
}

function part2() {
  let datas = [];
  let group = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  for (const line of lines) {
    if (line.trim()) {
      group.push(parseInt(line));
    } else {
      datas.push(group);
      group = [];
    }
  }

  let max = [];
  for (const group of datas) {
    let sum = group.reduce((s1, c1) => s1 + c1, 0);
    max.push(sum);
  }
  max.sort((a, b) => b - a);
  const sum = max[0] + max[1] + max[2];
  console.log(sum);
}

part1();
part2();

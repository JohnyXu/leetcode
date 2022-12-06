const fs = require('fs');

const fileName = './Report-data.txt';

function part1() {
  let datas = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  for (const line of lines) {
    datas.push(parseInt(line));
  }
  let numMap = {};
  for (const num of datas) {
    const target = 2020 - num;
    if (numMap[target]) {
      console.log(num, target, num * target);
      break;
    } else {
      numMap[num] = true;
    }
  }
}

function part2() {
  let datas = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  for (const line of lines) {
    datas.push(parseInt(line));
  }
  let numMap = {};
  for (let i = 0; i < datas.length; i++) {
    for (let j = i + 1; j < datas.length; j++) {
      for (let k = 0; k < datas.length; k++) {
        if (datas[i] + datas[j] + datas[k] === 2020 && (i < j) & (j < k)) {
          console.log(datas[i], datas[j], datas[k], datas[i] * datas[j] * datas[k]);
        }
      }
    }
  }
}
part2();

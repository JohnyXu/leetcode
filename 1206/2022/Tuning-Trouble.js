const fs = require('fs');

const fileName = './Tuning-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}
function getLastSubstring(count, index, dataString) {
  let strs = [];
  for (let i = index - count; i < index; i++) {
    const e = dataString[i];
    if (strs.includes(e)) {
      return strs;
    } else {
      strs.push(e);
    }
  }
  return strs;
}

function part1() {
  const lines = readFile();
  const dataString = lines[0];
  let marker = 0;
  const count = 4;
  for (let index = count; index < dataString.length; index++) {
    let strs = getLastSubstring(count, index, dataString);
    if (strs.length === count) {
      marker = index;
      break;
    }
  }
  console.log(marker);
}

part1();

function part1() {
  const lines = readFile();
  const dataString = lines[0];
  let marker = 0;
  const count = 14;
  for (let index = count; index < dataString.length; index++) {
    let strs = getLastSubstring(count, index, dataString);
    if (strs.length === count) {
      marker = index;
      break;
    }
  }
  console.log(marker);
}

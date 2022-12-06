const fs = require('fs');

const fileName = './Password-data.txt';

function getData(line) {
  const elements = line.split(':');
  const fronts = elements[0].split(' ');
  const nums = fronts[0].split('-');
  const start = +nums[0];
  const end = +nums[1];
  return { start, end, target: fronts[1], targetString: elements[1].trim() };
}

function part1() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  let count = 0;
  for (const line of lines) {
    const { start, end, target, targetString } = getData(line);
    let numMap = {};
    for (const ch of targetString) {
      numMap[ch] = (numMap[ch] || 0) + 1;
    }
    if (numMap[target] >= start && numMap[target] <= end) {
      count++;
    }
  }
  console.log(count);
  return count;
}

function part2() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  let count = 0;
  for (const line of lines) {
    const { start, end, target, targetString } = getData(line);
    const startIdx = start - 1;
    const endIdx = end - 1;

    const enable =
      (targetString[startIdx] === target || targetString[endIdx] === target) &&
      targetString[startIdx] !== targetString[endIdx];

    if (enable) {
      count++;
    }
  }
  console.log(count);
  return count;
}

part1();
part2();

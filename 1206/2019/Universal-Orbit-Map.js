const fs = require('fs');

const fileName = './Universal-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function part1() {
  const lines = readFile();
  const reverseDatas = {};
  for (const line of lines) {
    const pair = line.split(')');
    const [key, value] = pair;
    reverseDatas[value] = key;
  }
  let count = 0;
  for (const key of Object.keys(reverseDatas)) {
    let tKey = key;
    while (true) {
      if (reverseDatas[tKey]) {
        count += 1;
        tKey = reverseDatas[tKey];
      } else {
        break;
      }
    }
  }
  console.log(count);
}
// part1();

function findParents(key, datas) {
  let parents = [];

  let count = 0;
  let nextKey = key;
  while (true) {
    const parObj = {};
    const e = datas[nextKey];
    if (e) {
      count++;
      nextKey = e;
      parents.push({
        count: count,
        parent: e,
      });
    } else {
      break;
    }
  }
  return parents;
}

function part2() {
  const lines = readFile();
  const reverseDatas = {};
  for (const line of lines) {
    const pair = line.split(')');
    const [key, value] = pair;
    reverseDatas[value] = key;
  }
  const start = 'YOU';
  const target = 'SAN';
  let parentsYou = findParents(start, reverseDatas);
  let parentsSan = findParents(target, reverseDatas);

  const parentsSanList = parentsSan.map((item) => {
    return item.parent;
  });

  let parentsSanMap = {};
  for (const { count, parent } of parentsSan) {
    parentsSanMap[parent] = count;
  }
  let total = 0;
  for (const { count, parent } of parentsYou) {
    if (parentsSanList.includes(parent)) {
      total = total + count + parentsSanMap[parent] - 2;
      break;
    }
  }
  console.log(total);
}

part2();

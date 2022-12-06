const fs = require('fs');

const fileName = './Sunny-data.txt';

function getData(datas, position, mode) {
  return +mode === 0 ? datas[position] : position;
}

function getMode(originNum) {
  const modes = [
    Math.floor(originNum / 100) % 10,
    Math.floor(originNum / 1000) % 10,
    Math.floor(originNum / 10000) % 10,
  ];
  return modes;
}

function part1() {
  let datas = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  datas = lines[0].split(',').map((num) => +num);

  let index = 0;
  const skipMap = {
    1: 4,
    2: 4,
    3: 2,
    4: 2,
  };
  while (true) {
    const originNum = datas[index];
    const num = originNum % 100;
    if (originNum == 99) {
      break;
    }
    const modes = getMode(originNum);
    const first = getData(datas, index + 1, modes[0]);
    const second = getData(datas, index + 2, modes[1]);
    const third = getData(datas, index + 3, modes[2]);
    switch (num) {
      case 1:
        datas[third] = datas[first] + datas[second];
        break;
      case 2:
        datas[third] = datas[first] * datas[second];
        break;
      case 3:
        datas[first] = 1;
        break;
      case 4:
        console.log(datas[first]);
        break;
      default:
        break;
    }
    let skipCount = skipMap[num];
    index = index + skipCount;
  }
}

function part2() {
  let datas = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  datas = lines[0].split(',').map((num) => +num);

  let index = 0;
  const skipMap = {
    1: 4,
    2: 4,
    3: 2,
    4: 2,
    5: 3,
    6: 3,
    7: 4,
    8: 4,
  };
  while (true) {
    const originNum = datas[index];
    const num = originNum % 100;
    if (originNum == 99) {
      break;
    }
    const modes = getMode(originNum);
    const first = getData(datas, index + 1, modes[0]);
    const second = getData(datas, index + 2, modes[1]);
    const third = getData(datas, index + 3, modes[2]);
    let skipCount = skipMap[num];

    index = index + skipCount;
    switch (num) {
      case 1:
        datas[third] = datas[first] + datas[second];
        break;
      case 2:
        datas[third] = datas[first] * datas[second];
        break;
      case 3:
        datas[first] = 5;
        break;
      case 4:
        console.log(datas[first]);
        break;
      case 5:
        if (datas[first]) {
          index = datas[second];
        }
        break;
      case 6:
        if (!datas[first]) {
          index = datas[second];
        }
        break;
      case 7:
        datas[third] = datas[first] < datas[second] ? 1 : 0;
        break;
      case 8:
        datas[third] = datas[first] === datas[second] ? 1 : 0;
        break;
      default:
        break;
    }
  }
}

part1();
part2();

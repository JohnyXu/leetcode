const fs = require('fs');

// 8015;
// 163676;
// const fileName = './Crossed-sample.txt';
const fileName = './Crossed-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function getDatas() {
  const lines = readFile();
  return lines;
}

function getDots(sList) {
  let s1Dots = [];
  let lastX = 0;
  let lastY = 0;
  let count = 0;
  for (const move of sList) {
    const dir = move[0];
    const num = parseInt(move.substr(1));
    let moveX = lastX;
    let moveY = lastY;
    switch (dir) {
      case 'L':
        for (let i = 1; i <= num; i++) {
          moveX = lastX - i;
          s1Dots.push(`${moveX}|${moveY}|${count}`);
        }
        break;
      case 'R':
        for (let i = 1; i <= num; i++) {
          moveX = lastX + i;
          s1Dots.push(`${moveX}|${moveY}|${count}`);
        }
        break;
      case 'U':
        for (let i = 1; i <= num; i++) {
          moveY = lastY + i;
          s1Dots.push(`${moveX}|${moveY}|${count}`);
        }
        break;
      case 'D':
        for (let i = 1; i <= num; i++) {
          moveY = lastY - i;
          s1Dots.push(`${moveX}|${moveY}|${count}`);
        }
        break;
      default:
        break;
    }
    lastX = moveX;
    lastY = moveY;
  }
  return s1Dots;
}

function part1() {
  const lines = getDatas();
  const [s1, s2] = lines;
  const s1List = s1.split(',');
  const s2List = s2.split(',');

  let s1Dots = getDots(s1List);
  let s2Dots = getDots(s2List);
  let s2Sets = new Set(s2Dots);

  let intersectionDots = [];
  for (const dot of s1Dots) {
    if (s2Sets.has(dot)) {
      intersectionDots.push(dot);
    }
  }

  let min = 9999999999;
  for (const dot of intersectionDots) {
    const dots = dot.split('|');
    const sum = Math.abs(parseInt(dots[0])) + Math.abs(parseInt(dots[1]));
    if ((sum > 0) & (sum < min)) {
      min = sum;
    }
  }

  console.log(min);
}

part1();

function getDots2(sList) {
  let s1Dots = {};
  let lastX = 0;
  let lastY = 0;
  let count = 0;
  for (const move of sList) {
    const dir = move[0];
    const num = parseInt(move.substr(1));
    let moveX = lastX;
    let moveY = lastY;
    switch (dir) {
      case 'L':
        for (let i = 1; i <= num; i++) {
          moveX = lastX - i;
          const key = `${moveX}|${moveY}`;
          ++count;
          if (!s1Dots[key]) {
            s1Dots[key] = count;
          }
        }
        break;
      case 'R':
        for (let i = 1; i <= num; i++) {
          moveX = lastX + i;
          const key = `${moveX}|${moveY}`;
          ++count;
          if (!s1Dots[key]) {
            s1Dots[key] = count;
          }
        }
        break;
      case 'U':
        for (let i = 1; i <= num; i++) {
          moveY = lastY + i;
          const key = `${moveX}|${moveY}`;
          ++count;
          if (!s1Dots[key]) {
            s1Dots[key] = count;
          }
        }
        break;
      case 'D':
        for (let i = 1; i <= num; i++) {
          moveY = lastY - i;
          const key = `${moveX}|${moveY}`;
          ++count;
          if (!s1Dots[key]) {
            s1Dots[key] = count;
          }
        }
        break;
      default:
        break;
    }
    lastX = moveX;
    lastY = moveY;
  }
  return s1Dots;
}

function part2(params) {
  const lines = getDatas();
  const [s1, s2] = lines;
  const s1List = s1.split(',');
  const s2List = s2.split(',');
  let s1Dots = getDots2(s1List);
  let s2Dots = getDots2(s2List);
  let min = 99999999999;
  for (const [key, count] of Object.entries(s1Dots)) {
    if (s2Dots[key]) {
      const sum = Math.abs(count) + Math.abs(s2Dots[key]);
      if (sum < min) {
        min = sum;
      }
    }
  }
  console.log(min);
}

part2();

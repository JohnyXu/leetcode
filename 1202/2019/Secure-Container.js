const fs = require('fs');

// const fileName = './Secure-sample.txt';
const fileName = './Secure-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function getDatas() {
  const lines = readFile();
  return lines[0].split('-').map((num) => parseInt(num));
}

function part1() {
  const [num1, num2] = getDatas();

  function convertArr(num) {
    let arr = [];
    while (num > 0) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    return arr.reverse();
  }

  function checkRule1(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      if (current === next) {
        return true;
      }
    }
    return false;
  }

  function checkRule2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      if (current > next) {
        return false;
      }
    }
    return true;
  }

  function isValidPassword(num) {
    const arr = convertArr(num);
    return checkRule1(arr) && checkRule2(arr);
  }

  let count = 0;
  for (let i = num1; i < num2; i++) {
    if (isValidPassword(i)) {
      count += 1;
    }
  }
  console.log(count);
}

part1();

function part2() {
  const [num1, num2] = getDatas();

  function convertArr(num) {
    let arr = [];
    while (num > 0) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    return arr.reverse();
  }

  function checkRule1(arr) {
    let map1 = {};
    for (let i = arr.length - 1; i > 0; i--) {
      const current = arr[i];
      const prev = arr[i - 1];
      if (current === prev) {
        if (map1[current]) {
          map1[current] += 1;
        } else {
          map1[current] = 2;
        }
      }
    }

    let arrList = Object.entries(map1);
    if (arrList.length === 1 && arrList[0][1] === 2) {
      return true;
    } else {
      for (const ele of arrList) {
        if (ele[1] === 2) {
          return true;
        }
      }
    }
    return false;
  }

  function checkRule2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      if (current > next) {
        return false;
      }
    }
    return true;
  }

  function isValidPassword(num) {
    const arr = convertArr(num);
    return checkRule2(arr) && checkRule1(arr);
  }

  let count = 0;
  for (let i = num1; i < num2; i++) {
    if (isValidPassword(i)) {
      count += 1;
    }
  }
  console.log(count);
}
part2();

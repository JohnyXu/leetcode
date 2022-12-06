const fs = require('fs');

// const fileName = './Passport-sample.txt';
const fileName = './Passport-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function getDatas(lines) {
  let datas = [];
  let group = [];
  for (const line of lines) {
    if (!line.trim()) {
      datas.push(group.join(' '));
      group = [];
    } else {
      group.push(line);
    }
  }
  if (group.length > 0) {
    datas.push(group.join(' '));
  }
  return datas;
}

function mapPassportInfo(line) {
  const pairs = line.trim().split(' ');
  const result = {};
  for (const str of pairs) {
    const pair = str.split(':');
    const [key, value] = pair;
    result[key] = value;
  }
  return result;
}
function filterPassports(item) {
  const keys = Object.keys(item);
  return ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every((key) => {
    return keys.includes(key);
  });
}

function filterPassports2(item) {
  const keys = Object.keys(item);
  const validForKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every((key) => {
    return keys.includes(key);
  });

  const { byr, iyr, eyr, hgt, hcl, ecl, pid } = item;
  const validBirth = byr && byr.length === 4 && +byr >= 1920 && +byr <= 2002;
  const validIssue = iyr && iyr.length === 4 && +iyr >= 2010 && +iyr <= 2020;
  const validExp = eyr && eyr.length === 4 && +eyr >= 2020 && +eyr <= 2030;
  const validHgt =
    (hgt && hgt.endsWith('cm') && parseInt(hgt) >= 150 && parseInt(hgt) <= 193) ||
    (hgt && hgt.endsWith('in') && parseInt(hgt) >= 59 && parseInt(hgt) <= 76);
  const validHcl =
    hcl &&
    hcl.startsWith('#') &&
    hcl.length === 7 &&
    hcl
      .substring(1)
      .split('')
      .every((ch) => {
        const enable =
          (ch - '0' >= 0 && ch - '0' <= 9) ||
          (ch.charCodeAt(0) - 'a'.charCodeAt(0) >= 0 && ch.charCodeAt(0) - 'a'.charCodeAt(0) <= 5);
        return enable;
      });
  const validEcl = ecl && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl);
  const validPid = pid && pid.length === 9;

  const result =
    validForKeys &&
    validBirth &&
    validIssue &&
    validHgt &&
    validHcl &&
    validExp &&
    validEcl &&
    validPid;

  return result;
}

function part1() {
  const lines = readFile();
  let datas = getDatas(lines);
  const newDatas = datas.map(mapPassportInfo);
  const validDatas = newDatas.filter(filterPassports);
  console.log(validDatas.length);
}

part1();

function part2() {
  const lines = readFile();
  let datas = getDatas(lines);
  const newDatas = datas.map(mapPassportInfo);
  const validDatas = newDatas.filter(filterPassports2);
  console.log(validDatas.length);
}

part2();

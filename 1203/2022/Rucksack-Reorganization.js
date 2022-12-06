const fs = require('fs');

const fileName = './Rucksack-data.txt';

function part1() {
  let datas = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  for (const line of lines) {
    datas.push(line);
  }
  // datas = [
  //   'vJrwpWtwJgWrhcsFMMfFFhFp',
  //   'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  //   'PmmdzqPrVvPwwTWBwg',
  //   'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  //   'ttgJtRGJQctTZtZT',
  //   'CrZsJsPPZsGzwwsLwLmpwMDw',
  // ];

  let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowers = uppers.toLocaleLowerCase();
  let chMap = {};
  for (let i = 0; i < lowers.length; i++) {
    const ch = lowers[i];
    chMap[ch] = i + 1;
  }
  for (let i = 0; i < uppers.length; i++) {
    const ch = uppers[i];
    chMap[ch] = i + 1 + lowers.length;
  }

  let score = 0;
  for (const line of datas) {
    let first = line.substring(0, line.length / 2);
    let second = line.substring(line.length / 2);
    for (const ch1 of first) {
      if (second.includes(ch1)) {
        score = score + chMap[ch1];
        break;
      }
    }
  }
  console.log(score);
}

function part2() {
  let datas = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  for (const line of lines) {
    datas.push(line);
  }
  // datas = [
  //   'vJrwpWtwJgWrhcsFMMfFFhFp',
  //   'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  //   'PmmdzqPrVvPwwTWBwg',
  //   'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  //   'ttgJtRGJQctTZtZT',
  //   'CrZsJsPPZsGzwwsLwLmpwMDw',
  // ];

  let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowers = uppers.toLocaleLowerCase();
  let chMap = {};
  for (let i = 0; i < lowers.length; i++) {
    const ch = lowers[i];
    chMap[ch] = i + 1;
  }
  for (let i = 0; i < uppers.length; i++) {
    const ch = uppers[i];
    chMap[ch] = i + 1 + lowers.length;
  }

  let groups = [];
  let group = [];
  for (const line of datas) {
    group.push(line);
    if (group.length === 3) {
      groups.push(group);
      group = [];
    }
  }

  let sum = 0;
  for (const lineGroup of groups) {
    let possibleBadge = {};
    for (const [key, value] of Object.entries(chMap)) {
      possibleBadge[key] = true;
    }
    for (let i = 0; i < lineGroup[0].length; i++) {
      const ch = lineGroup[0][i];
      if (possibleBadge[ch] && lineGroup[1].includes(ch) && lineGroup[2].includes(ch)) {
        sum = sum + chMap[ch];
        break;
      } else {
        possibleBadge[ch] = false;
      }
    }
  }
  console.log(sum);
}

part2();

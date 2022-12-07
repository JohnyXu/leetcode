const fs = require('fs');

// 6291;
// 3052;
// const fileName = './Custom-sample.txt';
const fileName = './Custom-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function getGroups(lines) {
  let groups = [];
  let group = [];
  for (const line of lines) {
    if (!line.trim()) {
      groups.push(group);
      group = [];
    } else {
      group.push(line);
    }
  }
  if (group.length > 0) {
    groups.push(group);
  }
  return groups;
}

function getQuestionCount(list) {
  const sets = new Set([]);
  for (const answer of list) {
    if (answer.length === 1) {
      sets.add(answer);
    } else {
      const arr = answer.split('');
      for (const ans of arr) {
        sets.add(ans);
      }
    }
  }
  return sets.size;
}

function getQuestionCount2(list) {
  let sets = new Set([]);
  for (const answer of list) {
    if (answer.length === 1) {
      sets.add(answer);
    } else {
      const arr = answer.split('');
      for (const ans of arr) {
        sets.add(ans);
      }
    }
  }
  let count = 0;
  for (const answer of sets) {
    count =
      count +
      list.every((ans) => {
        return ans.includes(answer);
      });
  }
  return count;
}

function part1() {
  const lines = readFile();
  const groups = getGroups(lines);
  let sum = 0;
  for (const group of groups) {
    sum += getQuestionCount(group);
  }
  console.log(sum);
}

part1();

function part2() {
  const lines = readFile();
  const groups = getGroups(lines);
  let sum = 0;
  for (const group of groups) {
    sum += getQuestionCount2(group);
  }
  console.log(sum);
}

part2();

const fs = require('fs');

const fileName = './Rock-data.txt';

function part1() {
  let datas = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  for (const line of lines) {
    datas.push(line);
  }

  let chMap = {
    ['A']: 1,
    ['B']: 2,
    ['C']: 3,
    ['X']: 1,
    ['Y']: 2,
    ['Z']: 3,
  };
  function getCompareScore(chA, chB) {
    // equal draw
    if (chMap[chA] === chMap[chB]) {
      return 3;
    }
    if (chMap[chB] - chMap[chA] === 1 || chMap[chB] - chMap[chA] === -2) {
      return 6;
    }
    return 0;
  }

  function getScore(chA, chB) {
    let score = 0;
    // A for Rock, B for Paper, and C for Scissors
    //  X for Rock, Y for Paper, and Z for Scissors
    //  1 for Rock, 2 for Paper, and 3 for Scissors
    switch (chB) {
      case 'X':
        score += 1;
        break;
      case 'Y':
        score += 2;
        break;
      case 'Z':
        score += 3;
        break;
      default:
        break;
    }
    return score + getCompareScore(chA, chB);
  }

  let sum = 0;
  // datas = ['A Y', 'B X', 'C Z'];
  for (const group of datas) {
    const elements = group.split(' ');
    if (elements[0] && elements[1]) {
      let score = getScore(elements[0], elements[1]);
      sum = sum + score;
    }
  }
  console.log(sum);
  return sum;
}

function part2() {
  let datas = [];
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  for (const line of lines) {
    datas.push(line);
  }

  let chMap = {
    ['A']: 1,
    ['B']: 2,
    ['C']: 3,
    ['X']: 1,
    ['Y']: 2,
    ['Z']: 3,
  };
  function getCompareScore(chA, chB) {
    let score = 0;
    switch (chB) {
      // Lose
      case 'X':
        score = score + (chMap[chA] > 1 ? chMap[chA] - 1 : 3);
        break;
      // Draw
      case 'Y':
        score = score + chMap[chA];
        break;
      // Win
      case 'Z':
        score = score + (chMap[chA] < 3 ? chMap[chA] + 1 : 1);
        break;
      default:
        break;
    }
    return score;
  }

  function getScore(chA, chB) {
    let score = 0;
    //  A for Rock, B for Paper, and C for Scissors
    //  X for Rock, Y for Paper, and Z for Scissors
    //  1 for Rock, 2 for Paper, and 3 for Scissors
    switch (chB) {
      case 'X':
        score += 0;
        break;
      case 'Y':
        score += 3;
        break;
      case 'Z':
        score += 6;
        break;
      default:
        break;
    }
    return score + getCompareScore(chA, chB);
  }

  let sum = 0;
  // datas = ['A Y', 'B X', 'C Z'];
  for (const group of datas) {
    const elements = group.split(' ');
    if (elements[0] && elements[1]) {
      let score = getScore(elements[0], elements[1]);
      sum = sum + score;
    }
  }
  console.log(sum);
  return sum;
}

part2();
